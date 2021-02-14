<template>
  <div id="app">
    <link rel="stylesheet" href="/styles.css">
    <div class="m-1 is-centered is-mobile">

      <nav class="column navbar real-navbar columns is-mobile is-fixed-top" style="padding: 20px;">
        <a class="column real-nav-item m-2 ml-5 is-narrow nav-link has-text-weight-bold pad-10 white-text"
           href="/blog/postfix-1" target="_blank">
          feature of the week
        </a>
        <a class="column real-nav-item m-2 ml-5 is-narrow nav-link has-text-weight-bold pad-10 white-text" href="/blog" target="_blank">blog</a>
        <!-- @Copystrike go brrr -->
        <a class="column real-nav-item m-2 ml-5 is-narrow nav-link has-text-weight-bold pad-10 white-text" href="/horse" target="_blank">horse</a>
      </nav>

      <!-- fun images for the lolz -->
      <div class="columns is-multiline is-centered is-mobile" style="padding-top: 100px; padding-left: 100px; padding-right: 100px;">
        <div class="m-5">
          <div class="column is-centered is-full is-mobile columns m-2 is-mobile">
            <figure class="column image fig fig-1">
              <img class="profile-img1 is-1by1" src="/46942366"/>
            </figure>
            <figure class="column image fig">
              <img class="profile-img2 is-1by1" src="/twtimg.jpg"/>
            </figure>
          </div>

          <div class="special column is-centered large bold force-center">bfu4</div>

          <!-- github -->
          <div class="column m-5 columns is-left is-centered is-mobile is-multiline">
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
              <!--<nav-button class="m-2 column is-narrow" img="/gitgreen.png" url="https://github.com/bfu4"/>
              <nav-button class="m-2 column is-narrow" img="/horsegrn.png" url="/horse"/>
              <nav-button class="m-2 column is-narrow" img="/asu.jpg" v-bind:round="true"
                          url="https://sleeeepyti.me/extern/catmc.mp4"/>
              <nav-button class="m-2 column is-narrow" img="/dscgrn.png" url="https://dsc.bio/neemy"/>
              <nav-button class="m-2 column is-narrow" img="/sc.png" url="https://soundcloud.com/bellafusari"/>
              <nav-button class="m-2 column is-narrow" img="/linkedin.png"-->
            </div>
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
