<template>
	<div class="app-container">
		<Navbar id="navbar"></Navbar>
		<HomeView id="home"></HomeView>
		<AboutView id="about"></AboutView>
		<ProjectsView id="projects"></ProjectsView>
		<SkillsView id="skills"></SkillsView>
		<ContactView id="contact"></ContactView>
	</div>
	
</template>

<script setup lang="ts">
	import HomeView from './views/HomeView.vue';
	import AboutView from './views/AboutView.vue';
	import ProjectsView from './views/ProjectsView.vue';
	import SkillsView from './views/SkillsView.vue';
	import ContactView from './views/ContactView.vue';
	import Navbar from './components/Navbar.vue';
</script>

<style>
	* {
		margin: 0;
		font-family: "Quicksand", serif;
	}

	body {
		background: linear-gradient(to bottom, #000000, #a3dcff);
	}

	.app-container {
		background-image: url('images/AnimatedStarryNight.png');
		overflow-x: hidden
	}
</style>