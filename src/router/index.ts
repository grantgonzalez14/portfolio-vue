import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import SkillsView from '@/views/SkillsView.vue';
import ContactView from '@/views/ContactView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			name: 'home',
			component: HomeView
		},
		{
			path: '/about',
			name: 'about',
			component: AboutView
		},
		{
			path: '/projects',
			name: 'projects',
			component: ProjectsView
		},
		{
			path: '/skills',
			name: 'skills',
			component: SkillsView
		},
		{
			path: '/contact',
			name: 'contact',
			component: ContactView
		}
	],
	scrollBehavior(to, from, savedPosition) {
		if (to.hash) {
			return {
				el: to.hash,
				behavior: "smooth"
			}
		}
	}
});

export default router;