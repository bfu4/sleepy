<template>
  <div id="app">
    <link rel="stylesheet" href="/styles.css">
    <div class="m-1 columns is-centered is-mobile">

      <nav class="column navbar real-navbar columns is-mobile is-fixed-top" style="padding: 20px;">
        <a class="column real-nav-item m-2 ml-5 is-narrow nav-link has-text-weight-bold pad-10 white-text"
           href="/blog/fakerender" target="_blank">
          feature of the week
        </a>
        <a class="column real-nav-item m-2 ml-5 is-narrow nav-link has-text-weight-bold pad-10 white-text" href="/blog"
           target="_blank">blog</a>
        <!-- @Copystrike go brrr -->
        <a class="column real-nav-item m-2 ml-5 is-narrow nav-link has-text-weight-bold pad-10 white-text" href="/horse"
           target="_blank">horse</a>
      </nav>

      <!-- fun images for the lolz -->
      <div class="m-5">
        <div class="column columns is-multiline is-centered is-narrow is-mobile"
             style="padding-top: 100px; padding-left: 100px; padding-right: 100px;">
          <div class="m-5">
            <div class="column is-centered is-full is-mobile columns m-2 is-mobile">
              <figure class="column image fig fig-1">
                <img class="profile-img1 is-1by1" src="/46942366"/>
              </figure>
              <figure class="column image fig">
                <img class="profile-img2 is-1by1" src="/twtimg.jpg"/>
              </figure>
            </div>

            <div class="special column is-full is-centered large bold force-center">bfu4</div>
          </div>

          <div class="column is-full m-5 columns is-centered is-mobile is-multiline">

            <!-- github -->
            <div class="column is-centered columns is-mobile is-multiline">
              <div class="m-3 column is-narrow">
                <a href="https://github.com/bfu4" target="_blank">
                  <font-awesome-icon class="fa-icon" :icon="['fab', 'github']"></font-awesome-icon>
                </a>
              </div>

              <!-- linkedin -->
              <div class="m-3 column is-narrow">
                <a href="https://www.linkedin.com/in/bella-fusari-2337b3202" target="_blank">
                  <font-awesome-icon class="fa-icon" :icon="['fab', 'linkedin']"></font-awesome-icon>
                </a>
              </div>
              <!-- discord -->
              <div class="m-3 column is-narrow">
                <a href="https://dsc.bio/neemy" target="_blank">
                  <font-awesome-icon class="fa-icon" :icon="['fab', 'discord']"></font-awesome-icon>
                </a>
              </div>

              <!-- sc -->
              <div class="m-3 column is-narrow">
                <a href="https://soundcloud.com/bellafusari" target="_blank">
                  <font-awesome-icon class="fa-icon" :icon="['fab', 'soundcloud']"></font-awesome-icon>
                </a>
              </div>

              <!-- gitlab -->
              <div class="m-3 column is-narrow">
                <a href="https://gitlab.com/bfu4" target="_blank">
                  <font-awesome-icon class="fa-icon" :icon="['fab', 'gitlab']"></font-awesome-icon>
                </a>
              </div>

              <!-- mail -->
              <div class="m-3 column is-narrow">
                <a href="mailto:bella@sleeeepyti.me">
                  <font-awesome-icon class="fa-icon" :icon="['fa', 'envelope']"></font-awesome-icon>
                </a>
              </div>

              <!-- spotify -->
              <div class="m-3 column is-narrow">
                <a href="https://open.spotify.com/user/f67gjtkldznx2kxntf8a0tmzp">
                  <font-awesome-icon class="fa-icon" :icon="['fab', 'spotify']"></font-awesome-icon>
                </a>
              </div>

            </div>

          </div>
            <spotify-hook class="m-5 column is-full"></spotify-hook>
          <div class="column m-5 columns is-multiline is-mobile">
            <!-- brief -->
            <blog-link
              class="column m-3 is-full"
              title="About me"
              desc="I'm a software engineer that enjoys writing code, anime, reverse engineering, and writing."
              type="pin"
            />

            <!-- langs -->
            <blog-link
              class="column m-3 is-full"
              title="Languages"
              desc=""
              type="lang"
            />

            <!-- worked on -->
            <blog-link
              class="column m-3 is-full"
              title="What I've Worked On"
              desc="I've worked on multiple Spigot plugins
            , a few private websites, have played with ChromeOS 😉, reverse-engineered some tools (as well as java applications)
            , and automating and deploying with TravisCI and Nexus."
              type="pin"
            />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  // lol?
  beforeCreate() {
    console.log("===========================================");
    console.log(" So you're peeking.. Follow my twitter @bellafusari1")
    console.log("===========================================");
  }
})
</script>
