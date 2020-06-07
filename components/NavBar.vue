<template>
  <b-navbar toggleable="lg" type="dark" :sticky="true">
    <b-navbar-nav class="ml-auto">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-nav-item to="/">
          About Me
        </b-nav-item>
        <b-nav-item to="/music">
          Music
        </b-nav-item>
      </b-collapse>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
export default {
  name: 'NavBar',
};
</script>
<style scoped>
nav {
  height: 44px;
  line-height: 44px;
}
.navbar-nav .nav-link {
  font-family: 'SulphurPoint-Regular';
  color: #fff;
}
</style>
