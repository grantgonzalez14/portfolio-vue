<template>
    <div ref="contactContainer" class="contact-container">
        <h1 class="contact-header">Get In Touch With Me</h1>
        <div class="contact-form-container">
            <form class="contact-form" action="https://formspree.io/f/xnqrjaoe" method="POST">
                <div class="contact-form-group">
                    <label for="Name">Name *</label>
                    <input type="text" id="name" name="name" required="true">
                </div>
                <div class="contact-form-group">
                    <label for="email">Email *</label>
                    <input type="text" id="email" name="email" required="true">
                </div>
                <div class="contact-form-group">
                    <label for="textarea">Message *</label>
                    <textarea name="textarea" id="textarea" rows="10" cols="50" required="true"></textarea>
                </div>
                <button class="contact-form-submit-btn" type="submit">Submit</button>
            </form>
        </div>

        <!-- Background Images -->
        <div class="bg-img-container">
            <img src="/public/assets/images/Globe3.png" alt="Earth" class="earth" :style="{left: width > 600 ? 3 + 'rem' : 0}">
            <img src="/public/assets/images/CloudTwo.png" alt="Cloud" v-for="i in 20" class="cloud">
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, onUnmounted, ref } from 'vue';
    import { useWindowSize } from '@vueuse/core';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
    import gsap from 'gsap';
    import "../../public/assets/main.css";

    gsap.registerPlugin(ScrollTrigger);

    const { width } = useWindowSize();

    const contactContainer = ref();
    let contactCtx: any;
    
    onMounted((): void => {
        let navbarWidth = document.getElementById('navbar')?.getBoundingClientRect().width;
        let earth = document.querySelector('.earth');

        contactCtx = gsap.context((self: any): void => {
            gsap.from('.contact-header', {
                    scrollTrigger: {
                        trigger: '.contact-header',
                        start: 'top bottom',
                        end: 'top 50%',
                        scrub: true
                    },
                    scale: 0,
                    opacity: 0
                }
            );

            gsap.from('.contact-form-container', {
                    scrollTrigger: {
                        trigger: '.contact-form-container',
                        start: 'top bottom',
                        end: 'top 50%',
                        scrub: true
                    },
                    scale: 0,
                    opacity: 0
                }
            );

            gsap.from(earth, {
                    scrollTrigger: {
                        trigger: earth,
                        start: 'top bottom',
                        end: 'top 50%',
                        scrub: true
                    },
                    y: 200
                }
            );

            earth?.addEventListener('click', (): void => {
                let earthTl = gsap.timeline();
                earthTl.fromTo(earth, {rotation: 0},{rotation: 360});
            });

            const clouds = self.selector('.cloud');
            clouds.forEach((cloud: any): void => {
                // Cloud timeline
                let cloudTl = gsap.timeline({
                    repeat: -1, 
                    ease: "none", 
                    repeatRefresh: true
                });

                gsap.from(cloud, {
                    scrollTrigger: {
                        trigger: cloud,
                        start: 'top bottom',
                        end: 'top 50%',
                        scrub: true
                    },
                    y: 200
                });

                // Set clouds to have random initial position, opacity, and scale values
                gsap.to(cloud, {
                    top: Math.random() * ( window.innerHeight * 0.75 ),
                    left: Math.random() * (window.innerWidth * 0.8),
                    opacity: Math.max(0.4, Math.random()),
                    scale: Math.max(0.3, Math.random()),
                    zIndex: ( Math.round( Math.random() * 10 ) ) % 2 == 0 ? 3 : 1 // Side note for yourself, you can do a lil calculs to figure out where the cloud is relative to the earth to make it clickable
                });

                // Repeated loop to move clouds left, and if they are off screen
                // move them to the opposite side of the screen to create an infinite
                // cloud migration effect
                cloudTl.to(cloud, {
                    ease: "none",
                    x: `-=${50}`,
                    duration: "random(1, 10, 1)",
                    onUpdate: (): void => {
                        if (cloud.getBoundingClientRect().x + cloud.getBoundingClientRect().width < navbarWidth!) {
                            gsap.to(cloud, {
                                x: window.innerWidth,
                                duration: 0
                            });
                        }
                    }
                });

                cloud.addEventListener('click', (): void => {
                    gsap.to(cloud, {
                        opacity: 0,
                        scale: 2
                    });
                });
            });
        }, contactContainer.value);
    });

    onUnmounted((): void => {
        contactCtx.revert();
    });
</script>

<style lang="scss" scoped>
    .contact-container {
        display: flex;
        flex-direction: column;
        position: relative;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        width: 100vw;
        overflow: hidden;
        padding-bottom: 5%;

        .bg-img-container {
            position: absolute;
            bottom: 0;
            overflow: hidden;
            height: 90vh;
			width: 100%;
            z-index: 1;
            padding-left: 5rem;

            .earth {
                position: absolute;
                top: 40vh;
                z-index: 2;
                width: 100%;
            }

            .cloud {
                position: absolute;
            }
        }

        .contact-header {
            color: white;
            margin-bottom: 1rem;
			font-family: "Mona Sans", sans-serif;
			font-weight: 300;
        }

        .contact-form-container {
            width: 55vw;
            background: linear-gradient(#212121, #212121) padding-box,
                linear-gradient(145deg, transparent 35%, #407E8A, #56A4B8) border-box;
            border: 2px solid transparent;
            padding: 32px 24px;
            font-size: 14px;
            color: white;
            display: flex;
            flex-direction: column;
            gap: 20px;
            box-sizing: border-box;
            border-radius: 16px;
            z-index: 10;

            .contact-form {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            .contact-form-group {
                display: flex;
                flex-direction: column;
                gap: 2px;

                label {
                    display: block;
                    margin-bottom: 5px;
                    color: #717171;
                    font-weight: 600;
                    font-size: 12px;
                }

                input {
                    width: calc(100% - 40px);
                    padding: 12px 16px;
                    border-radius: 8px;
                    color: #fff;
                    background-color: transparent;
                    border: 1px solid #414141;

                    &::placeholder {
                        opacity: 0.5;
                    }

                    &:focus {
                        outline: none;
                        border-color: #56A4B8;
                    }
                }

                textarea {
                    width: calc(100% - 40px);
                    padding: 12px 16px;
                    border-radius: 8px;
                    resize: none;
                    color: #fff;
                    height: 96px;
                    border: 1px solid #414141;
                    background-color: transparent;

                    &:focus {
                        outline: none;
                        border-color: #56A4B8;
                    }
                }

            }

            .contact-form-submit-btn {
                display: flex;
                align-items: flex-start;
                justify-content: center;
                align-self: center;
                color: #717171;
                font-weight: 600;
                width: 100%;
                background: #313131;
                border: 1px solid #414141;
                padding: 12px 16px;
                font-size: inherit;
                gap: 8px;
                margin-top: 8px;
                cursor: pointer;
                border-radius: 6px;
                transition: var(--transition-speed);

                &:hover {
                    background-color: #56A4B8;
                    border-color: #56A4B8;
                    color: #212121;
                }
            }

            button:active {
                scale: 0.95;
            }
        }
    }

    @media only screen and (max-width: 600px) {
        .contact-container {
            .contact-form-container {
                width: 80vw;
            }
        }
    }
</style>