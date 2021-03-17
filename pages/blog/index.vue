<template>
  <div>
    <link rel="stylesheet" href="/styles.css"/>
    <div class="m-5 columns is-centered is-mobile is-multiline">

      <nav class="column navbar real-navbar columns is-mobile is-fixed-top" style="padding: 20px;">
        <a class="column real-nav-item m-2 ml-5 is-narrow nav-link has-text-weight-bold pad-10 white-text" href="/"
           target="_blank">home</a>
        <a class="column real-nav-item m-2 ml-5 is-narrow nav-link has-text-weight-bold pad-10 white-text" href="/horse" target="_blank">horse</a>
      </nav>

      <div class="column is-full force-center mol"
           style="padding-top: 100px; padding-left: 100px; padding-right: 100px;">
        <p class="large bold">Blog</p>
        <p class="groo">
          Mainly for the purpose of archiving what has made me suffer, as well as cool things I've come upon.
          There might be more stuff like this on my
          <a href="https://gist.github.com/bfu4" class="grlnk">Github Gist</a>, if you'd like to check it out.
        </p>

        <hr/>
      </div>
      <div class="column m-5 columns is-multiline is-mobile is-centered bold">

        <!-- #5 -->
        <blog-link
          class="column m-3 is-full"
          title="Background Map Rendering"
          href="/blog/fakerender"
          desc="Tricking Bukkit into pre-rendering maps in the background"
        />

        <!-- #4 -->
        <blog-link
          class="column m-3 is-full"
          title="Postfix (#1)"
          href="/blog/postfix-1"
          desc="A simple and probably hacky way of setting up a custom domain email on a VPS using postfix and
            dovecot."
          type="blog"
        />

        <!-- #3 -->
        <blog-link
          class="column m-3 is-full"
          title="JNI (#1)"
          href="/blog/jni-1"
          desc="A simple walkthrough of compiling and using JNI on Debian (CrOS) in a small classpath using javac."
          type="blog"
        />

        <!-- #2 -->
        <blog-link
          class="column m-3 is-full"
          title="Limited List"
          href="/blog/limited-list"
          desc="Another Java post, but on using primitive arrays to have rotating ArrayList."
          type="blog"
        />

        <!-- #1 -->
        <blog-link
          class="column m-3 is-full"
          title="Quadreg"
          href="/blog/quadreg"
          desc="Using Java to simulate quadratic regression to be able to find a line of best fit."
          type="blog"
        />

      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: "index.vue"
}
</script>
