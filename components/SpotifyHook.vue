<template>
  <div class="m-5">
    {{ $data.song }}
  </div>
</template>

<script lang="ts">
import { getSong, getToken } from "assets/spotify";

export const token = "BQAqE9w9EkiCYgYCXjNDmT36a2_Ev21uVo21RAR9_7NbtHH6Mh229Y0emX8ZD23TwhtArvaqPMrqD4XdKMbgOsE_TegbDv4HBQAPbKUGSZSsAQU27DKcT6-WR2elbRn8HfUcRM8s0qj44yp8KPUIN3MYl-dynv5yUfncgw4XdZNliuIJfuwC-U2V7F4hcba-"

export default {
  name: "SpotifyHook",
  data() {
    return {
      song: getSong(getToken())
    }
  }
}
</script>

<style scoped>

</style>
