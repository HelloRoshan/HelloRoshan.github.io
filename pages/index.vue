<template>
    <div class="container-lg" style="position: relative; height: auto;">
        <Particle/>
        <main>
            <section>
                <img src="~/assets/roshan_budhathoki.jpeg" class="portfolio-photo" alt="" width="140" height="140">
                <h3>
                    Hi, I am Roshan –  Full Stack Developer
                    <div class="detail">
                        I love bringing Ideas to Life.
                    </div>
                </h3>
            </section>
            <section class="projects">
                <h4 class="header-detail">Experience</h4>
                <div class="project-grid">
                    <div class="project">
                        <b-badge pill variant="success" class="project-tag">Job</b-badge>
                        <div class="project-title">iBuild Building Solutions</div>
                        <div class="job-title">Web Developer</div>
                        <div class="project-subtitle">March 2024 - May 2024</div>
                        <div class="project-description">
                            
                        </div>
                        <div class="project-tech">PHP, SQL, Vtiger, WordPress</div>
                    </div>
                    <div class="project">
                        <b-badge pill variant="success" class="project-tag">Job</b-badge>
                        <div class="project-title">Seva Development</div>
                        <div class="job-title">Software Engineer</div>
                        <div class="project-subtitle">Sept 2021 - June 2022</div>
                        <div class="project-description">
                            
                        </div>
                        <div class="project-tech">Vue.js, React.js, Next.js, Docker</div>
                    </div>
                    <div class="project">
                        <b-badge pill variant="success" class="project-tag">Job</b-badge>
                        <div class="project-title">HT Solutions</div>
                        <div class="job-title">Frontend Developer</div>
                        <div class="project-subtitle">Feb, 2018 - Sept, 2021</div>
                        <div class="project-description">
                            
                        </div>
                        <div class="project-tech">Vue.js, Node.js, jQuery, Handlebars</div>
                    </div>
                </div>
            </section>
            <section class="projects">
                <h4 class="header-detail">My Projects</h4>
                <!-- TODO: Add links to the projects -->
                <div class="project-grid">
                    <div class="project">
                        <b-badge pill variant="primary" class="project-tag">Project</b-badge>
                        <div class="project-title">
                            <b-link href="https://github.com/HelloRoshan/tech-innovation-project-extended" target="_blank" class="link">Social Network Analysis - Desktop Application</b-link>
                        </div>
                        <div class="project-description">
                            A desktop application for social network analysis that visualizes network connections as graphs, offering insights, customization, and detailed analysis of uploaded data.
                            The application was packaged and tested in macOS, Windows and Linux platforms.
                        </div>
                        <div class="project-tech">Electron.js, React, Python, Flask</div>
                    </div>
                    <div class="project">
                        <b-badge pill variant="primary" class="project-tag">Project</b-badge>
                        <div class="project-title">
                            <b-link href="https://github.com/HelloRoshan/tech-enquiry-project" target="_blank" class="link">Game for Kids Learning</b-link>
                        </div>
                        <div class="project-description">
                            Developed modular and reusable components for the
                            application, leveraging Next.js for efficient routing and rapid application development.
                        </div>
                        <div class="project-tech">Next.js, React</div>
                    </div>
                    <div class="project">
                        <b-badge pill variant="primary" class="project-tag">Project</b-badge>
                        <div class="project-title">
                            <b-link href="https://e-commerce-psi-tan.vercel.app/" target="_blank" class="link">E-commerce</b-link>
                        </div>
                        <div class="project-description">
                            E-commerce website demo.
                        </div>
                        <div class="project-tech">React, Redux</div>
                    </div>
                    <div class="project">
                        <b-badge pill variant="primary" class="project-tag">Project</b-badge>
                        <div class="project-title">
                            <b-link href="https://github.com/HelloRoshan/Domotics" target="_blank" class="link">Domotics</b-link>
                        </div>
                        <div class="project-description">
                            Developed the backend to connect a server hosted on a Raspberry Pi for a
                            Home Automation Application, handling real-time light data updates and retrieval. The
                            backend API was created using Flask.
                        </div>
                        <div class="project-tech">React, Python, Flask</div>
                    </div>
                    <div class="project">
                        <b-badge pill variant="primary" class="project-tag">Project</b-badge>
                        <div class="project-title">
                            <b-link href="https://form-fields.vercel.app/" target="_blank" class="link">Form Fields</b-link>
                        </div>
                        <div class="project-description">
                            Application similar to Google Forms to create input fields and create survey questions.
                        </div>
                        <div class="project-tech">Vue, JavaScript</div>
                    </div>
                </div>
            </section>
            <section class="about-me">
                <h4 class="header-detail">About Me</h4>
                <h3>
                    I'm a Full Stack developer based in Melbourne, specialising in web application development and data analytics.<br>
                    If you're an entrepreneur, developer or designer interested in collaborating, feel free to get in touch at <a href="mailto:roshanbudhathoki02@gmail.com">roshanbudhathoki02@gmail.com</a>
                </h3>
            </section>
            <section class="my-stack">
                <h4 class="header-detail">My Stack</h4>
                <h3>Programming Languages</h3>
                <div>
                    <b-badge pill variant="success" class="tech-name" v-for="tech in techList" :key="tech">{{ tech }}</b-badge>
                </div>
                <h3>Framework/Libraries</h3>
                <div>
                    <b-badge pill variant="success" class="tech-name" v-for="framework in frameworkList" :key="framework">{{ framework }}</b-badge>
                </div>
                <h3>Databases</h3>
                <div>
                    <b-badge pill variant="success" class="tech-name" v-for="database in databaseList" :key="database">{{ database }}</b-badge>
                </div>
                <h3>Other development Technologies and Tools</h3>
                <div>
                    <b-badge pill variant="success" class="tech-name" v-for="other in otherList" :key="other">{{ other }}</b-badge>
                </div>
            </section>
            <section class="my-socials">
                <h4 class="header-detail">Reach out to me</h4>
                <div class="social-links">
                    <b-link href="https://www.linkedin.com/in/roshan-budhathoki/" target="_blank" class="social-icon"><b-icon-linkedin /></b-link>
                    <b-link href="https://github.com/HelloRoshan" target="_blank" class="social-icon"><b-icon-github /></b-link>
                    <!-- <b-link href="https://twitter.com/roshanuchiha02" target="_blank" class="social-icon"><b-icon-twitter /></b-link> -->
                    <b-link href="https://www.instagram.com/____roshan_____/" target="_blank" class="social-icon"><b-icon-instagram /></b-link>
                    <b-link href="https://www.facebook.com/roshan.budhathoki1/" target="_blank" class="social-icon"><b-icon-facebook /></b-link>
                </div>
            </section>
        </main>
        <footer>
        </footer>
    </div>
