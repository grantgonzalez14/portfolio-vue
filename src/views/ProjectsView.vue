<template>
    <div ref="projectContainer" class="projects-container">
        <h1 class='projects-header' data-aos='fade-in' data-aos-duration='1000'>My Projects</h1>
        <div class='projects-container'>
            <div class='project-card' data-aos='fade-up' data-aos-duration='1000'>
                <div class='project-left'>
                    <img src='/public/assets/images/Website.png' alt='Portfolio Website' loading='lazy' class='project-pic' />
                </div>
                <div class='project-right'>
                    <h3 class='project-title'><i>Portfolio Website</i></h3>
                    <p><strong>Made with:</strong>
                        <img src='/public/assets/icons/icons8-react-30.png' alt='Vue JS' loading='lazy' class='project-icon' />
                        <img src='/public/assets/icons/icons8-javascript.svg' alt='Javascript' loading='lazy' class='project-icon' />
                        <img src='/public/assets/icons/icons8-css3.svg' alt='CSS3' loading='lazy' class='project-icon' />
                        <img src='/public/assets/icons/icons8-html-5.svg' alt='HTML5' loading='lazy' class='project-icon' />
                    </p>
                    <h4>Description:<p>You're lookin' at it!</p></h4>
                    <a href='/home'><strong>Check it out!</strong></a>
                    <a href='https://github.com/grantgonzalez14/portfolio-website' target='_blank' rel='noreferrer'><strong>Source Code</strong></a>
                </div>
            </div>

            <div class='project-card' data-aos='fade-up' data-aos-duration='1000'>
                <div class='project-left'>
                    <img src='/public/assets/images/Bug_Zapper_Home_Page.png' alt='Bug Zapper Home Page' loading='lazy' class='project-pic' />
                </div>
                <div class='project-right'>
                    <h3 class='project-title'><i>Bug Zapper</i></h3>
                    <p><strong>Made with:</strong>
                        <img src='/public/assets/icons/icons8-react-30.png' alt='React' loading='lazy' class='project-icon' />
                        <img src='/public/assets/icons/icons8-javascript.svg' alt='Javascript' loading='lazy' class='project-icon' />
                        <img src='/public/assets/icons/icons8-css3.svg' alt='CSS3' loading='lazy' class='project-icon' />
                        <img src='/public/assets/icons/icons8-html-5.svg' alt='HTML5' loading='lazy' class='project-icon' />
                        <img src='/public/assets/icons/icons8-firebase-48.png' alt='Firebase' loading='lazy' class='project-icon' />
                    </p>
                    <h4>Description:<p>
                        Say goodbye to those pesky bugs with Bug Zapper, the ultimate web application for tracking and 
                        zapping all the nasty bugs in your code! With Bug Zapper, you can quickly and easily track and 
                        resolve issues in your code, ensuring that your software is of the highest quality. Bug Zapper 
                        is a user-friendly and intuitive web application that provides a centralized platform for you to
                        resolve all of your bugs!
                    </p></h4>
                    <a href='https://bug-zapper.netlify.app/' target='_blank' rel='noreferrer'><strong>Check it out!</strong></a>
                    <a href='https://github.com/grantgonzalez14/bug-zapper' target='_blank' rel='noreferrer'><strong>Source Code</strong></a>
                </div>
            </div>

            <div class='project-card' data-aos='fade-up' data-aos-duration='1000'>
                <div class='project-left'>
                    <img src='/public/assets/images/brennan_portfolio_home_page.png' alt='Brennan Schmidt Portfolio Home Page' loading='lazy' class='project-pic' />
                </div>
                <div class='project-right'>
                    <h3 class='project-title'><i>Brennan Schmidt</i></h3>
                    <p><strong>Made with:</strong>
                        <img src='/public/assets/icons/icons8-vue-js-48.png' alt='React' loading='lazy' class='project-icon' />
                        <img src='/public/assets/icons/icons8-javascript.svg' alt='Javascript' loading='lazy' class='project-icon' />
                        <img src='/public/assets/icons/icons8-css3.svg' alt='CSS3' loading='lazy' class='project-icon' />
                        <img src='/public/assets/icons/icons8-html-5.svg' alt='HTML5' loading='lazy' class='project-icon' />
                    </p>
                    <h4>Description:<p>
                        This portfolio website was custom-built for Brennan Schmidt, an actress based in New York City, 
                        to showcase her professional work and achievements. Designed with a sleek and responsive interface, 
                        the site allows users to explore Brennan's creative portfolio effortlessly across all devices.
                    </p></h4>
                    <a href='https://brennanschmidt.com/' target='_blank' rel='noreferrer'><strong>Check it out!</strong></a>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
    import gsap from 'gsap';
    import { onMounted, onUnmounted, ref } from 'vue';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    const projectContainer = ref();
    let projectCtx: any;

    onMounted(() => {
        projectCtx = gsap.context((self: any) => {
            const projects = self.selector('.project-card');
            projects.forEach((project: any) => {
                gsap.from(project, {
                        scrollTrigger: {
                            trigger: project,
                            start: 'top bottom',
                            end: () => `+=${project.offsetHeight * (1 / 1.5)}`,
                            scrub: true
                        },
                        scale: 0
                    }
                );
            });

            gsap.from('.projects-header', {
                    scrollTrigger: {
                        trigger: '.projects-header',
                        start: 'top bottom',
                        end: 'top 50%',
                        scrub: true
                    },
                    scale: 0
                }
            );
        }, projectContainer.value);
    });

    onUnmounted(() => {
        projectCtx.revert();
    });
</script>

<style lang="scss" scoped>
    .projects-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        min-width: 100vw;
        background-color: black;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .projects {
        background-color: transparent;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .project-pic {
        width: 85%;
        height: 100%;
    }

    .projects-title {
        text-align: center;
        margin-bottom: 1rem;
        color: var(--secondary-color);
        width: 50%;
    }

    .project-title {
        margin-bottom: 0.5rem;
    }

    .projects-header {
        color: var(--text-secondary);
    }

    .project-card {
        display: flex;
        text-align: center;
        width: 70%;
        background: linear-gradient(#212121, #212121) padding-box,
            linear-gradient(145deg, transparent 35%, #407E8A, #56A4B8) border-box;
        border: 2px solid transparent;
        border-radius: 11px;
        padding: 20px;
        margin: 10px;
        justify-content: center;
        align-items: center;
    }

    .project-left {
        width: 50%;
        height: 100%;
    }

    .project-right {
        text-align: left;
        width: 50%;
        color: var(--text-secondary);

        a {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-top: 3%;
            color: var(--text-primary);
            width: fit-content;

            &:hover { color: var(--text-color); }
        }

        p {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-bottom: 10px;
            width: 100%;
            overflow-x: auto;
        }

        .project-icon {
            width: 32px;
            height: 32px;
            margin-left: 10px;
        }

        h4 {
            display: flex;
            flex-direction: row;

            p {
                margin: 0 0 0 1rem;
                font-family: "Montserrat", "serif";
            }
        }
    }

    @media screen and (max-width: 925px) {
        .projects { margin-left: 5rem; }

        .project-right {
            width: 90%;

            a { width: 38%; }

            img {
                .project-pic {
                    height: 100%;
                    width: 100%;
                }
            }
        }

        .pictures {
            text-align: center;
        }

        .project-title {
            text-align: center;
        }
    }

    @media screen and (max-width: 425px) {
        .projects { margin-left: 0; }
    }
</style>