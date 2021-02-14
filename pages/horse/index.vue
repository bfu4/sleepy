<template>
  <div class="m-5">
    <link rel="stylesheet" href="/styles.css">
    <div class="columns is-multiline is-mobile is-centered m-5">
      <nav class="column navbar real-navbar columns is-mobile is-fixed-top" style="padding: 20px;">
        <a class="column real-nav-item m-2 ml-5 is-narrow nav-link has-text-weight-bold pad-10 white-text"
           href="/" target="_blank">home</a>
        <a class="column real-nav-item m-2 ml-5 is-narrow nav-link has-text-weight-bold pad-10 white-text" href="/blog"
           target="_blank">blog</a>
      </nav>

      <div class="column m-3 columns is-mobile is-multiline"
           style="padding-top: 100px; padding-left: 100px; padding-right: 100px;">
        <div class="column force-center is-full">
          <img src="/horse.png">
        </div>
        <div class="column m-5 force-center mol is-full m-3">
          Welcome to horse. The page for links about our favorite horse! &lt;3
        </div>
        <div class="column is-full columns m-5 is-centered is-multiline is-mobile" style="padding: 30px;">
          <Link class="column is-narrow img-link nav-button m-4" imgSrc="/githorse.png"
                link="https://github.com/Copystrike"/>
          <Link class="column is-narrow img-link nav-button m-4" imgSrc="/tweethorse.png"
                link="https://twitter.com/Nick_vn"/>
          <Link class="column is-narrow img-link nav-button m-4" imgSrc="/horsesite.png" link="https://copystrike.dev"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index.vue"
}
</script>

<style scoped>

</style>
