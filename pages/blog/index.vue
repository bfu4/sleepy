<template>
  <div>
    <link rel="stylesheet" href="/styles.css"/>
    <div class="m-5 columns is-centered is-mobile is-multiline white-text large">
      <div class="column is-full force-center bold">blogs(ish)</div>
      <div class="column is-full force-center mol">
        <p class="groo">
          These are my blogs/writeups/whatever else. A few of these are actually from my page on
          <a href="https://gist.github.com/bfu4" class="grlnk">github gist</a>.
        </p>
      </div>
      <div class="column m-5 columns is-multiline is-mobile is-centered boxeh bold">
        <p class="column m-3 boxeh2 is-full mol">
          <a class="groo" href="./quadreg">
            (quadreg) - using java to get create a line of best fit given restraints, and find points on that line.
          </a>
        </p>
        <p class="column m-3 boxeh2 is-full mol">
          <a class="groo" href="./limited-list">
            (limited list) - another java writeup, but on using primitive arrays to have rotating array list.
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: "index.vue"
}
</script>
