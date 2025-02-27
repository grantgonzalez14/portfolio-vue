<template>
	<div ref="experienceContainer" class="flex flex-col items-center min-h-dvh max-w-dvw md:ml-20 mt-20 py-[10px] px-10">
		<h1 class='lg:text-[24px] mb-4 section-header'>Education & Experience</h1>
		<ExperienceCard class="xp-card">
			<template v-slot:image>
				<img src="/src/assets/images/clemson_logo.png" alt="Grant Gonzalez Logo" />
			</template>
			<template v-slot:jobTitle>
				Student
			</template>
			<template v-slot:company>
				Clemson University
			</template>
			<template v-slot:dateStart>
				August 2019
			</template>
			<template v-slot:dateEnd>
				May 2023
			</template>
			<template v-slot:jobDescription>
				During my time at Clemson University I was a full time computer science student who was also a member
				of Theta Chi fraternity where I held the position of academic chair.
			</template>
		</ExperienceCard>
		<span class="z-[-1] opacity-[0] xp-line flex w-[2px] h-20 bg-(--text-primary) ml-[50%] lg:ml-[calc(15%+4.5rem)] self-start"></span>
		<ExperienceCard class="xp-card">
			<template v-slot:image>
				<img src="/src/assets/images/qualtrics_logo.jpeg" alt="Grant Gonzalez Logo" />
			</template>
			<template v-slot:jobTitle>
				Software Test Engineer Intern
			</template>
			<template v-slot:company>
				Qualtrics
			</template>
			<template v-slot:dateStart>
				May 2022
			</template>
			<template v-slot:dateEnd>
				August 2022
			</template>
			<template v-slot:jobDescription>
				<div class="flex flex-col gap-2">
					<p>
						As a software test engineering intern at Qualtrics I was given the task of designing and developing a
						centralized dashboard for tracking metrics and progressions related to various test plan. The
						dashboard included multiple widgets and metrics allowing the team to work more efficiently without
						having to track down each test plan individually.
					</p>
				</div>
			</template>
		</ExperienceCard>
		<span class="z-[-1] opacity-[0] xp-line flex w-[2px] h-20 bg-(--text-primary) ml-[50%] lg:ml-[calc(15%+4.5rem)] self-start"></span>
		<ExperienceCard class="xp-card">
			<template v-slot:image>
				<img src="/src/assets/images/eleos_logo.png" alt="Grant Gonzalez Logo" />
			</template>
			<template v-slot:jobTitle>
				QA Analyst
			</template>
			<template v-slot:company>
				Eleos Technologies
			</template>
			<template v-slot:dateStart>
				October 2021
			</template>
			<template v-slot:dateEnd>
				May 2023
			</template>
			<template v-slot:jobDescription>
				<div class="flex flex-col">
					<p>
						During my time at Clemson University I worked at Eleos Technologies where I was a QA analyst.
						I spent my time doing blackbox testing for various features, but for every release I participated
						in thorough regression testing to ensure that any new updates did not break any existing functionality.
					</p>
				</div>
			</template>
		</ExperienceCard>
		<span class="z-[-1] opacity-[0] xp-line flex w-[2px] h-20 bg-(--text-primary) ml-[50%] lg:ml-[calc(15%+4.5rem)] self-start"></span>
		<ExperienceCard class="xp-card">
			<template v-slot:image>
				<img src="/src/assets/images/db_services_logo.jpeg" alt="Grant Gonzalez Logo" />
			</template>
			<template v-slot:jobTitle>
				Application Developer
			</template>
			<template v-slot:company>
				DB Services
			</template>
			<template v-slot:dateStart>
				July 2023
			</template>
			<template v-slot:dateEnd>
				Current
			</template>
			<template v-slot:jobDescription>
				<div class="flex flex-col gap-2">
					<p>
						At DB Services, I am a full-stack Developer and software consultant. I primarily
						develop applications using FileMaker Pro, however, I also utilize Vue JS when the opportunity
						arises. I have worked on and completed various projects for a variety of clients including,
						but not limited to:
					</p>
					<ul class="flex flex-col pl-4 list-disc gap-2">
						<li>FileMaker Mobile Applications</li>
						<li>Payroll Management System</li>
						<li>
							Title Insurance Database and Management Software
							<ul class="pl-4 italic list-disc">
								<li>User Specific Dashboard(s)</li>
								<li>Nearby Property Locator</li>
								<li>Transaction Management</li>
								<li>Document Builder</li>
							</ul>
						</li>
						<li>
							Printing Service Database and Management Software
							<ul class="pl-4 italic list-disc">
								<li>Time Tracking</li>
								<li>Automatic Workflow Management</li>
								<li>Data Driven Dashboard(s)</li>
								<li>Mobile Application</li>
							</ul>
						</li>
						<li>
							Scheduling Calendar and Job Location Map:
							<ul class="pl-4 italic list-disc">
								<li>Automatic Technician Dispatching</li>
								<li>Unique map pin & calendar event indicators</li>
								<li>Send notifications directly from calendar to technicians working in the field</li>
							</ul>
						</li>
						<li>
							API Integrations:
							<ul class="pl-4 italic list-disc">
								<li>Amazon</li>
								<li>Backblaze</li>
								<li>Google Maps</li>
								<li>Microsoft Outlook</li>
								<li>Service Titan</li>
								<li>Shopify</li>
								<li>Stripe</li>
							</ul>
						</li>
					</ul>
				</div>
			</template>
		</ExperienceCard>
	</div>
	
