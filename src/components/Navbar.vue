<template>
    <nav class="navbar">
        <ul class="navbar-nav group">
            <li class="logo">
                <div
                    id="logo-link"
                    class="flex h-20 group-hover:h-32 transition-[height] duration-600 items-center text-(--text-primary) hover:cursor-pointer"
                    :class="currentActiveSection == 'logo-link' ? 'active' : ''"
                    @click="scrollToSection('home', changeActiveLink)"
                >
                    <span class="inline absolute left-2 transition ease-in duration-300 opacity-0 group-hover:opacity-100">
						<img src="/assets/images/GGLogo.png" alt="Grant Gonzalez Logo" class="h-20"/>
					</span>
					<span class="flex absolute right-3 transition duration-600 h-14 w-14 origin-right group-hover:scale-200 border-[#407E8A] border-[4px] justify-center items-center rounded-full overflow-hidden">
						<img src="/assets/images/personal/G_Headshot_New.jpeg" alt="Grant Gonzalez Logo" class="object-cover"/>
					</span>
                </div>
            </li>

            <li class="nav-item">
                <div
                    id="home-link"
                    class="nav-link"
                    :class="currentActiveSection == 'home-link' ? 'active' : ''"
                    @click="scrollToSection('home', changeActiveLink)"
                >
                    <svg 
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="home"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 576 512"
                    >
                        <path 
                            fill="currentColor"
                            d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                            class="fa-primary"
                        />
                    </svg>
                    <span class="link-text">Home</span>
                </div>
            </li>

            <li class="nav-item">
                <div
                    id="about-link"
                    class="nav-link"
                    :class="currentActiveSection == 'about-link' ? 'active' : ''"
                    @click="scrollToSection('about', changeActiveLink)"
                >
                    <svg 
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="about"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512"
                    >
                        <path 
                            fill="currentColor"
                            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
                            class="fa-primary"
                        />
                    </svg>
                    <span class="link-text">About</span>
                </div>
            </li>

            <li class="nav-item">
                <div
                    id="experience-link"
                    class="nav-link"
                    :class="currentActiveSection == 'experience-link' ? 'active' : ''"
                    @click="scrollToSection('experience', changeActiveLink)"
                >
					<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 512 512" version="1.1">
						<title>work-case-filled</title>
						<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<g id="work-case" fill="currentColor" transform="translate(42.666667, 64.000000)">
								<path
									fill="currentColor"
									d="M284.959,311.297l-50.575-23.285l-24.296-20.49l-38.858,38.652l16.755,112.015c0.059,0.39-0.04,0.788-0.272,1.105    l-17.725,24.259c-0.282,0.388-0.732,0.615-1.211,0.615s-0.929-0.229-1.211-0.615l-17.725-24.259    c-0.232-0.317-0.33-0.716-0.271-1.105l16.755-112.017l-38.858-38.649l-24.295,20.491l-50.575,23.283    c-7.484,3.07-14.754,7.694-18.578,15.85c0,0-54.972,130.881-25.156,130.881h319.831c29.816,0-25.155-130.881-25.155-130.881    C300.28,319.357,292.443,314.367,284.959,311.297z"
									class="fa-primary"
								/>
								<path
									fill="currentColor"
									d="M168.777,266.783c51.724,0,90.324-48.193,91.204-129.012c0.562-56.081-26.147-89.645-91.204-89.645    c-65.058,0-91.771,33.563-91.203,89.645C78.452,218.59,117.051,266.783,168.777,266.783z"
									class="fa-primary"
								/>
								<path
									fill="currentColor"
									d="M344.912,5.956c-38.256,0-72.351,18.14-94.149,46.264c2.255,1.847,4.412,3.796,6.457,5.861    c4.042,4.083,7.615,8.586,10.772,13.454c16.952-24.302,45.108-40.236,76.92-40.236c51.683,0,93.729,42.048,93.729,93.731    c0,51.682-42.047,93.729-93.729,93.729c-25.895,0-49.369-10.557-66.349-27.59c-2.261,9.307-5.128,18.104-8.587,26.321    c20.479,16.629,46.562,26.61,74.936,26.61c65.656,0,119.071-53.416,119.071-119.071C463.984,59.372,410.569,5.956,344.912,5.956z"
									class="fa-primary"
								/>
								<path
									fill="currentColor"
									d="M344.912,49.128c-5.249,0-9.504,4.254-9.504,9.504v69.692c0,5.248,4.255,9.503,9.504,9.503h55.247    c5.249,0,9.504-4.255,9.504-9.503c0-5.249-4.255-9.504-9.504-9.504h-45.744V58.632C354.415,53.382,350.16,49.128,344.912,49.128z"
									class="fa-primary"
								/>
							</g>
						</g>
					</svg>
                    <span class="link-text">Experience</span>
                </div>
            </li>
			
			<li class="nav-item">
                <div
                    id="projects-link"
                    class="nav-link"
                    :class="currentActiveSection == 'projects-link' ? 'active' : ''"
                    @click="scrollToSection('projects', changeActiveLink)"
                >
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="projects"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 512"
                    >
                        <path
                            fill="currentColor"
                            d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
                            class="fa-primary"
                        />
                    </svg>
                    <span class="link-text">Projects</span>
                </div>
            </li>

            <li class="nav-item">
                <div
                    id="skills-link"
                    class="nav-link"
                    :class="currentActiveSection == 'skills-link' ? 'active' : ''"
                    @click="scrollToSection('skills', changeActiveLink)"
                >
                    <svg 
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="skills"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512"
                    >
                        <path 
                            fill="currentColor"
                            d="M78.6 5C69.1-2.4 55.6-1.5 47 7L7 47c-8.5 8.5-9.4 22-2.1 31.6l80 104c4.5 5.9 11.6 9.4 19 9.4h54.1l109 109c-14.7 29-10 65.4 14.3 89.6l112 112c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-112-112c-24.2-24.2-60.6-29-89.6-14.3l-109-109V104c0-7.5-3.5-14.5-9.4-19L78.6 5zM19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L233.7 374.3c-7.8-20.9-9-43.6-3.6-65.1l-61.7-61.7L19.9 396.1zM512 144c0-10.5-1.1-20.7-3.2-30.5c-2.4-11.2-16.1-14.1-24.2-6l-63.9 63.9c-3 3-7.1 4.7-11.3 4.7H352c-8.8 0-16-7.2-16-16V102.6c0-4.2 1.7-8.3 4.7-11.3l63.9-63.9c8.1-8.1 5.2-21.8-6-24.2C388.7 1.1 378.5 0 368 0C288.5 0 224 64.5 224 144l0 .8 85.3 85.3c36-9.1 75.8 .5 104 28.7L429 274.5c49-23 83-72.8 83-130.5zM56 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
                            class="fa-primary"
                        />
                    </svg>
                    <span class="link-text">Skills</span>
                </div>
            </li>

            <li class="nav-item">
                <div
                    id="contact-link"
                    class="nav-link"
                    :class="currentActiveSection == 'contact-link' ? 'active' : ''"
                    @click="scrollToSection('contact', changeActiveLink)"
                >
                    <svg 
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="contact"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="currentColor"
                            d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                            class="fa-primary"
                        />
                    </svg>
                    <span class="link-text">Contact</span>
                </div>
            </li>

            <li class="nav-item">
                <a href="https://www.linkedin.com/in/grant-gonzalez-165117205/" id="linkedin-link" class="nav-link" target="_blank" rel="noreferrer">
                    <svg 
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="linkedin"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 448 512"
                    >
                        <path
                            fill="currentColor" 
                            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                            class="fa-primary"
                        />
                    </svg>
                    <span class="link-text">LinkedIn</span>
                </a>
            </li>

            <li class="nav-item">
                <a href="https://github.com/grantgonzalez14" id="github-link"  class="nav-link" target="_blank" rel="noreferrer">
                    <svg 
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="github"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 496 512"
                    >
                        <path
                            fill="currentColor"
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                            class="fa-primary"
                        />
                    </svg>
                    <span class="link-text">Github</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
    import { onMounted, ref } from "vue";
	import { scrollToSection } from "@/utility/utilityFunctions";
    import "../../public/assets/main.css";

    // refs
    const currentActiveSection = ref<string>("home-link");
    const currentScrollPosition = ref<number>();
    const sections = ref<string[]>([
        "home",
        "about",
		"experience",
        "projects",
        "skills",
        "contact"
    ]);
    const sectionHeights = ref<{}>({
        home: {},
        about: {},
        projects: {},
        skills: {}
    });

    const changeActiveLink = (newActiveSection: string): void => {
        const targetLink = document.getElementById(newActiveSection + '-link');
        if (targetLink) {
            currentActiveSection.value = newActiveSection + "-link";
        }
    }

    const updateScroll = (): void => {
        currentScrollPosition.value = window.scrollY;
        for (let section of sections.value) {
            if (isElementInView(section)) {
                changeActiveLink(section);
            }
        }
    }

    const isElementInView = (sectionKey: string): boolean => {
        return (
            // @ts-ignore
            currentScrollPosition.value >= sectionHeights.value[sectionKey].top &&
            // @ts-ignore
            currentScrollPosition.value <= sectionHeights.value[sectionKey].bottom
        );
    }

    onMounted(() => {
        currentActiveSection.value = "home-link";
        currentScrollPosition.value = window.scrollY;
        window.addEventListener("scroll", updateScroll);

        sectionHeights.value = {
            home: {
                top: document.getElementById("home")?.getBoundingClientRect().top,
                bottom: document.getElementById("home")?.getBoundingClientRect().bottom,
            },
            about: {
                top: document.getElementById("about")?.getBoundingClientRect().top,
                bottom: document.getElementById("about")?.getBoundingClientRect().bottom,
            },
			experience: {
				top: document.getElementById("experience")?.getBoundingClientRect().top,
				bottom: document.getElementById("experience")?.getBoundingClientRect().bottom,
			},
            projects: {
                top: document.getElementById("projects")?.getBoundingClientRect().top,
                bottom: document.getElementById("projects")?.getBoundingClientRect().bottom,
            },
            skills: {
                top: document.getElementById("skills")?.getBoundingClientRect().top,
                bottom: document.getElementById("skills")?.getBoundingClientRect().bottom,
            },
            contact: {
                top: document.getElementById("contact")?.getBoundingClientRect().top,
                bottom: document.getElementById("contact")?.getBoundingClientRect().bottom,
            }
        }
    });
