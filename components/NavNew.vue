<template>
    <b-nav>
        <b-nav-item active class="nav-menu-item">Home</b-nav-item>
        <b-nav-item class="nav-menu-item">About</b-nav-item>
        <b-nav-item class="nav-menu-item">Resume</b-nav-item>
        <!-- <b-nav-item class="nav-menu-item">Services</b-nav-item> -->
        <!-- <b-nav-item class="nav-menu-item">Portfolio</b-nav-item> -->
        <b-nav-item class="nav-menu-item">Contact</b-nav-item>
    </b-nav>
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
    left: 16px;
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
</style>