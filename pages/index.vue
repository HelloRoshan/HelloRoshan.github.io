<template>
  <div>
    <NavBar />
    <section style="padding: 0 2rem;">
      <div style="max-width:700px;">
        <h2>
          Front<span class="red-text text-accent-3">-</span>End Developer<span class="red-text text-accent-3">.</span> 
        </h2>
        <h6 style="line-height:1.5;">
          Hi, I'm Roshan! I am a Web Developer working with <span class="green-text text-accent-4">Vue.js</span>. I currently live in Kathmandu, Nepal. I am available for freelance jobs, just send me an email.
        </h6>
      </div>
    </section>
  </div>
</template>
<script>
import NavBar from '~/components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>
