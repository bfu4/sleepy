<template>
  <a class="link white pin" v-bind:href="link" target="_blank">
    <img v-bind:src="imgSrc" style="width: 100px; height: 75px">
  </a>
</template>

<script>
export default {
  props: {
    link: String,
    imgSrc: String
  }
}
</script>
