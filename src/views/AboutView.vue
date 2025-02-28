<template>
    <div ref="aboutContainer" class="flex flex-col items-center justify-center min-h-dvh max-w-dvw md:ml-20 mt-20 py-[10px] px-10 gap-12">
		<!-- Bio -->
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
		<!-- Hobbies & Interests -->
		<div ref="hobbiesContainer" class="hobbies flex flex-col w-full lg:w-[70%] p-4 rounded-[10px]">
			<div class='grid grid-cols-[repeat(auto-fit,_minmax(100%,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(30%,_1fr))] text-start gap-4'>
				<h1 class='row-[1] col-span-full font-semibold text-3xl md:text-4xl text-center'>Hobbies & Interests</h1>
				<div class="flex flex-col relative gap-2 col-span-1 row-span-1">
					<h1 class="font-semibold text-lg md:text-xl text-center">Baseball</h1>
					<div class="flex h-(--max-about-img-container-height-sm) md:h-(--max-about-img-container-height-lg)">
						<Galleria
							:value="baseballImages"
							:showIndicators="false"
							:showThumbnails="false"
							:numVisible="1"
							circular
							autoPlay
							:transitionInterval="5000"
							containerClass="!rounded-lg"
						>
							<template #item="slotProps">
								<div class="flex flex-col items-center max-h-(--max-about-img-container-height-sm) md:max-h-(--max-about-img-container-height-lg)">
									<img class="object-contain" :src="slotProps.item.imgSrc" />
								</div>
							</template>
						</Galleria>
					</div>
					<p class="text-md">
						America's pastime! I have played baseball since I was 6 years old, but stopped after high school.
						Recently I got the opportunity to join the Nassau Yankees men's team in NYC, allowing me to play
						once again and keeping me active!
					</p>
				</div>
				<div class="flex flex-col relative gap-2 col-span-1 row-span-1">
					<h1 class="font-semibold text-lg md:text-xl text-center">Family & Friends</h1>
					<div class="flex h-(--max-about-img-container-height-sm) md:h-(--max-about-img-container-height-lg)">
						<Galleria
							:value="familyAndFriendsImages"
							:showIndicators="false"
							:showThumbnails="false"
							:numVisible="1"
							circular
							autoPlay
							:transitionInterval="5000"
							containerClass="!rounded-lg"
						>
							<template #item="slotProps">
								<div class="flex flex-col items-center justify-center max-h-(--max-about-img-container-height-sm) md:max-h-(--max-about-img-container-height-lg)">
									<img :class="slotProps.item.imgSrc.includes('G_L.jpg') ? 'object-cover' : 'object-contain'" :src="slotProps.item.imgSrc" />
								</div>
							</template>
						</Galleria>
					</div>
					<p class="text-md">
						The people around me are central to who I am as a person. Simply hanging out and making memories
						with the ones I love is my favorite thing to do!
					</p>
				</div>
				<div class="flex flex-col relative gap-2 col-span-1 row-span-1">
					<h1 class="font-semibold text-lg md:text-xl text-center">Exploring</h1>
					<div class="flex h-(--max-about-img-container-height-sm) md:h-(--max-about-img-container-height-lg)">
						<Galleria
							:value="exploringImages"
							:showIndicators="false"
							:showThumbnails="false"
							:numVisible="1"
							circular
							autoPlay
							:transitionInterval="5000"
							containerClass="!rounded-lg"
						>
							<template #item="slotProps">
								<div class="flex flex-col items-center justify-center max-h-(--max-about-img-container-height-sm) md:max-h-(--max-about-img-container-height-lg)">
									<img class="object-contain" :src="slotProps.item.imgSrc" />
								</div>
							</template>
						</Galleria>
					</div>
					<p class="text-md">
						One of my favorite things to experience in life is traveling and exploring new places! I've been
						to all corners of the United States, from the mountains in Washington and the deserts in Arizona,
						to the beaches in Florida and the skyscrapers in NYC!
					</p>
				</div>
			</div>
		</div>
    </div>
</template>

<script setup lang="ts">
    import gsap from 'gsap';
    import { onMounted, onUnmounted, ref, watch } from 'vue';
    import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { useWindowSize, useCssVar } from '@vueuse/core';
	import { Galleria } from "primevue";
	import { baseballList, familyFriendsList, exploringList } from "@/utility/images";
	console.log( { baseballList, familyFriendsList, exploringList })
	
	gsap.registerPlugin(ScrollTrigger);

	const { width, height } = useWindowSize();
	
	const baseballImages = ref<{ imgSrc: string; index: number; caption: string }[]>([]);
	const baseballImagesArray = ref<string[]>([]);
	
	const familyAndFriendsImages = ref<{ imgSrc: string; index: number; caption: string }[]>([]);
	const familyAndFriendsImagesArray = ref<string[]>([]);
	
	const exploringImages = ref<{ imgSrc: string; index: number; caption: string }[]>([]);
	const exploringImagesArray = ref<string[]>([]);
	
	const hobbiesContainer = ref();
    const aboutContainer = ref();
    let aboutCtx: any;
	
	const cssVarLg = useCssVar("--max-about-img-container-height-lg", document.documentElement);
	const cssVarSm = useCssVar("--max-about-img-container-height-sm", document.documentElement);
	
    
    onMounted((): void => {
		let isDev: boolean = window.location.href.includes("localhost");
		cssVarLg.value = `${((width.value * 0.7 * 0.3) - 12) * 0.74}px`;
		cssVarSm.value = `${((width.value * 0.7) - 6) * 0.74}px`;
		let tempBaseballArray = Object.keys(baseballList).map(file => file.replace('/public/', !isDev ? '/' : '/public/'));
		tempBaseballArray.forEach((imgSrc: string, index: number) => {
			baseballImages.value.push({
				imgSrc,
				index,
				caption: ""
			});
		});
		baseballImagesArray.value = Object.keys(baseballList);
		
		let tempFamilyFriendsArray = Object.keys(familyFriendsList).map(file => file.replace('/public/', !isDev ? '/' : '/public/'));
		tempFamilyFriendsArray.forEach((imgSrc: string, index: number) => {
			familyAndFriendsImages.value.push({
				imgSrc,
				index,
				caption: ""
			});
		});
		familyAndFriendsImagesArray.value = Object.keys(familyFriendsList);
		
		let tempExploringArray = Object.keys(exploringList).map(file => file.replace('/public/', !isDev ? '/' : '/public/'));
		tempExploringArray.forEach((imgSrc: string, index: number) => {
			exploringImages.value.push({
				imgSrc,
				index,
				caption: ""
			});
		});
		exploringImagesArray.value = Object.keys(exploringList);
		
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
			
			gsap.from('.hobbies', {
					scrollTrigger: {
						trigger: '.hobbies',
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
	
	watch(width, () => {
		cssVarLg.value = `${((width.value * 0.7 * 0.3) - 12) * 0.74}px`;
		cssVarSm.value = `${((width.value * 0.7) - 6) * 0.74}px`;
	});
</script>

<style lang="scss" scoped>
	.hobbies,
	.bio {
		background: linear-gradient(#212121, #212121) padding-box,
			linear-gradient(145deg, transparent 35%, #407E8A, #56A4B8) border-box;
	}
</style>