<template>
  <div class="home-main-container">
    <NavBar />
    <section class="content-wrapper">
      <div class="description">
        <h3>Hello, I'm <span class="red-text text-accent-3">Roshan Budhathoki</span>.</h3>
        <h3>I'm a Front-End Developer</h3>
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
  mounted() {
    document.title = 'Home'
  }
};
</script>
<style scoped>
.home-main-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content-wrapper {
  height: 100%;
  background-color: #1a1110;
  padding: 0 2rem;
}
h3 {
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
</style>
