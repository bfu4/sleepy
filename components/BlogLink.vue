<template>
  <div>
    <a v-bind:href="href" target="_blank">
      <p>
              <span class="large blog-ref">
                <font-awesome-icon :icon="['fab', 'readme']"></font-awesome-icon>
                {{ title }}
              </span>
      </p>
    </a>
    <p class="groo m-1">
      &emsp; {{ desc }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component";

@Component({
  props: {
    title: String,
    href: String,
    desc: String
  }
})
export default class BlogLink extends Vue { }
</script>

<style scoped>

</style>
