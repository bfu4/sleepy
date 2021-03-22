<template>
  <div>
    <link rel="stylesheet" href="/md.css"/>
    <nuxt-content :document="article"/>
  </div>
</template>

<script>
export default {
  async asyncData({$content, params}) {
    const article = await $content('articles', params.slug).fetch();

    return {article}
  }
}
</script>
<style lang="css">
@import "static/md.css";
</style>
