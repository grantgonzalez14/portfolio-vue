<template>
    <div ref="skillsContainer" class="min-h-dvh max-w-dvw">
		<div id="programming-skills-container" class="skills-container grid relative grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] grid-rows-[2rem_repeat(auto-fit,_12rem)] gap-4 lg:px-[14%] items-center mt-20 md:ml-20">
			<h1 class='programming-skill-header skill-header flex justify-center text-2xl font-normal col-span-full row-[1]'>My Skills</h1>
			
			<Card
				id='fmp'
				class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center"
				@click="animateSkill($event.target.id, 'programming')"
			>
				<template v-slot:image>
					<img
						src='/assets/icons/FileMakerProIcon.png'
						alt='FileMaker Pro'
						loading='lazy'
						class='icon w-47.5 h-45 transition duration-[calc(var(--transition-speed)/3)] object-contain'
						id='fmp'
					/>
				</template>
				<template v-slot:content>
					<Skill
						:skillWidth="'85%'"
						:skillHighlights="['Payroll Management System', 'Title Insurance Database and Management System', 'Printing Service Database and Management System', 'Field Service Scheduling Calendar and Map', 'Various API Integrations']"
					>
						<template v-slot:title>
							FileMaker Pro
						</template>
						<template v-slot:tooltip>
							85%
						</template>
						<template v-slot:skillDescription>
						<span>
							FileMaker Pro, a low-code platform for building relational databases and business applications. It abstracts a lot
							of the complexity you'd typically deal with in traditional programming environments, allowing you to focus more on
							logic and less on infrastructure. I use this every day to develop and maintain full-stack applications (Contact us
							at <a href='https://dbservices.com/' target='__blank' class='text-black underline z-5 hover:text-[#56A4B8] hover:cursor-pointer transition duration-250'>DB Services</a> if you have any FileMaker
							needs &#128521;)!
						</span>
						</template>
						<template v-slot:skillUses>
							2 Years
						</template>
					</Skill>
				</template>
			</Card>
			
			<Card
				id='vue'
				class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center"
				@click="animateSkill($event.target.id, 'programming')"
			>
				<template v-slot:image>
					<img
						src='/assets/icons/icons8-vue-js-144.png'
						alt='Vue JS'
						loading='lazy'
						class='icon w-47.5 h-45 transition duration-[calc(var(--transition-speed)/3)] object-contain'
						id='vue'
					/>
				</template>
				<template v-slot:content>
					<Skill
						:skillWidth="'75%'"
						:skillHighlights="['Portfolio Website', 'Asteroids Remastered', 'Brennan Schmidt Portfolio', 'Work Order Management Module', 'Dynamic Reporting Module', 'Field Service Scheduling Calendar and Map', 'Nearby Property Locator']"
					>
						<template v-slot:title>
							Vue JS
						</template>
						<template v-slot:tooltip>
							75%
						</template>
						<template v-slot:skillDescription>
							A progressive JavaScript framework for building user interfaces and single-page applications. Vue JS is the first frontend
							framework that I had the pleasure of learning. I've used it to build various applications and solutions professionally and
							personally. It is simple and intuitive and it's my go-to whenever I use a framework!
						</template>
						<template v-slot:skillUses>
							4 Years
						</template>
					</Skill>
				</template>
			</Card>
			
			<Card
				id='tailwind'
				class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center"
				@click="animateSkill($event.target.id, 'programming')"
			>
				<template v-slot:image>
					<img
						src='/assets/icons/icons8-tailwind-css.svg'
						alt='Frontend Development'
						loading='lazy'
						class='icon w-47.5 h-45 transition duration-[calc(var(--transition-speed)/3)] object-contain'
						id='tailwind'
					/>
				</template>
				<template v-slot:content>
					<Skill
						:skillWidth="'60%'"
						:skillHighlights="['Portfolio Website', 'Brennan Schmidt Portfolio', 'Work Order Management Module']"
					>
						<template v-slot:title>
							Tailwind CSS
						</template>
						<template v-slot:tooltip>
							60%
						</template>
						<template v-slot:skillDescription>
							Tailwind CSS is a utility-first CSS framework that enables developers to rapidly build modern, responsive, and highly customizable user interfaces.
							I used pure css for most of my development career, but once I started using Tailwind CSS I never looked back! It makes customization incredibly easy
							and quick, and it allows me to spin up applications much quicker than I could've before!
						</template>
						<template v-slot:skillUses>
							< 1 Year
						</template>
					</Skill>
				</template>
			</Card>
			
			
			<Card
				id='typescript'
				class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center"
				@click="animateSkill($event.target.id, 'programming')"
			>
				<template v-slot:image>
					<img
						src='/assets/icons/icons8-typescript-144.png'
						alt='Typescript'
						loading='lazy'
						class='icon w-47.5 h-45 transition duration-[calc(var(--transition-speed)/3)] object-contain'
						id='typescript'
					/>
				</template>
				<template v-slot:content>
					<Skill
						:skillWidth="'40%'"
						:skillHighlights="['Portfolio Website', 'Asteroids Reimagined', 'Brennan Schmidt Portfolio', 'Work Order Management Module', 'Field Service Scheduling Calendar', 'Nearby Property Locator', 'Dynamic Reporting Module']"
					>
						<template v-slot:title>
							TypeScript
						</template>
						<template v-slot:tooltip>
							40%
						</template>
						<template v-slot:skillDescription>
							A powerful, statically-typed superset of JavaScript that compiles to plain JavaScript, adding a layer of reliability and robustness
							to web development. Typescript has helped to improve my efficiency when developing due to it's type safe features. I used pure
							JavaScript for years, but once I started using TypeScript, I realized what I've been missing and every project since has been using
							this incredibly powerful superset of JavaScript!
						</template>
						<template v-slot:skillUses>
							1 Year
						</template>
					</Skill>
				</template>
			</Card>
			
			<Card
				id='javascript'
				class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center"
				@click="animateSkill($event.target.id, 'programming')"
			>
				<template v-slot:image>
					<img
						src='/assets/icons/icons8-javascript.svg'
						alt='JavaScript'
						loading='lazy'
						class='icon w-47.5 h-45 transition duration-[calc(var(--transition-speed)/3)] object-contain'
						id='javascript'
					/>
				</template>
				<template v-slot:content>
					<Skill
						:skillWidth="'60%'"
						:skillHighlights="['Portfolio Website', 'Asteroids Reimagined', 'Brennan Schmidt Portfolio', 'Bug Zapper', 'Work Order Management Module', 'Field Service Scheduling Calendar', 'Nearby Property Locator', 'Dynamic Reporting Module']"
					>
						<template v-slot:title>
							JavaScript
						</template>
						<template v-slot:tooltip>
							60%
						</template>
						<template v-slot:skillDescription>
							JavaScript is a versatile, high-level programming language that powers dynamic, interactive features on websites and applications.
							This has been the backbone of everything I built while learning web-development, and after years of developing with JavaScript, it has
							become my go to language!
						</template>
						<template v-slot:skillUses>
							4 Years
						</template>
					</Skill>
				</template>
			</Card>
			
			<Card
				id="html"
				class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center"
				@click="animateSkill($event.target.id, 'programming')"
			>
				<template v-slot:image>
					<img
						src='/assets/icons/icons8-html-5.svg'
						alt='HTML5'
						loading='lazy'
						class='icon w-47.5 h-45 transition duration-[calc(var(--transition-speed)/3)] object-contain'
						id="html"
					/>
				</template>
				<template v-slot:content>
					<Skill
						:skillWidth="'60%'"
						:skillHighlights="['Portfolio Website', 'Asteroids Reimagined', 'Brennan Schmidt Portfolio', 'Bug Zapper', 'Work Order Management Module', 'Field Service Scheduling Calendar', 'Nearby Property Locator', 'Dynamic Reporting Module']"
					>
						<template v-slot:title>
							HTML
						</template>
						<template v-slot:tooltip>
							60%
						</template>
						<template v-slot:skillDescription>
							The fundamental language for structuring content on the web. Learning HTML and how to structure web pages has been instrumental in
							fueling my passion for development. Being able to visualize my changes onscreen as I make them forged the path for me in becoming a
							software developer.
						</template>
						<template v-slot:skillUses>
							4 Years
						</template>
					</Skill>
				</template>
			</Card>
			
			<Card id='css' class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center" @click="animateSkill($event.target.id, 'programming')">
				<template v-slot:image>
					<img
						src='/assets/icons/icons8-css3.svg'
						alt='CSS3'
						loading='lazy'
						class='icon w-47.5 h-45 transition duration-[calc(var(--transition-speed)/3)] object-contain'
						id='css'
					/>
				</template>
				<template v-slot:content>
					<Skill
						:skillWidth="'70%'"
						:skillHighlights="['Portfolio Website', 'Asteroids Reimagined', 'Brennan Schmidt Portfolio', 'Bug Zapper', 'Work Order Management Module', 'Field Service Scheduling Calendar', 'Nearby Property Locator', 'Dynamic Reporting Module']"
					>
						<template v-slot:title>
							CSS
						</template>
						<template v-slot:tooltip>
							70%
						</template>
						<template v-slot:skillDescription>
							The language used to style HTML content, allowing developers to control layout, colors, fonts, and responsive design.
							Like HTML, learning CSS has been an incredibly exciting journey for me. Having fine control over the style of a webpage
							and how it is displayed allows my creative side to really flourish!
						</template>
						<template v-slot:skillUses>
							4 Years
						</template>
					</Skill>
				</template>
			</Card>
			
			<Card
				id='react'
				class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center"
				@click="animateSkill($event.target.id, 'programming')"
			>
				<template v-slot:image>
					<img
						src='/assets/icons/icons8-react-160.png'
						alt='React'
						loading='lazy'
						class='icon w-47.5 h-45 transition duration-[calc(var(--transition-speed)/3)] object-contain'
						id='react'
					/>
				</template>
				<template v-slot:content>
					<Skill
						:skillWidth="'20%'"
						:skillHighlights="['Bug Zapper']"
					>
						<template v-slot:title>
							React
						</template>
						<template v-slot:tooltip>
							20%
						</template>
						<template v-slot:skillDescription>
							A powerful JavaScript library developed by Meta for creating dynamic, component-based user interfaces. I learned React after
							college so I could expand and diversify my skill set. While I prefer Vue JS, React is an important skill I have in my tool bag.
						</template>
						<template v-slot:skillUses>
							1 Year
						</template>
					</Skill>
				</template>
			</Card>
			
			<Card
				id='python'
				class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center"
				@click="animateSkill($event.target.id, 'programming')"
			>
				<template v-slot:image>
					<img
						src='/assets/icons/icons8-python.svg'
						alt='Python'
						loading='lazy'
						class='icon w-47.5 h-45 transition duration-[calc(var(--transition-speed)/3)] object-contain'
						id='python'
					/>
				</template>
				<template v-slot:content>
					<Skill
						:skillWidth="'50%'"
						:skillHighlights="['Game Engine', 'Various Data Science Projects', 'Programming Learning Tool']"
					>
						<template v-slot:title>
							Python
						</template>
						<template v-slot:tooltip>
							50%
						</template>
						<template v-slot:skillDescription>
							A high-level, interpreted programming language known for its readability and versatility. This was the first "real" programming language
							I learned during my first computer science class in high school. It is simple to learn, very powerful, and incredibly versatile. When I'm
							not using TypeScript or JavaScript, Python is the first language I'll turn to!
						</template>
						<template v-slot:skillUses>
							4 Years
						</template>
					</Skill>
				</template>
			</Card>
			
			<Card
				id='git'
				class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center"
				@click="animateSkill($event.target.id, 'programming')"
			>
				<template v-slot:image>
					<img
						src='/assets/icons/icons8-git.svg'
						alt='Git'
						loading='lazy'
						class='icon w-47.5 h-45 transition duration-[calc(var(--transition-speed)/3)] object-contain'
						id='git'
					/>
				</template>
				<template v-slot:content>
					<Skill
						:skillWidth="'50%'"
						:skillHighlights="['Portfolio Website', 'Asteroids Reimagined', 'Brennan Schmidt Portfolio', 'Bug Zapper', 'Work Order Management Module', 'Field Service Scheduling Calendar', 'Nearby Property Locator', 'Dynamic Reporting Module', 'Various University Projects']"
					>
						<template v-slot:title>
							Git
						</template>
						<template v-slot:tooltip>
							50%
						</template>
						<template v-slot:skillDescription>
							A distributed version control system that allows developers to track changes, collaborate on code, and maintain a history of project development.
							Git is one of the most important skills I have learned when it comes to software development. I use it for every project I work on, allowing me to
							track my project history and merge changes whenever necessary.
						</template>
						<template v-slot:skillUses>
							5 Years
						</template>
					</Skill>
				</template>
			</Card>
			
			<Card
				id='backend'
				class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center"
				@click="animateSkill($event.target.id, 'programming')"
			>
				<template v-slot:image>
					<img
						src='/assets/icons/icons8-backend-development-96.png'
						alt='Backend Development'
						loading='lazy'
						class='icon w-47.5 h-45 transition duration-[calc(var(--transition-speed)/3)] object-contain'
						id='backend'
					/>
				</template>
				<template v-slot:content>
					<Skill
						:skillWidth="'80%'"
						:skillHighlights="['FileMaker Application Development', 'Asteroids Reimagined', 'Bug Zapper', 'Work Order Management Module', 'Field Service Scheduling Calendar', 'Nearby Property Locator', 'Dynamic Reporting Module']"
					>
						<template v-slot:title>
							Backend Development
						</template>
						<template v-slot:tooltip>
							60%
						</template>
						<template v-slot:skillDescription>
							Backend development is the skill of building and maintaining the server-side infrastructure that powers web applications. This is a skill I learned about
							all throughout college, but didn't really start working with until I began my career. It is a skill that I have continued to refine over my career, and is
							one that I will forever enjoy practicing.
						</template>
						<template v-slot:skillUses>
							2 Years
						</template>
					</Skill>
				</template>
			</Card>
			
			<Card
				id='frontend'
				class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center"
				@click="animateSkill($event.target.id, 'programming')"
			>
				<template v-slot:image>
					<img
						src='/assets/icons/icons8-laptop-coding-96.png'
						alt='Frontend Development'
						loading='lazy'
						class='icon w-47.5 h-45 transition duration-[calc(var(--transition-speed)/3)] object-contain'
						id='frontend'
					/>
				</template>
				<template v-slot:content>
					<Skill
						:skillWidth="'70%'"
						:skillHighlights="['FileMaker Application Development', 'Portfolio Website', 'Asteroids Reimagined', 'Brennan Schmidt Portfolio', 'Bug Zapper', 'Work Order Management Module', 'Field Service Scheduling Calendar', 'Nearby Property Locator', 'Dynamic Reporting Module']"
					>
						<template v-slot:title>
							Frontend Development
						</template>
						<template v-slot:tooltip>
							70%
						</template>
						<template v-slot:skillDescription>
							Frontend development focuses on creating the visual and interactive aspects of a web application that users interact with directly. This is one my my favorite
							aspects of development. I am truly passionate about creating visual representations of my work and am constantly learning new ways to improve what I have built.
							This skill allows me to show off my creativity and allows me to create projects that others can enjoy.
						</template>
						<template v-slot:skillUses>
							4 Years
						</template>
					</Skill>
				</template>
			</Card>
		</div>
	</div>
</template>

<script setup lang="ts">
    import Card from '@/components/Card.vue';
    import Skill from '@/components/Skill.vue';
    import gsap from 'gsap';
    import { useWindowSize } from '@vueuse/core';
    import { onMounted, onUnmounted, ref } from 'vue';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { Flip } from 'gsap/Flip';
    import { v4 as uuidv4 } from 'uuid';

    gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(Flip);

	interface SkillInfo {
        skillID: string;
        scrollTriggerID: string;
    }

    const { width, height } = useWindowSize();
    const skillList = ref<Array<SkillInfo>>([]);
    const isSkillExpanded = ref(false);
    const currentlyExpandedSkill = ref();
    const cardWidth = ref();
    const skillsContainer = ref();
    let skillsCtx: any;
	let skillCardCtx: any;

    const animateSkill = (targetID: string, skillType: string): void => {
        if (!isSkillExpanded.value) {
			skillCardCtx = gsap.context((self: any): any => {
                const skills = self.selector('.icon-card');
                
                let currentCardWidth = document.querySelector(".project-card")?.getBoundingClientRect().width! * 0.98;
                let calculatedHeight = skills[8].getBoundingClientRect().bottom - skills[0].getBoundingClientRect().top;
                let windowWidth = width.value;
                let windowHeight = height.value * 0.7;
                let sizeHeight = calculatedHeight > windowHeight && windowWidth >= 800 ? calculatedHeight : windowHeight;
				let tl: any;
				
                skills.forEach((skill: any, index: number): void => {
					
                    if (skill.id == targetID) {
						let currentLeft = skill.getBoundingClientRect().left;
						let currentTop = skill.getBoundingClientRect().top;
						let headerBottom = document.querySelector("." + skillType + "-skill-header")!.getBoundingClientRect().bottom;
                        tl = gsap.timeline();
                        currentlyExpandedSkill.value = document.getElementById(skill.id);
                        currentlyExpandedSkill.value.classList.toggle("expanded");

						tl.to(".icon", {
							opacity: 0,
							duration: 0
						});
						tl.to(skill, {
							top: currentTop,
							left: currentLeft,
							duration: 0
						})
						tl.to(skill, {
							position: "absolute",
							transformOrigin: "-50% -50%",
							width:  windowWidth > 600 ? ( windowWidth - 80 ) * 0.7 : windowWidth * 0.7,
							height: sizeHeight,
							top: headerBottom > 0 ? 48 : ( headerBottom * -1 ) + 48,
							left: windowWidth * 0.14,
							duration: 0,
							scale: 1,
							padding: 0
						});
						tl.to(".card-content", {
							y: -sizeHeight
						}, "<+=.25");

                    } else  {
                        gsap.set(skill, {
							scale: 0,
							autoAlpha: 0,
							zIndex: -1,
							duration: 0
						});
                    }
                });
                isSkillExpanded.value = true;
				cardWidth.value = currentCardWidth;
			}, skillsContainer.value);
        } else {
            gsap.to(".card-content", {
                y: 500,
				duration: 0.5,
                onComplete: (): void => {
					skillCardCtx.revert();
					isSkillExpanded.value = false;
					currentlyExpandedSkill.value.classList.toggle("expanded");
					currentlyExpandedSkill.value = null;
                }
            });
            
            
        }
    };

    const handleScrollAnimation = (): void => {
        if (isSkillExpanded.value) {
            skillList.value.forEach((skill: SkillInfo): void => {
                if (currentlyExpandedSkill.value.id != skill.skillID) {
                    ScrollTrigger.getById(skill.scrollTriggerID)?.disable();
                }
            });
        } else {
            ScrollTrigger.enable();
        }
    }

    onMounted((): void => {
        skillsCtx = gsap.context((self: any): void => {
            const skills = self.selector('.icon-card');
			let numColumns = window.getComputedStyle(document.querySelector(".skills-container")!).getPropertyValue("grid-template-columns").split(" ").length;
			let halfwayPoint = numColumns % 2 === 1 ? Math.ceil(numColumns / 2) : numColumns / 2;

            skills.forEach((skill: any, index: number): void => {
                let uuid = uuidv4();
				let currentColumn = 1 + (index % numColumns);
				let xOffset = (currentColumn - halfwayPoint) * 100;

                // Generic animation from below card
                gsap.from(skill, {
                        scrollTrigger: {
                            id: uuid,
                            trigger: skill,
                            start: 'top bottom',
                            end: 'top 99%',
                            scrub: true
                        },
                        scale: 0,
						x: xOffset,
                        y: 200
                    }
                );

                skillList.value.push({
                    skillID: skill.id,
                    scrollTriggerID: uuid
                });
            });

            window.addEventListener("scroll", handleScrollAnimation);
            gsap.from('.skill-header', {
                    scrollTrigger: {
                        trigger: '.skill-header',
                        start: 'top bottom',
                        end: 'top 50%',
                        scrub: true
                    },
                    scale: 0
                }
            );
        }, skillsContainer.value);
    });

    onUnmounted((): void => {
        skillsCtx.revert();
    });
</script>

<style lang="scss" scoped>
	.icon-card {
		background: linear-gradient(#212121, #212121) padding-box,
		linear-gradient(145deg, transparent 35%, #407E8A, #56A4B8) border-box;
		
		&:not(.expanded):hover {
			transform: scale(1.1) !important;
			transition-timing-function: ease;
		}
	}

    .skill-header {
		font-family: "Mona Sans", sans-serif;
    }

     @media screen and (max-width: 600px) {
         .skills-container {
			 margin-left: 0;
		 }
     }
</style>