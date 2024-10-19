<template>
    <div ref="aboutContainer" class="about-container">
        <div class='bio'>
            <h1 class='title'>Grant Gonzalez - Software Developer</h1>
            <h2 class='about-me'>
                Hi, I'm Grant! Welcome to my website! I'm an application developer and consultant at <a href='https://dbservices.com/about/people/grant-gonzalez' target='__blank' class='db-link'>DB Services</a> that 
                specializes full-stack development! I'm a results-driven developer with a passion for creating engaging, 
                interactive, and visually appealing applications. With a deep understanding of database management principles and experience with
                technologies such as FileMaker, Claris Studio, Claris Connect, and Claris Server I specialize in bringing
                complex ideas to life in a simple, intuitive, and effective way. <br/><br/>
                I believe that great development requires more than just technical expertise. It also requires a
                deep understanding of user experience, design principles, and the ability to work collaboratively with
                clients and team members. That's why I'm committed to staying up-to-date with the latest trends and best
                practices in full-stack development, and I'm always looking for new opportunities to learn and grow.<br/><br/>
            </h2>
        </div>
        <div class="about-img-container">
            <img class="astronaut" src="/public/assets/images/AstronautCartoon3.png">
            <div class="rocket-ship-container">
                <img class="rocket-ship" src="/public/assets/images/RocketShipNoBooster.png">
                <img class="rocket-ship-boosters" src="/public/assets/images/RocketShipBoosters.png">
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
    import gsap from 'gsap';
    import { onMounted, onUnmounted, ref } from 'vue';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';

    gsap.registerPlugin(ScrollTrigger);

    const aboutContainer = ref();
    let aboutCtx: any;
    
    onMounted(() => {
        aboutCtx = gsap.context(() => {
            gsap.from('.bio', {
                    scrollTrigger: {
                        trigger: '.bio',
                        start: 'top bottom',
                        end: 'top 50%',
                        scrub: true
                    },
                    opacity: 0,
                    y: 300
                }
            );

            gsap.from('.about-img-container', {
                    scrollTrigger: {
                        trigger: '.bio',
                        start: '75% bottom',
                        end: 'top 50%',
                        scrub: true
                    },
                    opacity: 0,
                    y: 300
                }
            );

            let rocketShipAnimationTl = gsap.timeline();
            document.querySelector('.about-img-container')?.addEventListener('click', () => {
                rocketShipAnimationTl
                .to('.astronaut', {
                    x: 80,
                    scale: 0,
                    ease: 'power1.in',
                    duration: 1
                })
                .to('.rocket-ship-boosters', {
                    opacity: 1,
                    duration: 0
                })
                .to('.about-img-container', {
                    y: -window.innerHeight * 5,
                    ease: "power4.in",
                    duration: 2
                });
            });
            
        }, aboutContainer.value);
    });

    onUnmounted(() => {
        aboutCtx.revert();
    });
</script>

<style lang="scss" scoped>
    .about-container {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        min-width: 100vw;

        .bio {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 0 15%;
            text-align: center;
        }

        .title,
        .about-me {
            color: var(--text-secondary);
            font-family: "Montserrat", "serif";
            z-index: 2;

            .db-link {
                color: white;

                &:hover {
                    color: #56A4B8;
                    cursor: pointer;
                    transition: 250ms;
                }
            }
        }

        .about-img-container {
            position: absolute;
            bottom: 0;
            width: 100vw;
            padding-left: 5rem;

            .astronaut {
                position: absolute;
                left: calc(158px + 5rem);
                bottom: 106px;
            }

            .rocket-ship-container {
                display: flex;
                flex-direction: column;
                position: absolute;
                left: calc(240px + 5rem);
                bottom: 0;

                .rocket-ship-boosters {
                    opacity: 0;
                }
            }
        }
    }

    
</style>