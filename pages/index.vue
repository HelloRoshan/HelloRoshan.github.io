<template>
  <div class="main-container">
    <Particle />
    <NavBar />
    <section class="content-wrapper">
      <div class="description">
        <h1>Hello, I'm <span class="red-text text-accent-3">Roshan Budhathoki</span>.</h1>
        <h1>I'm a Front-End Developer</h1>
      </div>
    </section>
  </div>
</template>
<script>
import NavBar from '~/components/NavBar.vue';
import Particle from '~/components/Particle.vue';

export default {
  components: {
    NavBar,
    Particle
  },
  mounted() {
    document.title = 'Home';
  }
};
</script>
<style scoped>
.content-wrapper {
  height: 100%;
  padding: 0 2rem;
}
h1 {
  margin: 0;
  color: #fff;
  font-family: 'Sanchez-Regular';
  font-size: 40px;
  line-height: 56px;
}
.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
}
@media only screen and (max-width: 640px) {
  h1 {
    font-size: 20px;
    line-height: 36px;
  }
}
</style>
