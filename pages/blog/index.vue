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
        <a class="column m-3 boxeh2 is-full mol" href="/blog/quadreg">
        <p class="groo">
            (quadreg) - using java to get create a line of best fit given restraints, and find points on that line.
          </p>
        </a>
        <a class="column m-3 boxeh2 is-full mol" href="/blog/limited-list">
          <p class="groo">
            (limited list) - another java writeup, but on using primitive arrays to have rotating array list.
          </p>
        </a>
        <a class="column m-3 boxeh2 is-full mol" href="/blog/jni-1">
          <p class="groo">
            (jni - 1) - simple tutorial of compiling and using jni on ubuntu in a small classpath using javac.
          </p>
        </a>
        <a class="column m-3 boxeh2 is-full mol" href="/blog/postfix-1">
          <p class="groo">
            (postfix - 1) - simple and probably hacky way of setting up a custom domain email on a VPS using postfix and dovecot.
          </p>
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: "index.vue"
}
</script>
