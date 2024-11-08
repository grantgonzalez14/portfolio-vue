<template>
    <div ref="projectContainer" class="projects-container">
        <h1 class='projects-header'>My Projects</h1>

            <div class='project-card'>
				<h3 v-if="width <= 925" class='project-title'><i>Portfolio Website</i></h3>
                <div class='project-left'>
                    <img @click="scrollToSection('home')" src='/public/assets/images/portfolio-website.png' alt='Portfolio Website' loading='lazy' class='project-pic' />
                </div>
                <div class='project-right'>
					<h3 v-if="width > 925" class='project-title'><i>Portfolio Website</i></h3>

					<div class="made-with-container">
						<strong class="made-with-text">Made with:</strong>
						<span class="made-with-images">
							<img src='/public/assets/icons/icons8-vue-js-48.png' alt='Vue JS' loading='lazy' class='project-icon' />
							<img src='/public/assets/icons/gsap-greensock-logo.svg' alt='GSAP' loading='lazy' class='project-icon' />
							<img src='/public/assets/icons/icons8-javascript.svg' alt='Javascript' loading='lazy' class='project-icon' />
							<img src='/public/assets/icons/icons8-css3.svg' alt='CSS3' loading='lazy' class='project-icon' />
							<img src='/public/assets/icons/icons8-html-5.svg' alt='HTML5' loading='lazy' class='project-icon' />
						</span>
					</div>

					<div class="link-container">
						<span @click="scrollToSection('home')"><strong><u>Check it out!</u></strong></span>
						<a href='https://github.com/grantgonzalez14/portfolio-vue' target='_blank' rel='noreferrer'><strong>Source Code</strong></a>
					</div>

                </div>
            </div>

			<div class='project-card'>
				<h3 v-if="width <= 925" class='project-title'><i>Bug Zapper</i></h3>
				<div class='project-left'>
					<img @click="openLink('https://bug-zapper.netlify.app/')" src='/public/assets/images/Bug_Zapper_Home_Page.png' alt='Bug Zapper Home Page' loading='lazy' class='project-pic' />
				</div>
				<div class='project-right'>
					<h3 v-if="width > 925" class='project-title'><i>Bug Zapper</i></h3>

					<div class="made-with-container">
						<strong class="made-with-text">Made with:</strong>
						<span class="made-with-images">
							<img src='/public/assets/icons/icons8-react-30.png' alt='React' loading='lazy' class='project-icon' />
							<img src='/public/assets/icons/icons8-firebase-48.png' alt='Firebase' loading='lazy' class='project-icon' />
							<img src='/public/assets/icons/icons8-javascript.svg' alt='Javascript' loading='lazy' class='project-icon' />
							<img src='/public/assets/icons/icons8-css3.svg' alt='CSS3' loading='lazy' class='project-icon' />
							<img src='/public/assets/icons/icons8-html-5.svg' alt='HTML5' loading='lazy' class='project-icon' />
						</span>
					</div>

					<div class="description-container">
						<h4>Description:</h4>
						<p class="description">
							Say goodbye to those pesky bugs with Bug Zapper, the ultimate web application for tracking and
							zapping all the nasty bugs in your code! With Bug Zapper, you can quickly and easily track and
							resolve issues in your code, ensuring that your software is of the highest quality. Bug Zapper
							is a user-friendly and intuitive web application that provides a centralized platform for you to
							resolve all of your bugs!
						</p>
					</div>

					<div class="link-container">
						<a href='https://bug-zapper.netlify.app/' target='_blank' rel='noreferrer'><strong>Check it out!</strong></a>
						<a href='https://github.com/grantgonzalez14/bug-zapper' target='_blank' rel='noreferrer'><strong>Source Code</strong></a>
					</div>

				</div>
			</div>

            <div class='project-card'>
				<h3 v-if="width <= 925" class='project-title'><i>Brennan Schmidt</i></h3>
				<div class='project-left'>
                    <img @click="openLink('https://brennanschmidt.com/')" src='/public/assets/images/brennan_portfolio_home_page.png' alt='Brennan Schmidt Portfolio Home Page' loading='lazy' class='project-pic' />
                </div>
                <div class='project-right'>
                    <h3 v-if="width > 925" class='project-title'><i>Brennan Schmidt</i></h3>

					<div class="made-with-container">
						<strong class="made-with-text">Made with:</strong>
						<span class="made-with-images">
							<img src='/public/assets/icons/icons8-vue-js-48.png' alt='Vue JS' loading='lazy' class='project-icon' />
							<img src='/public/assets/icons/icons8-javascript.svg' alt='Javascript' loading='lazy' class='project-icon' />
							<img src='/public/assets/icons/icons8-css3.svg' alt='CSS3' loading='lazy' class='project-icon' />
							<img src='/public/assets/icons/icons8-html-5.svg' alt='HTML5' loading='lazy' class='project-icon' />
						</span>
					</div>
					<div class="description-container">
						<h4>Description:</h4>
						<p class="description">
							This portfolio website was custom-built for Brennan Schmidt, an actress based in New York City,
							to showcase her professional work and achievements. Designed with a sleek and responsive interface,
							the site allows users to explore Brennan's creative portfolio effortlessly across all devices.
						</p>
					</div>
					<div class="link-container">
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
    import { scrollToSection } from '@/utility/utilityFunctions';
	import { useWindowSize } from "@vueuse/core";

    gsap.registerPlugin(ScrollTrigger);

	const { width } = useWindowSize();
	const projectContainer = ref();
    let projectCtx: any;

    const openLink = (url: string): Window | null => window.open(url, '_blank');

    onMounted((): void => {
        projectCtx = gsap.context((self: any): void => {
            const projects = self.selector('.project-card');
            projects.forEach((project: any, index: number): void => {
                if (index % 2 == 0) {
                    gsap.from(project, {
                            scrollTrigger: {
                                trigger: project,
                                start: 'top bottom',
                                end: "+=" + project.getBoundingClientRect().height,
                                scrub: true
                            },
                            scale: 0,
                            opacity: 0,
                            x: 500
                        }
                    );
                } else {
                    gsap.from(project, {
                            scrollTrigger: {
                                trigger: project,
                                start: 'top bottom',
                                end: "+=" + project.getBoundingClientRect().height,
                                scrub: true
                            },
                            scale: 0,
                            opacity: 0,
                            x: -500
                        }
                    );
                }
            });

            const icons = self.selector('.project-icon');
            icons.forEach((icon: any): void => {
                icon.addEventListener('click', (): void => {
                    let tl = gsap.timeline();
                    tl.fromTo(icon, {
                            rotation: 0
                        },
                        {
                            rotation: 360,
                            scale: 1.25
                        }
                    );

                    tl.to(icon, {
                        scale: 1
                    }, ">")
                });
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

    onUnmounted((): void => {
        projectCtx.revert();
    });
</script>

<style lang="scss" scoped>
    .projects-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
		max-width: 100vw;
		margin-left: 5rem;
		padding: 10px 2.5rem;
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
		border-radius: 10px;
		transition-duration: 0.3s;

		&:hover {
			cursor: pointer;
			transform: scale(1.015);
			border-radius: 0;
		}
    }

    .projects-title {
        text-align: center;
        margin-bottom: 1rem;
        color: var(--secondary-color);
        width: 50%;
    }

    .project-title {
		color: var(--text-secondary);
        margin-bottom: 0.5rem;
    }

    .projects-header {
		font-family: "Mona Sans", sans-serif;
		font-weight: 300;
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

		.made-with-container {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: 1rem;

			.made-with-text {
				display: flex;
				min-width: fit-content;
			}

			.made-with-images {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				height: 48px;
				width: 100%;
				overflow-x: auto;
				overflow-y: visible;
				gap: 10px;

				.project-icon:hover {
					cursor: pointer;
				}
			}
		}

		.description-container {
			display: flex;
			flex-direction: row;

			.description {
				height: 100%;
				padding: 0 0 0 1rem;
			}
		}


		.link-container {
			display: flex;
			flex-direction: column;

			span,
			a {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				width: fit-content;
				padding-top: 3%;
				color: var(--text-primary);

				&:hover {
					color: var(--text-color);
					cursor: pointer;
				}
			}
		}



        p {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            padding-bottom: 10px;
            height: 48px;
            width: 100%;
            overflow-x: auto;
            overflow-y: visible;
        }

        .project-icon {
            width: 32px;
            height: 32px;
        }

        h4 {
            display: flex;
            flex-direction: row;

			p {
				height: 100%;
				padding: 0 0 0 1rem;
			}
        }


    }

    @media screen and (max-width: 925px) {
        .projects { margin-left: 5rem; }

	  	.project-card {
			flex-direction: column;

			.project-left {
				width: 100%;
			}

			.project-right {
				width: 100%;

				.made-with-container {
					flex-direction: column;
					align-items: center;
					justify-content: center;
					padding: 1rem;
					gap: 0;

					.made-with-images {
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}

				.description-container {
					flex-direction: column;
					align-items: center;
					justify-content: center;
					padding: 1rem;

					.description {
						padding-top: 0.5rem;
						text-align: center; // not sure if I like this or not
					}
				}

				.link-container {
					flex-direction: row;
					width: 100%;
					align-items: center;
					justify-content: center;

					span,a {
						width: auto;
						margin-right: 1rem;
					}
				}

				img {
					.project-pic {
						height: 100%;
						width: 100%;
					}
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

	@media screen and (max-width: 600px) {
		.projects-container {
			margin-left: 0;
			padding: 10px 0;
		}
	}

    @media screen and (max-width: 425px) {
        .projects { margin-left: 0; }
    }
</style>