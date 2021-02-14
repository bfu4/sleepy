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
    <p v-else class="groo m-1">
      <span class="m-3" style="font-size: 30px">
        <font-awesome-icon :icon="['fab', 'cuttlefish']"></font-awesome-icon>++
      </span>
      <span class="m-3" style="font-size: 30px">
        <font-awesome-icon :icon="['fab', 'java']"></font-awesome-icon>
      </span>
      <span class="m-3" style="font-size: 30px">
        <img src="/sol.svg"  width="40px" height="40px">
      </span>
      <span class="m-3" style="font-size: 30px">
        <font-awesome-icon :icon="['fa', 'terminal']"></font-awesome-icon>
      </span>
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
    desc: String,
    type: String,
  }
})
export default class BlogLink extends Vue {
}
</script>

<style scoped>

</style>
