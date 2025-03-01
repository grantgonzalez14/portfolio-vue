<template>
	<div class="app-container">
		<Navbar id="navbar" v-if="!isLoading"></Navbar>
		<HomeView id="home" v-if="!isLoading"></HomeView>
		<AboutView id="about" v-if="!isLoading"></AboutView>
		<ExperienceView id="experience" v-if="!isLoading"></ExperienceView>
		<ProjectsView id="projects" v-if="!isLoading"></ProjectsView>
		<SkillsView id="skills" v-if="!isLoading"></SkillsView>
		<ContactView id="contact" v-if="!isLoading"></ContactView>
		<Loader v-if="isLoading" />
	</div>
	
</template>

<script setup lang="ts">
	import { ref, onMounted } from "vue";
	import gsap from "gsap";
	import HomeView from './views/HomeView.vue';
	import AboutView from './views/AboutView.vue';
	import ProjectsView from './views/ProjectsView.vue';
	import SkillsView from './views/SkillsView.vue';
	import ContactView from './views/ContactView.vue';
	import Navbar from './components/Navbar.vue';
	import ExperienceView from "@/views/ExperienceView.vue";
	import Loader from "./components/Loader.vue";
	import "/public/assets/main.css";
	
	const isLoading = ref<boolean>(true);
	onMounted(() => {
		setTimeout(() => {
			isLoading.value = false;
			gsap.set(".app-container", {
				backgroundColor: "transparent",
			});
		}, 2000);
	});
</script>

<style>
	* {
		font-family: "Quicksand", serif;
	}

	body {
		background: linear-gradient(to bottom, var(--bg-secondary), #a3dcff);
	}

	.app-container {
		background-color: var(--bg-secondary);
		background-image: url("/assets/images/AnimatedStarryNight.png");
		min-height: 100dvh;
		max-width: 100dvw;
	}
</style>