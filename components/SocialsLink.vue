<template>
    <div class="social-links">
        <b-link href="https://www.linkedin.com/in/roshan-budhathoki/" target="_blank" class="social-icon"><b-icon-linkedin /></b-link>
        <b-link href="https://github.com/HelloRoshan" target="_blank" class="social-icon"><b-icon-github /></b-link>
        <b-link href="https://twitter.com/roshanuchiha02" target="_blank" class="social-icon"><b-icon-twitter /></b-link>
        <b-link href="https://www.instagram.com/____roshan_____/" target="_blank" class="social-icon"><b-icon-instagram /></b-link>
        <b-link href="https://www.facebook.com/roshan.budhathoki1/" target="_blank" class="social-icon"><b-icon-facebook /></b-link>
    </div>
</template>
<script>
import { BIconLinkedin, BIconGithub, BIconTwitter, BIconInstagram, BIconFacebook } from 'bootstrap-vue';
export default {
    name: 'SocialsLink',
    components: {
        BIconLinkedin, BIconGithub, BIconTwitter, BIconInstagram, BIconFacebook
    }
}
</script>
<style scoped>
.social-links {
    display: flex;
    margin-top: 40px;
}
.social-icon {
    border-radius: 50%;
    margin-left: 16px;
    background-color: #999;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, .1);
    color: #fff;
    width: 40px;
    height: 40px;
    transition: ease-in-out 0.3s;
}
.social-icon:first-child {
    margin-left: 0;
}
.social-icon:hover {
    background-color: #18d26e;
}
</style>