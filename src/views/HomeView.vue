<template>
    <div ref="homeContainer" class="home-container">
		<img src="/public/assets/images/SatelliteImageOne.png" alt="Satellite Image Bottom Left" id="satelliteOne" class="satellite sat-one" :style="{ width: satelliteWidthHeight.one, height: satelliteWidthHeight.one }">
        <img src="/public/assets/images/SatelliteImageTwo.png" alt="Satellite Image Top Right" id="satelliteTwo" class="satellite sat-two" :style="{ width: satelliteWidthHeight.two, height: satelliteWidthHeight.two }">
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
			:style="{width: arrowWidthHeight, height: arrowWidthHeight}"
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

		<svg width="100%" height="100%" viewBox="-20 0 557 190" id="motionPathSVG1" class="svg-path">
			<path id="path" d="M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"/>
		</svg>
    </div>
</template>

<script setup lang="ts">
    import gsap from 'gsap';
    import { onMounted, ref } from 'vue';
    import TextPlugin from 'gsap/TextPlugin';
	import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
    import { useWindowSize } from '@vueuse/core';
	import { scrollToSection } from "@/utility/utilityFunctions";

	const { width } = useWindowSize();
	const arrowWidthHeight = ref<number>(width.value * 0.0555556);
	const satelliteWidthHeight = ref<{
		one: number;
		two: number;
	}>({
		one: width.value * 0.1875,
		two: width.value * 0.1302083
	});


    gsap.registerPlugin(TextPlugin);
	gsap.registerPlugin(MotionPathPlugin);

    onMounted((): void => {
        let fontsizeNormal = width.value * 0.0615385 > 30 ? width.value * 0.0615385 : 30;
        let fontsizeLarge = width.value * 0.0923077 > 36 ? width.value * 0.0923077 : 36;

        let tl = gsap.timeline();
        let arrowBounceTl = gsap.timeline({repeat: -1, yoyo: true});
        let satelliteRotateTl = gsap.timeline({repeat: -1, ease: "none", yoyo: true});

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
                onComplete: (): void => {
                    gsap.to('.arrow', { opacity: 1 });
                    gsap.to('.satellite', { opacity: 1 });
                    gsap.from('.satellite', {
						y: window.innerHeight,
						ease: "power2.out",
						duration: 1
					});
					gsap.to('.sat-one', { width: satelliteWidthHeight.value.one, height: satelliteWidthHeight.value.one });
					gsap.to('.sat-two', { width: satelliteWidthHeight.value.two, height: satelliteWidthHeight.value.two });
                    arrowBounceTl.set('body', { overflowY: "scroll" }).to('.arrow', { y: 10 });
                }
            },
            ">+=0.25"
        );
        
        satelliteRotateTl.to('.satellite', {
            rotate: -5,
            ease: "none",
            duration: 1
        });

        let satellites = document.querySelectorAll('.satellite');
        satellites.forEach((satellite: any, index: number): void => {
                satellite.addEventListener('click', (): void => {
					if (index === 0) {
						gsap.to(satellite, {
							duration: 1,
							ease: "power1.inOut",
							rotation: 720,
							scale: 0,
							motionPath:{
								path: "#path",
								align: "#satelliteOne",
								alignOrigin: [0.5, 0.5],
								start: 1,
								end: 0,
								offsetX: -495,
								offsetY: 25
							}
						});
					}
					else {
						gsap.to(satellite, {
							duration: 1,
							ease: "power1.inOut",
							rotation: 720,
							scale: 0,
							motionPath:{
								path: "#path",
								align: "#satelliteTwo",
								alignOrigin: [0.5, 0.5]
							}
						});
					}
                });
            }
        );
    });
</script>

<style lang="scss" scoped>
	.svg-path {
		position: absolute;
		overflow: visible;
		height: 100%;
		/* Fix Safari rendering bug */
		transform: translateZ(0);
		opacity: 0;
        z-index: -1;
	}

    .home-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        min-width: 100vw;
		position: relative;

		.satellite {
			opacity: 0;
			position: absolute;
			z-index: 2;
		}

		.sat-one {
			right: 5%;
			top: 3%;
		}

		.sat-two {
			left: 12%;
			bottom: 12%;
		}
    }

    .grant-gonzalez {
        margin-left: 5rem;
        opacity: 1;
        color: white;
    }

    .arrow {
        opacity: 0;
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
        .grant-gonzalez {
            margin-left: 0;
        }

		.sat-one {
			top: 12% !important;
		}

		.sat-two {
			bottom: 20% !important;
		}
    }
</style>