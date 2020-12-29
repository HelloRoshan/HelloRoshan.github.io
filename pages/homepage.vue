<template>
    <header id="header">
        <div class="container">
            <h1 class="text-left">Roshan Budhathoki</h1>
            <h2 class="text-left">I'm a passionate <span class="border-bottom" style="border-bottom-width:3px !important;border-color:#18d26e !important;color:#fff;">Front-End Developer</span> from Kathmandu</h2>
            <nav-new />
            <socials-link />
        </div>
    </header>
</template>
<script>
import NavNew from '~/components/NavNew.vue';
import SocialsLink from '~/components/SocialsLink.vue'
export default {
    name: 'Homepage',
    components: {
        NavNew,
        SocialsLink
    }
}
</script>
<style scoped>
#header {
    transition: ease-in-out 0.3s;
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    z-index: 997;
    overflow-y: auto;
    background: url(~assets/bg.jpg) no-repeat top right fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    color: #fff;
}
#header h1 {
    font-size: 48px;
    font-family: 'SulphurPoint-Regular', 'sans-serif';
    font-weight: 900;
    letter-spacing: 2px;;
}
#header h2 {
    font-size: 24px;
    font-family: 'SulphurPoint-Regular', 'sans-serif';
    font-weight: 400;
    color: rgba(255,255,255, .8);
}
@media (max-width: 992px) {
    #header h1 {
        font-size: 36px;
    }
    #header h2 {
        font-size: 20px;
    }
}
</style>