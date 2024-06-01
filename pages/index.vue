<template>
    <div class="container-lg">
        <main>
            <section>
                <img src="~/assets/roshan_budhathoki.jpeg" alt="" width="140" height="140">
                <h3>
                    I’m Roshan –  Developer
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
                        <div class="job-title">ICT Intern</div>
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
                        <div class="project-title">Social Network Analysis - Desktop Application</div>
                        <div class="project-description">
                            A desktop application for social network analysis that visualizes network connections as graphs, offering insights, customization, and detailed analysis of uploaded data.
                            The application was packaged and tested in macOS, Windows and Linux platforms.
                        </div>
                        <div class="project-tech">Electron.js, React, Python, Flask</div>
                    </div>
                    <div class="project">
                        <b-badge pill variant="primary" class="project-tag">Project</b-badge>
                        <div class="project-title">Game for Kids Learning</div>
                        <div class="project-description">
                            Developed modular and reusable components for the
                            application, leveraging Next.js for efficient routing and rapid application development.
                        </div>
                        <div class="project-tech">Next.js, React</div>
                    </div>
                    <div class="project">
                        <b-badge pill variant="primary" class="project-tag">Project</b-badge>
                        <div class="project-title">Domotics</div>
                        <div class="project-description">
                            Developed the backend to connect a server hosted on a Raspberry Pi for a
                            Home Automation Application, handling real-time light data updates and retrieval. The
                            backend API was created using Flask.
                        </div>
                        <div class="project-tech">React, Python, Flask</div>
                    </div>
                    <div class="project">
                        <b-badge pill variant="primary" class="project-tag">Project</b-badge>
                        <div class="project-title">Form Fields</div>
                        <div class="project-description">
                            Application similar to Google Forms to create input fields and create survey questions.
                        </div>
                        <div class="project-tech">Vue, JavaScript</div>
                    </div>
                    <div class="project">
                        <b-badge pill variant="primary" class="project-tag">Project</b-badge>
                        <div class="project-title">Data Analytics Projects</div>
                        <div class="project-description">
                            The projects utilized NumPy, Matplotlib, Pandas, and machine learning algorithms to analyze datasets, resulting in conclusive findings and hypotheses.
                        </div>
                        <div class="project-tech">Python, jupyter notebook, pandas, matplotlib</div>
                    </div>
                    <div class="project">
                        <b-badge pill variant="primary" class="project-tag">Project</b-badge>
                        <div class="project-title">AWS EC2 Server</div>
                        <div class="project-description">
                            Initiated an EC2 instance and hosted a web server on it.
                        </div>
                        <div class="project-tech">AWS, EC2</div>
                    </div>
                </div>
            </section>
            <section class="about-me">
                <h4 class="header-detail">About Me</h4>
                <h3>
                    I'm a developer based in Melbourne with a background in Web Application Development and Data Analytics.<br>
                    If you're an entrepreneur, developer or designer interested in working together please reach out to me via <a href="mailto:roshanbudhathoki02@gmail.com">roshanbudhathoki02@gmail.com</a>
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


export default {
    name: 'Portfolio',
    components: {
        BBadge, BIconLinkedin, BIconGithub, BIconTwitter, BIconInstagram, BIconFacebook

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
}
.project-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
.project {
    position: relative;
    transition: box-shadow .3s, background-color .3s ;
    border-radius: 10px;
    padding: 50px 25px;
    background-color: #efeff0;
    font-size: 1.75rem;
}
.project:hover {
    cursor: pointer;
    box-shadow: 0 0 11px rgba(33,33,33,.2);
    background-color: #dbf5ee;
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
    text-align: justify;
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
}
.social-icon {
    border-radius: 50%;
    margin-left: 16px;
    background-color: #28a745;
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
</style>