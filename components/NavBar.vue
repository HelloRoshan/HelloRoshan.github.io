<template>
  <nav>
    <div class="nav-wrapper" style="padding:0 2rem;">
      <!-- <n-link to="/" class="brand-logo">RB</n-link> -->
      <ul class="right hide-on-med-and-down">
        <li>
          <n-link to="/">About Me</n-link>
        </li>
        <!-- <li>
          <n-link to="/">Contact</n-link>
        </li> -->
        <li>
          <n-link to="/music">Music</n-link>
        </li>
      </ul>
    </div>
  </nav>
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
  background-color: #1A1110;
}
li > a {
  font-family: 'SulphurPoint-Regular';
}
</style>
