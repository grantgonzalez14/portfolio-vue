<template>
    <div ref="contactContainer" class="contact-container flex flex-col relative items-center justify-center min-h-dvh w-dvw overflow-hidden pb-[5%]">
        <h1 class="contact-header mb-4 lg:text-[24px] md:ml-20">Get In Touch With Me</h1>
        <div class="contact-form-container flex flex-col gap-[20px] w-[80dvw] lg:w-[55dvw] border-[2px] border-transparent py-[32px] px-[24px] md:ml-20 text-[14px] z-10 rounded-[16px]">
            <form class="flex flex-col gap-[20px]" action="https://formspree.io/f/xnqrjaoe" method="POST">
                <div class="contact-form-group flex flex-col gap-[2px]">
                    <label class="block mb-[5px] text-[#717171] font-semibold text-[12px]" for="Name">Name *</label>
                    <input class="w-full py-[12px] px-[16px] rounded-[8px] bg-transparent border-[1px] border-[#414141] focus:outline-none focus:border-[#56A4B8] placeholder:opacity-50" type="text" id="name" name="name" required="true">
                </div>
                <div class="contact-form-group flex flex-col gap-[2px]">
                    <label class="block mb-[5px] text-[#717171] font-semibold text-[12px]" for="email">Email *</label>
                    <input class="w-full py-[12px] px-[16px] rounded-[8px] bg-transparent border-[1px] border-[#414141] focus:outline-none focus:border-[#56A4B8] placeholder:opacity-50" type="text" id="email" name="email" required="true">
                </div>
                <div class="contact-form-group flex flex-col gap-[2px]">
                    <label class="block mb-[5px] text-[#717171] font-semibold text-[12px]" for="textarea">Message *</label>
                    <textarea class="w-full py-[12px] px-[16px] rounded-[8px] h-[96px] bg-transparent border-[1px] border-[#414141] resize-none" name="textarea" id="textarea" rows="10" cols="50" required="true"></textarea>
                </div>
                <button class="flex items-center justify-center self-center text-[#717171] font-semibold w-full bg-[#313131] border-[1px] border-[#414141] py-[12px] px-[16px] gap-2 mt-2 rounded-[6px] transition duration-(--transition-speed) hover:cursor-pointer hover:bg-[#56A4B8] hover:border-[#56A4B8] hover:text-[#212121] focus:!outline-none focus:!border-[#56A4B8] active:scale-[0.95]" type="submit">Submit</button>
            </form>
        </div>

        <!-- Background Images -->
        <div class="absolute bottom-0 overflow-hidden h-[90dvh] w-full z-1 pl-20">
            <img src="/assets/images/Globe3.png" alt="Earth" class="absolute top-[60dvh] lg:top-[40dvh] z-2 w-full" :style="{left: width > 600 ? 3 + 'rem' : 0}">
            <img src="/assets/images/CloudTwo.png" alt="Cloud" v-for="i in 20" class="cloud">
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
		
		.cloud {
			position: absolute;
		}

        .contact-header {
			font-family: "Mona Sans", sans-serif;
        }

        .contact-form-container {
            background: linear-gradient(#212121, #212121) padding-box,
                linear-gradient(145deg, transparent 35%, #407E8A, #56A4B8) border-box;
            box-sizing: border-box;
        }
    }
</style>