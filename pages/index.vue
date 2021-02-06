<template>
  <div id="app">
    <link rel="stylesheet" href="/styles.css">
    <div class="m-1 is-centered is-mobile">
      <nav class="column navbar real-navbar columns is-mobile is-fixed-top" style="padding: 20px;">
        <a class="column real-nav-item m-2 ml-5 is-narrow nav-link has-text-weight-bold pad-10 white-text" href="https://github.com/bfu4/TeleportQueue" target="_blank">feature of the week</a>
        <a class="column real-nav-item m-2 ml-5 is-narrow nav-link has-text-weight-bold pad-10 white-text" href="/blog" target="_blank">blog</a>
      </nav>
      <div class="columns is-multiline is-centered is-mobile" style="padding-top: 100px; padding-left: 100px; padding-right: 100px;">
        <div class="m-5">
          <div id="navbar" class="column m-5 columns is-left is-centered is-mobile is-multiline">
            <div class="column is-centered columns is-mobile is-multiline">
              <nav-button class="m-2 column is-narrow" img="/twitter-grn.png" url="https://twitter.com/bellafusari1"/>
              <nav-button class="m-2 column is-narrow" img="/gitgreen.png" url="https://github.com/bfu4"/>
              <nav-button class="m-2 column is-narrow" img="/horsegrn.png" url="https://sleeepy.ninja/horse"/>
              <nav-button class="m-2 column is-narrow" img="/asu.jpg" v-bind:round="true"
                          url="https://sleeeepyti.me/extern/catmc.mp4"/>
              <nav-button class="m-2 column is-narrow" img="/dscgrn.png" url="https://dsc.bio/neemy"/>
              <nav-button class="m-2 column is-narrow" img="/sc.png" url="https://soundcloud.com/bellafusari"/>
              <nav-button class="m-2 column is-narrow" img="/linkedin.png"
                          url="https://www.linkedin.com/in/bella-fusari-2337b3202?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BOvPg3niOTwWUtKyquus9Xg%3D%3D"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
