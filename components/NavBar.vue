<template>
    <b-navbar toggleable="lg" type="dark" class="ml-n3 mobile-toggle-menu">
      <b-navbar-nav align="start">
        <b-navbar-toggle target="nav-collapse" />
        <b-collapse id="nav-collapse" is-nav>
          <b-nav-item active class="nav-menu-item">Home</b-nav-item>
          <!-- <b-nav-item class="nav-menu-item">
            <NuxtLink to="#about" class="text-white" >About</NuxtLink>
          </b-nav-item>           -->
          <b-nav-item class="nav-menu-item">
            <NuxtLink to="/music" class="text-white" >Music 🎧</NuxtLink>
          </b-nav-item>
          <b-nav-item class="nav-menu-item">
            <NuxtLink to="#projects" class="text-white" >Projects</NuxtLink>
          </b-nav-item>
          <!-- <b-nav-item class="nav-menu-item">Resume</b-nav-item> -->
          <!-- <b-nav-item class="nav-menu-item">Contact</b-nav-item> -->
        </b-collapse>
      </b-navbar-nav>
    </b-navbar>
</template>
<style scoped>
.nav-menu-item {
    position: relative;
}
.nav-menu-item > .nav-link {
    color: rgba(255,255,255, .8);
    font-family: 'SulphurPoint-Regular', 'sans-serif';
    font-weight: 900;
}
.nav-menu-item:first-child > .nav-link {
    padding-left: 0;
}
.nav-menu-item > .nav-link:before {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: .5rem;
    background-color: #18d26e;
    visibility: hidden;
    width: 0px;
    transition: all 0.3s ease-in-out;
}
.nav-menu-item:first-child > .nav-link:before {
    left: 0;
}
.nav-menu-item > .nav-link.active:before {
    width: 30px;
}
.nav-menu-item:hover > .nav-link:before,
.nav-menu-item > .nav-link.active:before {
    visibility: visible;
    width: 30px;
}
@media (max-width: 992px) {
  .mobile-toggle-menu {
    position: fixed;
    right: 0;
    top: 15px;
    z-index: 9998;
    border: 0;
    background: none;
    transition: all 0.4s;
    outline: none !important;
    line-height: 1;
    cursor: pointer;
    text-align: right;
  }
  .nav-menu-item {
    margin-bottom: .5rem;
  }
  .nav-menu-item > .nav-link:before {
    left: unset !important;
    right: 0;
  }
}

</style>