# Forcing Bukkit to "render" maps in the background
*I wrote it as a gist, so I might as well actually explain it!*

## Background
Honestly, this comes off as something that's probably not useful. However, it is.
This concept comes from the need to ***render*** maps to the client without them holding the map in their hands!
Why? Think a pre-existing ItemFrame **<u>entity</u>** that the player sees randomly. They've never seen this MapView before. The client doesn't render it!
We can combat this by tricking Bukkit, in a sense.

[Github Gist](https://gist.github.com/bfu4/f224f4736f11328a4c2304c38f09e0c3)

## Getting Started
First off, you'll need some sort of access to CraftBukkit. You'll have to figure out how you want to do that,
but after you get that, it should be smooth-sailing.

The classes we need from CraftBukkit are **CraftPlayer**, **CraftMapView**, and **RenderData**.

We need a specific Field from CraftMapView. So lets fetch ourselves the `CraftMapView#renderCache`.

### Stealing the field

```java
static Field craftMapView$renderCache;

static {
   try {
      craftMapView$renderCache = CraftMapView.class.getDeclaredField("renderCache");
      craftMapView$renderCache.setAccessible(true);
   } catch (NoSuchFieldException e) {
      // error handling
   }
}
```

Now that this field is accessible, we can access it when we "render" the maps.
I do this during the `PlayerJoinEvent`. However, it can be done anywhere.

Before we get to loading the maps, we need to keep in mind that it will only trick Bukkit if it gets MapRenderer#isContextual as true!
With the default renderer, this won't happen. It's set to false by default. However, by implementing our own renderer with our maps of choice,
we can set that value on instantiation:

### The custom renderer
```java
/**
 * An example renderer class
 */
public class SomeRenderer extends MapRenderer {
  
   public SomeRenderer() {
       // The first trick of this is feeding "true" into the super call
       // Since MapRenderer is really a CraftRenderer, this sets CraftRenderer#isContextual to true
       // We need to trick the actual render implementation so that the player it caches is not null,
       // so we need CraftRenderer#isContextual to return true.
       super(true); 
   }
  
  
   @Override
    public void render(MapView mapView, MapCanvas mapCanvas, Player player) {
       // Do something
    }
```

This renderer should then be set for the map of choice. This can be done with three method calls:

```java
// Get the MapView
MapView view = Bukkit.getMap(mapId);
// Clear renderers
view.getRenderers().clear();
// Add your renderer
view.addRenderer(new SomeRenderer());
```

### Loading the maps
We can finally load all the maps in. As stated before, I do this when the player joins, in a fashion like this:
```java
@EventHandler
public void onPlayerJoin(PlayerJoinEvent event) {
  // We'll need this object later for the CraftMapView.
  CraftPlayer player = (CraftPlayer) event.getPlayer();
  // For this example, we will be iterating through a List<Integer>
  List<Integer> mapIds = maps.values(); // Assume maps is a Map<String, Integer>
  mapIds.forEach(id -> {
       // Get a MapView for the map
      MapView view = Bukkit.getMap(id);
      // We like to null check
      if (view != null) {
          // Cast to CraftMapView so we can use it.
          CraftMapView craftView = (CraftMapView) view;
          
          // Steal the field we acquired earlier.
          try {
              Map<CraftPlayer, RenderData> cache = craftMapView$renderCache.get(craftView);
              // Check to see if the cache doesn't contain the player
              if (!cache.containsKey(player)) {
                // Render function
                craftView.render(player);
                // Update the map.
                player.sendMap(view);
              }
          } catch (IllegalAccessException e) {
            // error handling
          }
      }
  });
}
```
