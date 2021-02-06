<template>
  <div class="m-5">
    <link rel="stylesheet" href="/styles.css">
    <div class="columns is-multiline is-mobile is-centered m-5">
      <div class="column force-center is-full">
        <a class="boxeh m-3 large bold white-text link" style="padding: 20px;" href="/">
          sleepy
        </a>
      </div>
      <div class="column force-center is-full">
        <img src="/horse.png">
      </div>
      <div class="m-5 force-center mol is-full gray m-3">
        Welcome to horse. The page for links about our favorite horse! &lt;3
      </div>
      <div class="column is-full columns m-5 is-centered is-multiline is-mobile" style="padding: 30px;">
        <Link class="column is-narrow img-link nav-button m-4" imgSrc="/githorse.png" link="https://github.com/Copystrike"/>
        <Link class="column is-narrow img-link nav-button m-4" imgSrc="/tweethorse.png" link="https://twitter.com/Nick_vn"/>
        <Link class="column is-narrow img-link nav-button m-4" imgSrc="/horsesite.png" link="https://copystrike.dev"/>
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
