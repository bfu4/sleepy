<template>
  <div class="m-5">
    <link rel="stylesheet" href="/styles.css">
    <nav class="navbar real-navbar columns is-mobile is-fixed-top" style="padding: 20px;">
      <a class="column real-nav-item m-2 ml-5 is-narrow nav-link has-text-weight-bold pad-10 white-text" href="/"
         target="_blank">home</a>
    </nav>
    <div class="force-center columns is-multiline is-mobile" style="padding-top: 150px; padding-right: 100px; padding-left: 100px;">
      <div class="column large bold is-full">Oh no!</div>
      <div class="column m-1 is-centered force-center is-full">
        Something went wrong. Enjoy a meme, I guess.
      </div>
      <figure class="column image">
        <img style="border-radius: 30px;" src="/qcode.png">
      </figure>
    </div>
   </div>
</template>

<script>
export default {
  name: "error"
}
</script>

<style scoped>

</style>
