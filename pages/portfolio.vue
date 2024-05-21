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
                <h4 class="header-detail">My Projects</h4>
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
                        <div class="project-title"></div>
                        <div class="project-description">
                            
                        </div>
                        <div class="project-tech">Electron.js, React, Python, Flask</div>
                    </div>
                    <div class="project">
                        <b-badge pill variant="success" class="project-tag">Job: ICT Intern</b-badge>
                        <div class="project-title">iBuild Building Solutions - 3 months</div>
                        <div class="project-subtitle">March 2024 - Present</div>
                        <div class="project-description">
                            
                        </div>
                        <div class="project-tech">PHP, SQL, Vtiger</div>
                    </div>
                    <div class="project">
                        <b-badge pill variant="success" class="project-tag">Job: Software Engineer</b-badge>
                        <div class="project-title">Seva Development</div>
                        <div class="project-subtitle">Sept 2021 - June 2022</div>
                        <div class="project-description">
                            
                        </div>
                        <div class="project-tech">Vue.js, React.js, Next.js, Docker</div>
                    </div>
                    <div class="project">
                        <b-badge pill variant="success" class="project-tag">Job: Frontend Developer </b-badge>
                        <div class="project-title">Company: HT Solutions</div>
                        <div class="project-subtitle">Feb, 2018 - Sept, 2021</div>
                        <div class="project-description">
                            
                        </div>
                        <div class="project-tech">Vue.js, Node.js, jQuery, Handlebars</div>
                    </div>
                    <div class="project">
                        <b-badge pill variant="primary" class="project-tag">Project</b-badge>
                        <div class="project-title"></div>
                        <div class="project-description">
                            
                        </div>
                        <div class="project-tech">Electron.js, React, Python, Flask</div>
                    </div>
                </div>
            </section>
            <section class="about-me">
                <h4 class="header-detail">About Me</h4>
            </section>
        </main>
        <footer>
        </footer>
    </div>
</template>
<script>
import { BBadge } from 'bootstrap-vue';
export default {
    name: 'Portfolio',
    components: {
        BBadge
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
.projects, .about-me {
    margin-top: 100px;
}
.header-detail {
    color: darkgray;
}
.project-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}
.project {
    position: relative;
    transition: box-shadow .3s;
    border-radius: 10px;
    padding: 40px 24px;
    box-shadow: 1px;
    background-color: #efeff0;
}
.project:hover {
    cursor: pointer;
    box-shadow: 0 0 11px rgba(33,33,33,.2);
}
.project-tag {
    position: absolute;
    top: 8px;
    right: 8px;
    padding: 6px 14px;
}
.project-title {
    font-weight: 900;
}
.project-subtitle {
    color: #777;
    font-weight: 900;
}
.project-description {
    text-align: justify;
    color: #666;
}
.project-tech {
    font-weight: 700;
    color: #00ab60;
}
</style>