# LimitedList

*I was in a situation where I wanted to try to recreate ArrayList, but primitively. Adding to that, I wanted the list to rotate when trying to add something out of bounds.*

<br />
<hr />
<br />

### Creating this was to answer 2 questions:
Java has its own optimizations and specialties, but is this doable with our primitive types? As well as that, can we find a way to limit and rotate this list?

This might be one of my most useful tools that I've created for myself -- and here's how I did it.

<br />
<hr />

<a href="https://raw.githubusercontent.com/bfu4/TeleportQueue/master/src/main/java/com/github/bfu4/teleportqueue/abs/LimitedList.java" target="_blank" class="is-18">[ VIEW RAW ]</a>
```java
import java.util.Arrays;
import java.util.List;

public class LimitedList<E> {

   private int maxSize;
   private Object[] elements;

   private final Object lock;

   /**
    * Create a new list
    *
    * @param maxSize max size of the list
    */
   public LimitedList(int maxSize) {
      this.maxSize = maxSize;
      this.lock = new Object();

      elements = new Object[0];
   }

   /**
    * Set the item at the specified index
    *
    * @param index index to set the element at
    * @param element element to set
    * @throws IndexOutOfBoundsException if the index is larger than the dynamic {@link LimitedList#size()}
    */
   public void set(int index, E element) throws IndexOutOfBoundsException {
      if (elements.length == 0) {
         elements = new Object[1];
         elements[0] = element;
      } else {
         if (index != elements.length && index < elements.length) {
            elements[index] = element;
            return;
         }
         throw new IndexOutOfBoundsException("Index is larger than the current length of the dynamic LimitedList!");
      }
   }

   public void setMaxSize(int newSize) {
      synchronized (lock) {
         this.maxSize = newSize;
      }
   }

   /**
    * Add an element to the list.
    *
    * @param element element to add
    */
   public void add(E element) {
      synchronized (lock) {
         if (elements.length == maxSize) {
            // Scoot objects over
            for (int i = 1; i < elements.length; i++) {
               elements[i - 1] = elements[i];
            }
            elements[maxSize - 1] = element;
         } else {
            int maxRealloc = (elements.length >= 1) ? elements.length + 1 : 1;
            Object[] tempArray = new Object[maxRealloc];

            for (int i = 0; i < elements.length; i ++) {
               tempArray[i] = elements[i];
            }

            tempArray[maxRealloc - 1] = element;
            elements = tempArray;
         }
      }
   }

   /**
    * Remove element from list.
    *
    * @param element element to remove
    */
   public void remove(E element) {
      synchronized (lock) {
         int index = indexOf(element);
         if (index == -1) return;

         elements[index] = null;
         shiftOverNull();
      }
   }

   /**
    * Get element from list.
    *
    * @param index index of element
    * @return element
    */
   @SuppressWarnings("unchecked")
   public E get(int index) {
      return (E) elements[index];
   }

   public int indexOf(E element) {
      int index = -1;
      for (int i = 0; i < elements.length; i ++) {
         if (elements[i] == null) continue;
         if (elements[i].equals(element)) {
            index = i;
            break;
         }
      }
      return index;
   }

   /**
    * Turn this list into an array.
    *
    * @return an array of the elements stored in this list.
    */
   @SuppressWarnings("unchecked")
   public E[] toArray() {
      return (E[]) elements;
   }

   /**
    * Shift over null values.
    */
   private void shiftOverNull() {
      Object[] newArray = new Object[elements.length - nullElementAmount()];
      int currentIndex = 0;
      for (Object element: elements) {
         if (element != null) {
            newArray[currentIndex] = element;
            currentIndex ++;
         }
      }
      elements = newArray;
   }

   /**
    * Get the amount of null elements
    *
    * @return amount of elements null
    */
   private int nullElementAmount() {
      int amount = 0;
      for (Object element : elements) {
         if (element == null) amount++;
      }
      return amount;
   }

   /**
    * Get the amount of items stored in this list.
    *
    * @return amount of items stored in the list
    */
   public int size() { return elements.length; }

   /**
    * Clear the entire list.
    */
   public void clear() {
      elements = new Object[0];
   }

   @Override
   public String toString() {
      return Arrays.toString(elements);
   }

   public List<E> asList() {
      return Arrays.asList(toArray());
   }

}
```
