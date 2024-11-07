<template>
    <div ref="aboutContainer" class="about-container">
        <div class='bio'>
            <h1 class='title'>Grant Gonzalez - Software Developer</h1>
            <p class='about-me'>
				Hey there, I’m Grant! Thanks for stopping by my site. I’m a developer and consultant at
				<a href='https://dbservices.com/about/people/grant-gonzalez' target='__blank' class='db-link'>DB Services</a>,
				where I get to dive into full-stack development, working with tools like FileMaker, Vue.js, and Claris Server
				to craft solutions that are as effective as they are easy to use.
            </p>
			<p class="about-me">
				For me, great development is all about the experience—it’s not just about making things work but making them feel
				right. That means understanding the blend of design, user experience, business needs, and technical details, and
				collaborating closely with clients and teammates to bring their ideas to life. I’m always exploring new trends and
				sharpening my skills to keep things fresh and impactful. Let’s connect if anything here sparks an idea! Thanks
				for visiting, I hope you enjoy!
			</p>
			<p class='about-me'>
				(P.S. Click on the icons spread throughout and watch what they do!)
			</p>
        </div>
        <div v-if="width > 925" class="about-img-container">
            <img src="/public/assets/images/AstronautCartoon3.png" alt="Astronaut Image" class="astronaut">
            <div class="rocket-ship-container">
                <img src="/public/assets/images/RocketShipNoBooster.png" alt="Rocket Ship" class="rocket-ship">
                <img src="/public/assets/images/RocketShipBoosters.png" alt="Rocket Ship Boosters" class="rocket-ship-boosters">
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
    import gsap from 'gsap';
    import { onMounted, onUnmounted, ref } from 'vue';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { useWindowSize } from '@vueuse/core';

    gsap.registerPlugin(ScrollTrigger);

	const { width } = useWindowSize();
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
        width: 100vw;
		margin-left: 2.5rem;

        .bio {
            display: flex;
            flex-direction: column;
			width: 70%;
            gap: 1rem;
            padding: 20px 10px;
			border-radius: 10px;
            text-align: center;
			align-items: center;
			background-color: rgba(0, 0, 0, 0.5);
        }

        .title,
        .about-me {
            color: var(--text-secondary);
            z-index: 2;
        }

		.title {
			font-weight: 400;
			font-size: 30px;
		}

		.about-me {
			font-size: 20px;
			width: 95%;

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

    @media only screen and (max-width: 600px) {
		.about-container {
			margin-left: 0;

			.title {
				font-size: 24px;
			}

			.about-me {
				font-size: 16px;
			}
		}

	}
</style>