</template>

<script setup lang="ts">
	import ExperienceCard from "@/components/ExperienceCard.vue";
	import gsap from 'gsap';
	import { onMounted, onUnmounted, ref } from 'vue';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { scrollToSection } from '@/utility/utilityFunctions';
	import { useWindowSize } from "@vueuse/core";
	
	gsap.registerPlugin(ScrollTrigger);
	
	const { width } = useWindowSize();
	const experienceContainer = ref<HTMLElement>();
	let experienceCtx: any;
	
	onMounted(() => {
		experienceCtx = gsap.context((self: any): void => {
			const experienceCards: HTMLElement[] = self.selector(".xp-card");
			const experienceLines: HTMLElement[] = self.selector(".xp-line");
			let xpTl = gsap.timeline();
			
			experienceCards.forEach((xpCard: HTMLElement, index: number): void => {
				gsap.from(xpCard, {
					scrollTrigger: {
						trigger: xpCard,
						start: "top 150%",
						end: "top 120%",
						scrub: true,
						onEnter: (self) => {
							if ( index > 0 ) {
								gsap.to(experienceLines[index - 1], {
										transformOrigin: "top",
										scaleY: 0,
										opacity: 0
									}
								);
							}
						},
						onLeave: (self) => {
							if ( index > 0 ) {
								gsap.to(experienceLines[index - 1],{
										transformOrigin: "top",
										scaleY: 1,
										opacity: 1
									}
								);
							}
						},
						onEnterBack: (self) => {
							if ( index > 0 ) {
								gsap.to(experienceLines[index - 1],{
										transformOrigin: "top",
										scaleY: 0,
										opacity: 0
									}
								);
							}
						},
						onLeaveBack: (self) => {
							if ( index > 0 ) {
								gsap.to(experienceLines[index - 1],{
										transformOrigin: "top",
										scaleY: 0,
										opacity: 0
									}
								);
							}
						},
					},
					y: 500
				});
			});
			
			
		}, experienceContainer.value);
	});
	
	onUnmounted((): void => {
		experienceCtx.revert();
	});
</script>

<style scoped lang="scss">
	.xp-line {
		opacity: 0;
	}
	
	.section-header {
		font-family: "Mona Sans", sans-serif;
	}
</style>