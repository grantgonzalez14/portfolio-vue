<template>
    <div ref="skillsContainer" class="skills-container grid relative grid-cols-[repeat(auto-fit,_minmax(12rem,_1fr))] grid-rows-[2rem_repeat(auto-fit,_12rem)] gap-4 lg:px-[14%] items-center min-h-dvh max-w-dvw mt-20 md:ml-20">
        <h1 class='skill-header flex justify-center text-2xl font-normal col-span-full row-[1]'>My Skills</h1>
        <Card id='fmp' class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center" @click="animateSkill($event.target.id)">
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
                <Skill :skillWidth="'85%'">
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
						<ul class="flex flex-col gap-2 -ml-[30px]">
							<li v-for="useCase of skillUseCaseList.fmp">
								-
								<span>
									<strong>{{ useCase.title }}:</strong>
									{{ useCase.description }}
								</span>
							</li>
						</ul>
					</template>
                </Skill>
            </template>
        </Card>

        <Card id='vue' class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center" @click="animateSkill($event.target.id)">
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
                <Skill :skillWidth="'75%'">
                    <template v-slot:title>
                        Vue JS
                    </template>
                    <template v-slot:tooltip>
                        75%
                    </template>
					<template v-slot:skillDescription>
						A progressive JavaScript framework for building user interfaces and single-page applications. Known for its simplicity and
						flexibility, Vue’s component-based architecture allows developers to create reusable, modular components that keep the codebase
						organized and maintainable. Vue’s reactive data binding, Composition API, and support for TypeScript make it suitable for complex
						applications, while its lightweight core and extensive ecosystem enable both small and large-scale projects. Vue is widely appreciated
						for its developer-friendly approach and powerful features. Utilizing Vue 3’s Composition API, TypeScript integration,
						and modular component design, I deliver front-end applications that seamlessly integrate with backend services. My approach
						emphasizes performance, flexibility, and maintainability, ensuring that each application is optimized for a consistent user
						experience across all devices.
					</template>
					<template v-slot:skillUses>
						<ul class="flex flex-col gap-2 -ml-[30px]">
							<li v-for="useCase of skillUseCaseList.vue">
								<span>
									<strong>{{ useCase.title }}:</strong>
									{{ useCase.description }}
								</span>
							</li>
						</ul>
					</template>
                </Skill>
            </template>
        </Card>

        <Card id='typescript' class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center" @click="animateSkill($event.target.id)">
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
                <Skill :skillWidth="'40%'">
                    <template v-slot:title>
                        Typescript
                    </template>
                    <template v-slot:tooltip>
                        40%
                    </template>
					<template v-slot:skillDescription>
						A powerful, statically-typed superset of JavaScript that compiles to plain JavaScript, adding a layer of reliability and robustness
						to web development. By introducing optional static types, TypeScript enables developers to catch errors early in the development process,
						making code more predictable and easier to debug. With strong support for object-oriented programming, interfaces, and advanced tooling,
						TypeScript provides a structured approach to JavaScript that enhances code readability, reusability, and scalability, especially in larger
						projects. Ideal for both front-end and back-end development, TypeScript integrates seamlessly with frameworks like Vue and React, offering
						a solid foundation for building high-quality, maintainable applications.
					</template>
					<template v-slot:skillUses>
						<ul class="flex flex-col gap-2 -ml-[30px]">
							<li v-for="useCase of skillUseCaseList.typescript">
								<span>
									<strong>{{ useCase.title }}:</strong>
									{{ useCase.description }}
								</span>
							</li>
						</ul>
					</template>
                </Skill>
            </template>
        </Card>

        <Card id='javascript' class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center" @click="animateSkill($event.target.id)">
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
                <Skill :skillWidth="'60%'">
                    <template v-slot:title>
                        JavaScript
                    </template>
                    <template v-slot:tooltip>
                        60%
                    </template>
					<template v-slot:skillDescription>
						JavaScript is a versatile, high-level programming language that powers dynamic, interactive features on websites and applications. As the
						backbone of web development, JavaScript allows developers to create responsive interfaces, handle events, and interact with APIs, making
						it essential for building modern, user-friendly experiences. With its wide adoption and extensive ecosystem, JavaScript can be used across
						the full stack—from front-end frameworks like Vue, React, and Angular to back-end environments like Node.js. Its flexibility and asynchronous
						capabilities make JavaScript a powerful tool for handling complex functionality, enhancing performance, and delivering rich, engaging applications
						across browsers and platforms.
					</template>
					<template v-slot:skillUses>
						<ul class="flex flex-col gap-2 -ml-[30px]">
							<li v-for="useCase of skillUseCaseList.javascript">
								<span>
									<strong>{{ useCase.title }}:</strong>
									{{ useCase.description }}
								</span>
							</li>
						</ul>
					</template>
                </Skill>
            </template>
        </Card>

        <Card id="html" class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center" @click="animateSkill($event.target.id)">
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
                <Skill :skillWidth="'60%'">
                    <template v-slot:title>
                        HTML
                    </template>
                    <template v-slot:tooltip>
                        60%
                    </template>
					<template v-slot:skillDescription>
						The fundamental language for structuring content on the web. It provides the foundation for web pages by organizing text, images, links, and other
						elements into a cohesive layout. HTML tags define content semantics, making it essential for accessibility, SEO, and overall usability. It serves
						as the building block for any web application, forming a base upon which CSS and JavaScript bring style and interactivity.
					</template>
					<template v-slot:skillUses>
						<ul class="flex flex-col gap-2 -ml-[30px]">
							<li v-for="useCase of skillUseCaseList.html">
								<span>
									<strong>{{ useCase.title }}:</strong>
									{{ useCase.description }}
								</span>
							</li>
						</ul>
					</template>
                </Skill>
            </template>
        </Card>

        <Card id='css' class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center" @click="animateSkill($event.target.id)">
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
                <Skill :skillWidth="'70%'">
                    <template v-slot:title>
                        CSS
                    </template>
                    <template v-slot:tooltip>
                        70%
                    </template>
					<template v-slot:skillDescription>
						The language used to style HTML content, allowing developers to control layout, colors, fonts, and responsive design. CSS enables the separation of content
						and presentation, making it easier to adapt designs across different devices and screen sizes. With advancements like Flexbox, Grid, and CSS animations, it’s
						possible to create visually compelling, responsive layouts that enhance user experience while maintaining performance.
					</template>
					<template v-slot:skillUses>
						<ul class="flex flex-col gap-2 -ml-[30px]">
							<li v-for="useCase of skillUseCaseList.css">
								<span>
									<strong>{{ useCase.title }}:</strong>
									{{ useCase.description }}
								</span>
							</li>
						</ul>
					</template>
                </Skill>
            </template>
        </Card>

        <Card id='react' class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center" @click="animateSkill($event.target.id)">
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
                <Skill :skillWidth="'20%'">
                    <template v-slot:title>
                        React
                    </template>
                    <template v-slot:tooltip>
                        20%
                    </template>
					<template v-slot:skillDescription>
						A powerful JavaScript library developed by Facebook for creating dynamic, component-based user interfaces. Its declarative approach and virtual DOM allow for
						highly efficient rendering, making React ideal for building fast, responsive web applications. With React, developers can create reusable UI components, manage
						application state with hooks, and leverage the ecosystem of tools like Redux and React Router. It’s widely used for creating interactive, scalable web applications.
					</template>
					<template v-slot:skillUses>
						<ul class="flex flex-col gap-2 -ml-[30px]">
							<li v-for="useCase of skillUseCaseList.react">
								<span>
									<strong>{{ useCase.title }}:</strong>
									{{ useCase.description }}
								</span>
							</li>
						</ul>
					</template>
                </Skill>
            </template>
        </Card>

        <Card id='python' class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center" @click="animateSkill($event.target.id)">
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
                <Skill :skillWidth="'50%'">
                    <template v-slot:title>
                        Python
                    </template>
                    <template v-slot:tooltip>
                        50%
                    </template>
					<template v-slot:skillDescription>
						A high-level, interpreted programming language known for its readability and versatility. It’s widely used across various domains—from web development and data science
						to automation and artificial intelligence. With a vast standard library and supportive community, Python makes it easy to write efficient, maintainable code. Its extensive
						libraries, like Django and Flask for web development, and Pandas and NumPy for data analysis, make Python a popular choice for both beginners and seasoned developers.
					</template>
					<template v-slot:skillUses>
						<ul class="flex flex-col gap-2 -ml-[30px]">
							<li v-for="useCase of skillUseCaseList.python">
								<span>
									<strong>{{ useCase.title }}:</strong>
									{{ useCase.description }}
								</span>
							</li>
						</ul>
					</template>
                </Skill>
            </template>
        </Card>

        <Card id='git' class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center" @click="animateSkill($event.target.id)">
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
                <Skill :skillWidth="'50%'">
                    <template v-slot:title>
                        Git
                    </template>
                    <template v-slot:tooltip>
                        50%
                    </template>
					<template v-slot:skillDescription>
						A distributed version control system that allows developers to track changes, collaborate on code, and maintain a history of project development. It enables branching, merging,
						and conflict resolution, making it essential for managing code in teams. Git’s powerful commit and history tracking features help prevent data loss and simplify the collaboration
						process, while platforms like GitHub and GitLab add further functionality for code reviews and project management.
					</template>
					<template v-slot:skillUses>
						<ul class="flex flex-col gap-2 -ml-[30px]">
							<li v-for="useCase of skillUseCaseList.git">
								<span>
									<strong>{{ useCase.title }}:</strong>
									{{ useCase.description }}
								</span>
							</li>
						</ul>
					</template>
                </Skill>
            </template>
        </Card>

        <Card id='frontend' class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center" @click="animateSkill($event.target.id)">
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
                <Skill :skillWidth="'80%'">
                    <template v-slot:title>
                        Frontend Development
                    </template>
                    <template v-slot:tooltip>
                        80%
                    </template>
					<template v-slot:skillDescription>
						Frontend development is the skill of building the user-facing part of a web application. This includes crafting the layout, design, and interactive elements that users directly engage
						with. Proficiency in frontend development requires knowledge of HTML, CSS, and JavaScript, along with modern frameworks like React, Vue.js, and Angular. I create responsive, visually
						appealing, and user-friendly interfaces that work seamlessly across various devices and screen sizes. A key aspect of this skill involves understanding user experience (UX) design
						principles and being able to translate design mockups into functional code. Additionally, frontend development includes working with state management, client-side routing, and interacting
						with backend APIs to dynamically update content and improve the overall user experience. Being proficient in frontend development means having the ability to build the visual structure of
						an application while ensuring that it is intuitive, fast, and accessible.
					</template>
					<template v-slot:skillUses>
						<ul class="flex flex-col gap-2 -ml-[30px]">
							<li v-for="useCase of skillUseCaseList.frontend">
								<span>
									<strong>{{ useCase.title }}:</strong>
									{{ useCase.description }}
								</span>
							</li>
						</ul>
					</template>
                </Skill>
            </template>
        </Card>

        <Card id='backend' class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center" @click="animateSkill($event.target.id)">
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
                <Skill :skillWidth="'80%'">
                    <template v-slot:title>
                        Backend Development
                    </template>
                    <template v-slot:tooltip>
                        80%
                    </template>
					<template v-slot:skillDescription>
						Backend development is the skill of building and maintaining the server-side infrastructure that powers web applications. It involves writing server-side code in languages such as Python, Java,
						Node.js, or Ruby to handle business logic, database operations, and communication between systems. Backend developers work with databases (SQL or NoSQL), manage user authentication, and ensure
						that the application’s architecture can scale to handle increasing traffic. This skill also involves building and managing APIs to connect the frontend with backend services. Backend developers
						ensure that applications run efficiently, securely, and reliably. They optimize performance, handle data processing, and implement error handling and security protocols, such as encryption and
						secure data storage. Mastery of backend development requires both technical expertise and the ability to architect systems that are scalable, secure, and capable of delivering seamless user experiences.
					</template>
					<template v-slot:skillUses>
						<ul class="flex flex-col gap-2 -ml-[30px]">
							<li v-for="useCase of skillUseCaseList.backend">
								<span>
									<strong>{{ useCase.title }}:</strong>
									{{ useCase.description }}
								</span>
							</li>
						</ul>
					</template>
                </Skill>
            </template>
        </Card>

        <Card id='api' class="icon-card hover:cursor-pointer border-[2px] border-transparent transition duration-[calc(var(--transition-speed)/3)] p-[20px] col-span-1 row-span-1 justify-self-center items-center" @click="animateSkill($event.target.id)">
            <template v-slot:image>
                <img
                    src='/assets/icons/PostmanIcon.png'
                    alt='API Integration'
                    loading='lazy'
                    class='icon w-47.5 h-45 transition duration-[calc(var(--transition-speed)/3)] object-contain'
                    id='api'
                />
            </template>
            <template v-slot:content>
                <Skill :skillWidth="'70%'">
                    <template v-slot:title>
                        API Integrations
                    </template>
                    <template v-slot:tooltip>
                        70%
                    </template>
					<template v-slot:skillDescription>
						API integration is the skill of connecting different software systems through APIs (Application Programming Interfaces) to allow them to share data and functionality. In modern application development,
						APIs are a fundamental skill as they enable interaction with third-party services, such as payment gateways, social media platforms, messaging services, and cloud storage solutions. API integration
						involves understanding how to send and receive data between systems, handle errors, and ensure the integration is secure and efficient. This skill is essential for adding external functionalities to an
						application without having to reinvent the wheel, allowing developers to leverage existing services to enhance the application’s capabilities. API integration also requires knowledge of protocols such as
						REST and GraphQL, as well as authentication methods like OAuth. Being proficient in API integration means being able to seamlessly connect systems and services, extending the functionality of an application
						while ensuring smooth and secure interactions with external systems.
					</template>
					<template v-slot:skillUses>
						<ul class="flex flex-col gap-2 -ml-[30px]">
							<li v-for="useCase of skillUseCaseList.api">
								<span>
									<strong>{{ useCase.title }}:</strong>
									{{ useCase.description }}
								</span>
							</li>
						</ul>
					</template>
                </Skill>
            </template>
        </Card>
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
	import { scrollToSection, skillListDescriptions } from "@/utility/utilityFunctions";

    gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(Flip);

	interface SkillInfo {
        skillID: string;
        scrollTriggerID: string;
    }

    const { width, height } = useWindowSize();
    const skillList = ref<Array<SkillInfo>>([]);
	const skillUseCaseList = ref(skillListDescriptions);
    const isSkillExpanded = ref(false);
    const currentlyExpandedSkill = ref();
    const cardWidth = ref();
    const skillsContainer = ref();
    let skillsCtx: any;
	let skillCardCtx: any;

    const animateSkill = (targetID: string): void => {
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
						let headerBottom = document.querySelector(".skill-header")!.getBoundingClientRect().bottom;
						console.log(headerBottom);
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