</template>
<script>
import { BBadge, BIconLinkedin, BIconGithub, BIconTwitter, BIconInstagram, BIconFacebook } from 'bootstrap-vue';
import Particle from '~/components/Particle.vue'


export default {
    name: 'Portfolio',
    components: {
        BBadge, BIconLinkedin, BIconGithub, BIconTwitter, BIconInstagram, BIconFacebook, Particle

    },
    data() {
        return {
            techList: ['JavaScript', 'Python', 'R', 'PHP', 'SQL'],
            frameworkList : ['Vue.js', 'React.js', 'Node.js', 'Electron.js', 'Nuxt', 'Next', 'Flask', 'matplotlib', 'pandas'],
            databaseList: ['MySQL'],
            otherList: ['HTML', 'CSS', 'SASS', 'Git', 'Jira', 'Docker', 'Figma', 'AWS', 'Tableau', 'REST API']
        }
    }
}
</script>
<style scoped>
.portfolio-photo {
    border-radius: 100%;
    /* filter: grayscale(100%); */
    transition: transform .5s;
}
.portfolio-photo:hover {
    /* filter: grayscale(0%); */
    transform: scale(1.05);
}
main {
    padding: 40px 20px;
}
.detail {
    color: darkgray;
}
.projects, .about-me, .my-stack, .my-socials {
    margin-top: 100px;
}
.header-detail {
    color: darkgray;
    margin-bottom: 12px;
    text-align: center;
}
.project-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
@media only screen and (max-width: 600px) {
    .project-grid {
        grid-template-columns: 1fr;
    }
}
.project {
    position: relative;
    transition: box-shadow .3s, background-color .3s ;
    border-radius: 10px;
    padding: 50px 25px;
    background-color: #19171d;
    font-size: 1.75rem;
    transition: transform .2s;
    border: 1px solid #fff;
}
.project:hover {
    /* cursor: pointer; */
    box-shadow: 0 0 11px rgba(33,33,33,.2);
    /* background-color: #dbf5ee; */
    transform: scale(1.03);
}
.project-tag {
    position: absolute;
    top: 8px;
    right: 8px;
    padding: 6px 14px;
    text-wrap: wrap;
    font-weight: 350;
    font-size: 1.1rem;
}
.project-title {
    font-weight: 350;
}
.project-title .link {
    color: #fff;
}
.project-subtitle {
    color: #777;
    font-weight: 200;
    font-size: 1.25rem;
}
.project-description {
    text-align: justify;
    color: #666;
    font-size: 1.2rem;
    font-weight: 200;
}
.project-tech {
    font-weight: 400;
    color: #00ab60;
    font-size: 1.1rem;
}
h3 {
    font-weight: 350;
}
.about-me h3 {
    text-align: center;
}
.tech-name {
    padding: 8px 16px;
    font-size: 1.5rem;
    font-weight: 350;
    margin: 4px;
}
.my-stack h3 {
    font-size: 1.5rem;
}
.social-links {
    display: flex;
    justify-content: center;
}
.social-icon {
    border-radius: 50%;
    margin-left: 16px;
    background-color: #4a396a;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    width: 40px;
    height: 40px;
    transition: ease-in-out 0.3s;
}
.social-icon:first-child {
    margin-left: 0;
}
.social-icon:hover {
    opacity: .8;
}
.job-title {
    font-style: italic;
    color: #777;
    font-size: 1.4rem;
    font-weight: 300;
}
.badge-success, .badge-primary {
    background-color: #4a396a;
}
</style>