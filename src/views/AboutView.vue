<template>
    <div ref="aboutContainer" class="flex flex-col items-center justify-center min-h-dvh max-w-dvw md:ml-20 mt-20 py-[10px] px-10">
        <div class='bio flex flex-col w-full lg:w-[70%] gap-4 p-4 rounded-[10px] text-start items-center'>
            <h1 class='gap-1 font-semibold text-3xl md:text-4xl text-center'>Grant Gonzalez</h1>
			<h2 class="gap-1 text-xl md:text-2xl -mt-3 text-center">Software Developer</h2>
            <p class='z-2 md:font-xl'>
				Hey there, I’m Grant! Thanks for stopping by my site. I’m a developer and consultant at
				<a href='https://dbservices.com/about/people/grant-gonzalez' target='__blank' class='underline underline-offset-[0.1em] transition duration-250 hover:text-[#56A4B8] hover:cursor-pointer'>DB Services</a>,
				where I get to dive into full-stack development, working with tools like FileMaker, Vue.js, and Claris Server
				to craft solutions that are as effective as they are easy to use.
            </p>
			<p class="z-2 md:font-xl">
				For me, great development is all about the experience—it’s not just about making things work but making them feel
				right. That means understanding the blend of design, user experience, business needs, and technical details, and
				collaborating closely with clients and teammates to bring their ideas to life. I’m always exploring new trends and
				sharpening my skills to keep things fresh and impactful. Let’s connect if anything here sparks an idea! Thanks
				for visiting, I hope you enjoy!
			</p>
			<p class='z-2 md:font-xl'>
				(P.S. Click on the icons spread throughout and watch what they do!)
			</p>
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
    
    onMounted((): void => {
        aboutCtx = gsap.context((): void => {
            gsap.from('.bio', {
                    scrollTrigger: {
                        trigger: '.bio',
                        start: 'top 100%',
                        end: 'top 80%',
                        scrub: true
                    },
                    opacity: 0,
                    y: 300
                }
            );
            
        }, aboutContainer.value);
    });

    onUnmounted((): void => {
        aboutCtx.revert();
    });
</script>

<style lang="scss" scoped>
	.bio {
		background: linear-gradient(#212121, #212121) padding-box,
		linear-gradient(145deg, transparent 35%, #407E8A, #56A4B8) border-box;
	}
</style>