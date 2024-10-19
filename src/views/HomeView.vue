<template>
    <div ref="homeContainer" class="home-container">
        <img class="sattelite sat-one" src="/public/assets/images/SatelliteImageOne.png" >
        <img class="sattelite sat-two" src="/public/assets/images/SatelliteImageTwo.png" >
        <span class="grant-gonzalez"></span>
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="angle-double-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x arrow"
            @click="scrollToSection('about')"
        >
            <g class="fa-group">
                <path
                    fill="currentColor"
                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                    class="fa-secondary"
                ></path>
                <path
                    fill="currentColor"
                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                    class="fa-primary"
                ></path>
            </g>
        </svg>
    </div>
</template>

<script setup lang="ts">
    import gsap from 'gsap';
    import { onMounted } from 'vue';
    import TextPlugin from 'gsap/TextPlugin';
    import { useWindowSize } from '@vueuse/core';

    const { width } = useWindowSize();

    gsap.registerPlugin(TextPlugin);

    const scrollToSection = (section: string) => {
        const targetElement = document.getElementById(section);
		if (targetElement) {
			targetElement.scrollIntoView({behavior: 'smooth'});            
		}
    }

    onMounted(() => {
        let fontsizeNormal;
        let fontsizeLarge;

        if (width.value >= 1440) {
            fontsizeNormal = 144;
            fontsizeLarge = 196;
        } else if (width.value > 600) {
            fontsizeNormal = 72;
            fontsizeLarge = 96;
        } else if (width.value > 425) {
            fontsizeNormal = 36;
            fontsizeLarge = 48;
        } else {
            fontsizeNormal = 24;
            fontsizeLarge = 36;
        }

        let tl = gsap.timeline();
        let arrowBounceTl = gsap.timeline({repeat: -1, yoyo: true});
        let satteliteBounceTl = gsap.timeline({repeat: -1, ease: "none", yoyo: true});

        tl.set('body', { overflow: "hidden" })
        .fromTo(".grant-gonzalez", 
            {
                fontSize: fontsizeNormal
            }, 
            {
                ease: "none",
                fontSize: fontsizeNormal,
                text: {
                    value: "GRANT GONZALEZ",
                    speed: 1
                }
            }
        )
        .fromTo(".grant-gonzalez", 
            {
                opacity: 1,
                fontSize: fontsizeNormal
            },
            {
                ease: "none",
                color: "#5CA8BF",
                duration: 0.1,
                fontSize: fontsizeLarge
            },
            ">+=0.5"
        )
        .fromTo(".grant-gonzalez", 
            {
                opacity: 1,
                fontSize: fontsizeLarge
            },
            {
                ease: "none",
                duration: 0.1,
                fontSize: fontsizeNormal,
                onComplete: () => { 
                    gsap.to('.arrow', { opacity: 1 });
                    gsap.to('.sattelite', { opacity: 1 });
                    gsap.from('.sattelite', { y: window.innerHeight, ease: "power2.out", duration: 1 })
                    arrowBounceTl.set('body', { overflow: "scroll" }).to('.arrow', { y: 10 });
                }
            },
            ">+=0.25"
        );
        
        satteliteBounceTl.to('.sattelite', {
            rotate: -5,
            ease: "none",
            duration: 1
        });

        let sattelites = document.querySelectorAll('.sattelite');
        sattelites.forEach((sattelite: any, index: number) => {
                sattelite.addEventListener('click', () => {
                    if (index % 2 == 1) {
                        gsap.to(sattelite, {
                            x: window.innerWidth,
                            y: -500,
                            rotation: 360,
                            ease: 'power1.in'
                        });
                    } else {
                        gsap.to(sattelite, {
                            x: -window.innerWidth,
                            y: 1000,
                            rotation: 360,
                            ease: 'power1.in'
                        });
                    }
                    
                })  
            }
        )
    });
</script>

<style lang="scss" scoped>
    .home-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        min-width: 100vw;
    }

    .sattelite {
        opacity: 0;
        position: absolute;
    }

    .sat-one {
        right: 5rem;
        top: -5%;
        transform: rotate(5deg);
    }

    .sat-two {
        left: -1rem;
        top: 50%;
        transform: scale(0.5) rotate(5deg);
    }

    .grant-gonzalez {
        font-size: 144px;
        margin-left: 5rem;
        opacity: 1;
        color: white;
    }

    .arrow {
        opacity: 0;
        width: 5rem;
        height: 5rem;
        transform: rotate(90deg);
    }

    .arrow:hover {
        cursor: pointer;
    }

    .fa-primary {
        color: #407E8A;
    }

    .fa-secondary {
        color: #56A4B8;
    }

        /* Small screens */
    @media only screen and (max-width: 600px) {
        .arrow {
            width: 2rem;
            height: 4rem;
            transform: rotate(90deg);
        }

        .grant-gonzalez {
            margin-left: 0;
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
                    left: 0px; 
                }
            }
        }
    }
</style>