</script>

<style lang="scss" scoped>
	body {
		color: black;
		background-color: white;
		margin: 0;
		padding: 0;
		
		&::-webkit-scrollbar { width: 0.25rem; }
		
		&::-webkit-scrollbar-track { background: #1e1e24; }
		
		&::-webkit-scrollbar-thumb { background: #56A4B8; }
	}
	
	main {
		margin-left: 5rem;
		padding: 1rem;
	}
	
	.navbar {
		position: fixed;
		background-color: var(--bg-primary);
		transition: width var(--transition-speed) ease;
		z-index: 999;
	}
	
	.navbar-nav {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
	}
	
	.nav-item {
		width: 100%;
	}
	
	.active {
		background: var(--bg-secondary);
	}
	
	.nav-link {
		display: flex;
		align-items: center;
		height: 5rem;
		color: var(--text-primary);
		text-decoration: none;
		filter: grayscale(100%) opacity(0.7);
		transition: var(--transition-speed);
		
		&:hover {
			filter: grayscale(0%) opacity(1);
			background: var(--bg-secondary);
			color: var(--text-secondary);
			cursor: pointer;
		}
		
		svg {
			width: 2rem;
			min-width: 2rem;
			margin: 0 1.5rem;
		}
	}
	
	.link-text {
		display: inline;
		opacity: 0;
		margin-left: 1rem;
		transition: calc(var(--transition-speed) * ( 3 / 4 ));
	}
	
	.fa-primary {
		color: #407E8A;
	}
	
	.fa-secondary {
		color: #56A4B8;
	}
	
	.fa-primary,
	.fa-secondary {
		transition: var(--transition-speed);
	}
	
	.logo {
		font-weight: bold;
		text-transform: uppercase;
		margin-bottom: 1rem;
		text-align: center;
		color: var(--text-secondary);
		background: var(--bg-secondary);
		font-size: 1.5rem;
		letter-spacing: 0.3ch;
		width: 100%;
		
		svg {
			transform: rotate(0deg);
			transition: var(--transition-speed);
		}
	}
	
	.logo-text {
		display: inline;
		position: absolute;
		left: -999px;
		transition: var(--transition-speed);
	}
	
	.logo-img {
		height: 40px;
		width: auto;
	}
	
	.navbar:hover .logo svg {
		transform: rotate(-180deg);
	}
	
	/* Small screens */
	@media only screen and (max-width: 600px) {
		.navbar {
			bottom: 0;
			width: 100vw;
			height: 5rem;
			overflow-x: scroll;
		}
		
		.link-text {
			display: none;
		}
		
		.logo {
			display: none;
		}
		
		.navbar-nav {
			flex-direction: row;
		}
		
		.nav-link {
			justify-content: center;
			align-items: center;
		}
		
		main {
			margin: 0;
		}
	}
	
	/* Large screens */
	@media only screen and (min-width: 601px) {
		.navbar {
			top: 0;
			width: 5rem;
			height: 100vh;
			
			&:hover {
				width: 16rem;
				
				.link-text {
					opacity: 1;
				}
				
				.logo {
					svg {
						margin-left: 11rem;
					}
				}
				
				.logo-text {
					left: 0;
				}
			}
		}
	}
</style>