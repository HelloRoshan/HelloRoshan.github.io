<template>
  <div class="main-container">
    <Particle />
    <NavBar />
    <div class="wrapper">
      <section class="container youtube-player">
        <img src="~/assets/music-logo.png" class="music-logo" alt="Music-Logo">
        <div class="iframe-container">
          <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/videoseries?list=PLiVUkHwbn2RbgDCbqVZ-FAk_LgXvOwuzy"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen />
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import NavBar from '~/components/NavBar.vue';
import Particle from '~/components/Particle.vue'

export default {
  components: {
    NavBar,
    Particle
  },
  computed: {
    youtubeId() {
      return 'PLiVUkHwbn2RbgDCbqVZ-FAk_LgXvOwuzy';
    }
  },
  mounted() {
    document.title = 'Music';
  }
};
</script>
<style scoped>


.wrapper {
  height: 100%;
}
.youtube-player {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.background-image {
  height: 100%;
  width: 100%;
  object-fit: cover;
  filter: blur(25px);
  position: absolute;
  content: '';
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.5;
}
.background-image img {
  object-fit: cover;
  height: 100%;
  display: block;
  margin: 0 auto;
}
.iframe-container {
  position: relative;
  width: 100%;
  max-width: 560px;
  text-align: center;
}
.iframe-container iframe {
  width: 100%;
  border-radius: 4px;
  border: 9px solid #fff;
}
.music-logo {
  height: 5rem;
  margin-bottom: 2rem;
  border: 2px solid #fff;
  border-radius: 50%;
  z-index: 0;
}
</style>