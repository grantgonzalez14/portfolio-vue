<template>
    <div ref="projectContainer" class="flex flex-col min-h-dvh max-w-dvw md:ml-20 mt-20 py-[10px] px-10 items-center">
        <h1 class='projects-header lg:text-[24px]'>My Projects</h1>

		<div class='project-card flex flex-col lg:flex-row text-center w-full lg:w-[70%] border-[2px] border-transparent rounded-[11px] p-[20px] m-[10px] justify-center items-center'>
			<h3 v-if="width <= 925" class='mb-2'><i>Portfolio Website</i></h3>
			<div class='w-full lg:w-[50%] h-full'>
				<img @click="scrollToSection('home')" src='/assets/images/portfolio-website.png' alt='Portfolio Website' loading='lazy' class='w-full lg:w-[85%] h-full rounded-[10px] transition duration-300 hover:cursor-pointer hover:scale-[1.015] hover:rounded-0' />
			</div>
			<div class='text-left w-full lg:w-[50%]'>
				<h3 v-if="width > 925" class='mb-2'><i>Portfolio Website</i></h3>

				<div class="flex flex-col lg:flex-row items-center justify-center p-4 lg:p-0 lg:gap-4">
					<strong class="flex min-w-fit justify-center items-center">Made with:</strong>
					<span class="flex flex-wrap justify-center lg:justify-start items-center min-h-[48px] w-full overflow-x-auto overflow-y-visible gap-[10px]">
						<img src='/assets/icons/icons8-vue-js-48.png' alt='Vue JS' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
						<img src='/assets/icons/gsap-greensock-logo.svg' alt='GSAP' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
						<img src='/assets/icons/icons8-tailwind-css.svg' alt='Tailwind CSS' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
						<img src='/assets/icons/icons8-typescript-144.png' alt='Typescript' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
						<img src='/assets/icons/icons8-css3.svg' alt='CSS3' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
						<img src='/assets/icons/icons8-html-5.svg' alt='HTML5' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
					</span>
				</div>

				<div class="flex flex-row w-full items-center justify-between lg:justify-center lg:items-start lg:flex-col lg:gap-0">
					<span class="flex justify-start items-center w-fit pt-[3%] text-(--text-color) hover:text-(--text-primary) hover:cursor-pointer hover:underline-offset-[0.2em] transition-all ease duration-300 underline underline-offset-[0.1em] font-semibold" @click="scrollToSection('home')">Check it out!</span>
					<a href='https://github.com/grantgonzalez14/portfolio-vue' target='_blank' rel='noreferrer' class="flex justify-start items-center w-fit pt-[3%] text-(--text-color) hover:text-(--text-primary) hover:cursor-pointer hover:underline-offset-[0.2em] transition-all ease duration-300 underline underline-offset-[0.1em] font-semibold">Source Code</a>
				</div>

			</div>
		</div>
		
		<div class='project-card flex-col lg:flex-row flex text-center w-full lg:w-[70%] border-[2px] border-transparent rounded-[11px] p-[20px] m-[10px] justify-center items-center'>
			<h3 v-if="width <= 925" class='mb-2'><i>Asteroids Reimagined</i></h3>
			<div class='w-full lg:w-[50%] h-full'>
				<img @click="openLink('https://asteroids-reimagined.netlify.app/')" src='/assets/images/asteroids_reimagined_main_menu.png' alt='Asteroids Reimagined Main Menu' loading='lazy' class='w-full lg:w-[85%] h-full rounded-[10px] transition duration-300 hover:cursor-pointer hover:scale-[1.015] hover:rounded-0' />
			</div>
			<div class='text-left w-full lg:w-[50%]'>
				<h3 v-if="width > 925" class='mb-2'><i>Asteroids Reimagined</i></h3>
				
				<div class="flex flex-col lg:flex-row items-center justify-center p-4 lg:p-[0px] lg:gap-4">
					<strong class="flex min-w-fit">Made with:</strong>
					<span class="flex flex-wrap justify-center lg:justify-start items-center min-h-[48px] w-full overflow-x-auto overflow-y-visible gap-[10px]">
						<img src='/assets/icons/icons8-nuxt-js-96.png' alt='Nuxt JS' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
						<img src='/assets/icons/icons8-vue-js-48.png' alt='Vue JS' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
						<img src='/assets/icons/icons8-supabase-48.png' alt='Supabase' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
						<img src='/assets/icons/icons8-typescript-144.png' alt='Typescript' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
						<img src='/assets/icons/icons8-css3.svg' alt='CSS3' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
						<img src='/assets/icons/icons8-html-5.svg' alt='HTML5' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
					</span>
				</div>
				<div class="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start">
					<h4 class="flex flex-row">Description:</h4>
					<p class="flex justify-start items-center pb-[10px] h-[48px] w-full overflow-x-auto overflow-y-visible h-full pl-4">
						My latest and greatest project yet! This is my take on the classic game of Asteroids. I initially created
						this rendition in my first ever computer science class using MIT's Scratch. Ever since, I have been looking
						to remake the game so others can enjoy it and I finally got around to it... 7 years later. I created a full-stack
						game using Nuxt for the UI/UX, Typescript for the game logic and rendering, and Supabase for statistic tracking and
						high score management.
					</p>
				</div>
				<div class="flex flex-row w-full items-center justify-center lg:items-start lg:flex-col">
					<a href='https://asteroids-reimagined.netlify.app/' target='_blank' rel='noreferrer' class="flex justify-start items-center w-fit pt-[3%] text-(--text-color) hover:text-(--text-primary) hover:cursor-pointer hover:underline-offset-[0.2em] transition-all ease duration-300 underline underline-offset-[0.1em] font-semibold">Check it out!</a>
				</div>
			</div>
		</div>
	
		<div class='project-card flex-col lg:flex-row flex text-center w-full lg:w-[70%] border-[2px] border-transparent rounded-[11px] p-[20px] m-[10px] justify-center items-center'>
			<h3 v-if="width <= 925" class='mb-2'><i>Brennan Schmidt</i></h3>
			<div class='w-full lg:w-[50%] h-full'>
				<img @click="openLink('https://brennanschmidt.com/')" src='/assets/images/brennan_portfolio_home_page.png' alt='Brennan Schmidt Portfolio Home Page' loading='lazy' class='w-full lg:w-[85%] h-full rounded-[10px] transition duration-300 hover:cursor-pointer hover:scale-[1.015] hover:rounded-0' />
			</div>
			<div class='text-left w-full lg:w-[50%]'>
				<h3 v-if="width > 925" class='mb-2'><i>Brennan Schmidt</i></h3>
				
				<div class="flex flex-col lg:flex-row items-center justify-center p-4 lg:p-0 lg:gap-4">
					<strong class="flex min-w-fit">Made with:</strong>
					<span class="flex flex-wrap justify-center lg:justify-start items-center min-h-[48px] w-full overflow-x-auto overflow-y-visible gap-[10px]">
						<img src='/assets/icons/icons8-vue-js-48.png' alt='Vue JS' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
						<img src='/assets/icons/icons8-primevue.svg' alt='Primevue' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
						<img src='/assets/icons/icons8-tailwind-css.svg' alt='Tailwind CSS' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
						<img src='/assets/icons/icons8-typescript-144.png' alt='Typescript' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
						<img src='/assets/icons/icons8-html-5.svg' alt='HTML5' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
					</span>
				</div>
				<div class="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start">
					<h4>Description:</h4>
					<p class="flex justify-start items-center pb-[10px] h-[48px] w-full overflow-x-auto overflow-y-visible h-full pl-4">
						This portfolio website was custom-built for Brennan Schmidt, an actress based in New York City,
						to showcase her professional work and achievements. Designed with a sleek and responsive interface,
						the site allows users to explore Brennan's creative portfolio effortlessly across all devices.
					</p>
				</div>
				<div class="flex flex-row w-full items-center justify-center lg:items-start lg:flex-col">
					<a href='https://brennanschmidt.com/' target='_blank' rel='noreferrer' class="flex justify-start items-center w-fit pt-[3%] text-(--text-color) hover:text-(--text-primary) hover:cursor-pointer hover:underline-offset-[0.2em] transition-all ease duration-300 underline underline-offset-[0.1em] font-semibold">Check it out!</a>
				</div>
			</div>
		</div>

		<div class='project-card flex-col lg:flex-row flex text-center w-full lg:w-[70%] border-[2px] border-transparent rounded-[11px] p-[20px] m-[10px] justify-center items-center'>
			<h3 v-if="width <= 925" class='mb-2'><i>Bug Zapper</i></h3>
			<div class='w-full lg:w-[50%] h-full'>
				<img @click="openLink('https://bug-zapper.netlify.app/')" src='/assets/images/Bug_Zapper_Home_Page.png' alt='Bug Zapper Home Page' loading='lazy' class='w-full lg:w-[85%] h-full rounded-[10px] transition duration-300 hover:cursor-pointer hover:scale-[1.015] hover:rounded-0' />
			</div>
			<div class='text-left w-full lg:w-[50%]'>
				<h3 v-if="width > 925" class='mb-2'><i>Bug Zapper</i></h3>

				<div class="flex flex-col lg:flex-row items-center justify-center p-4 lg:p-0 lg:gap-4">
					<strong class="flex min-w-fit">Made with:</strong>
					<span class="flex flex-wrap justify-center lg:justify-start items-center min-h-[48px] w-full overflow-x-auto overflow-y-visible gap-[10px]">
						<img src='/assets/icons/icons8-react-30.png' alt='React' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
						<img src='/assets/icons/icons8-firebase-48.png' alt='Firebase' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
						<img src='/assets/icons/icons8-javascript.svg' alt='Javascript' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
						<img src='/assets/icons/icons8-css3.svg' alt='CSS3' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
						<img src='/assets/icons/icons8-html-5.svg' alt='HTML5' loading='lazy' class='project-icon w-[32px] h-[32px] hover:cursor-pointer' />
					</span>
				</div>

				<div class="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-start">
					<h4>Description:</h4>
					<p class="flex justify-start items-center pb-[10px] h-[48px] w-full overflow-x-auto overflow-y-visible h-full pl-4">
						Say goodbye to those pesky bugs with Bug Zapper, the ultimate web application for tracking and
						zapping all the nasty bugs in your code! With Bug Zapper, you can quickly and easily track and
						resolve issues in your code, ensuring that your software is of the highest quality. Bug Zapper
						is a user-friendly and intuitive web application that provides a centralized platform for you to
						resolve all of your bugs!
					</p>
				</div>

				<div class="flex flex-row w-full items-center justify-between lg:justify-center lg:items-start lg:flex-col">
					<a href='https://bug-zapper.netlify.app/' target='_blank' rel='noreferrer' class="flex justify-start items-center w-fit pt-[3%] text-(--text-color) hover:text-(--text-primary) hover:cursor-pointer hover:underline-offset-[0.2em] transition-all ease duration-300 underline underline-offset-[0.1em] font-semibold">Check it out!</a>
					<a href='https://github.com/grantgonzalez14/bug-zapper' target='_blank' rel='noreferrer' class="flex justify-start items-center w-fit pt-[3%] text-(--text-color) hover:text-(--text-primary) hover:cursor-pointer hover:underline-offset-[0.2em] transition-all ease duration-300 underline underline-offset-[0.1em] font-semibold">Source Code</a>
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
								start: "top 100%",
								end: "top 80%",
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
								start: "top 100%",
								end: "top 80%",
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
    .projects-header {
		font-family: "Mona Sans", sans-serif;
    }

    .project-card {
        background: linear-gradient(#212121, #212121) padding-box,
            linear-gradient(145deg, transparent 35%, #407E8A, #56A4B8) border-box;
    }

    @media screen and (max-width: 925px) {


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
</style>