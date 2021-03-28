<template>
  <div>
    <a v-bind:href="href" target="_blank">
      <p>
        <span v-if="type === 'blog'" class="large blog-ref">
          <font-awesome-icon :icon="['fab', 'readme']"></font-awesome-icon>
          {{ title }}
        </span>
        <span v-else-if="type === 'pin' || type === 'lang'" class="large blog-ref">
          <font-awesome-icon :icon="['fa', 'angle-right']"></font-awesome-icon>
          {{ title }}
        </span>
      </p>
    </a>
    <p v-if="type !== 'lang'" class="groo m-1">
      &emsp; {{ desc }}
    </p>
    <div v-else class="groo m-1 columns">
      <figure class="m-3 column" style="font-size: 30px; filter: grayscale(1)">
        <img src="/cpppp.png" width="40px" height="40px">
      </figure>
      <span class="m-3 column" style="font-size: 35px">
        <font-awesome-icon :icon="['fab', 'java']"></font-awesome-icon>
      </span>
      <figure class="m-3 mt-4 column" style="font-size: 30px; padding-top: 10px;">
        <img src="/sol.svg"  width="60px" height="60px">
      </figure>
      <span class="m-3 column" style="font-size: 30px">
        <font-awesome-icon :icon="['fa', 'terminal']"></font-awesome-icon>
        bash
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from "vue-class-component";

@Component({
  props: {
    title: String,
    href: String,
    desc: String,
    type: String,
  }
})
export default class BlogLink extends Vue {
}
</script>

<style scoped>

</style>
