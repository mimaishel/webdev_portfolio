<template>
	<SplashView v-if="showingSplash"/>

  	<div v-show="!showingSplash" class="min-h-screen overscroll-contain bg-white dark:bg-slate-900 dark:text-slate-300 text-base md:text-xl">
		<Navbar :show-transition="showLanding" :dark-mode-active="darkModeActive" @toggle-dark="toggleDark"/>

		<div class="min-h-full mx-10">
			<div class="flex flex-col md:grid md:grid-cols-6 min-h-full">
				<div class="col-span-1 flex-initial relative mx-auto md:mx-0 order-2 md:order-none">
					<ul class="md:fixed md:bottom-0 mb-7 flex items-center space-x-8 md:flex-col md:space-y-4 md:space-x-0">
						<li v-show="githubLink" :class="['transition-all motion-reduce:transition-none duration-500', showLanding ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
							<a :href="githubLink" target="_blank">
								<font-awesome-icon icon="fa-brands fa-github" class="h-8 w-8 md:h-12 md:w-12 text-black transition ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 duration-300 dark:text-slate-300"></font-awesome-icon>
							</a>
						</li>
						<li v-show="linkedinLink" :class="['transition-all motion-reduce:transition-none duration-500 delay-[100ms]', showLanding ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
							<a :href="linkedinLink" target="_blank">
								<font-awesome-icon icon="fa-brands fa-linkedin" class="h-8 w-8 md:h-12 md:w-12 text-black transition ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 duration-300 dark:text-slate-300"></font-awesome-icon>
							</a>
						</li>
						<li v-show="mediumLink" :class="['transition-all motion-reduce:transition-none duration-500 delay-[150ms]', showLanding ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
							<a :href="mediumLink" target="_blank">
								<font-awesome-icon icon="fa-brands fa-medium" class="h-8 w-8 md:h-12 md:w-12 text-black transition ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 duration-300 dark:text-slate-300"></font-awesome-icon>
							</a>
						</li>
						<li v-show="stackoverflowLink" :class="['transition-all motion-reduce:transition-none duration-500 delay-[200ms]', showLanding ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
							<a :href="stackoverflowLink" target="_blank">
								<font-awesome-icon icon="fa-brands fa-stack-overflow" class="h-8 w-8 md:h-12 md:w-12 text-black transition ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 duration-300 dark:text-slate-300"></font-awesome-icon>
							</a>
						</li>
						<li v-show="xTwitterLink" :class="['transition-all motion-reduce:transition-none duration-500 delay-[200ms]', showLanding ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">
							<a :href="xTwitterLink" target="_blank">
								<font-awesome-icon icon="fa-brands fa-x-twitter" class="h-8 w-8 md:h-12 md:w-12 text-black transition ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 duration-300 dark:text-slate-300"></font-awesome-icon>
							</a>
						</li>
					</ul>
				</div>
				<div class="col-span-4 flex-1 flex-col order-1 md:order-none">
					<div class="container mx-auto max-w-full 2xl:max-w-6xl">
						<LandingView :content="portfolio.greeting" :show-transition="showLanding"/>

						<AboutView :content="portfolio.about" :transitions="portfolio.transitions" />

						<ExperienceView :content="portfolio.experiences" :transitions="portfolio.transitions" />

						<WorkView :content="portfolio.works" :transitions="portfolio.transitions" />

						<ContactView :content="portfolio.contact" :transitions="portfolio.transitions" />

						<footer class="hidden text-center md:block mb-5">
							<p>🚀 Designed & Created by <a href="https://github.com/mimaishel" class="hover:text-link-color" target="_blank">Maxim Shelepov</a></p>
							<a href="https://github.com/mimaishel/webdev_portfolio" class="hover:text-link-color" target="_blank">Code available on Github 👾</a>
						</footer>
					</div>
				</div>
				<div class="hidden col-span-1 md:flex flex-initial relative order-2 text-center md:order-none">
					<p :class="['fixed bottom-2 right-10 origin-top-right rotate-90 transition-all motion-reduce:transition-none duration-500', showLanding ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">📍 Based in {{ portfolio.greeting.basedLocation }}</p>
				</div>
				<footer class="block text-center text-sm md:hidden order-last mb-5">
					<p>🚀 Designed & Created by <a href="https://maximshelepov.com" class="hover:text-link-color" target="_blank">Maxim Shelepov</a></p>
					<a href="https://github.com/mimaishel/webdev_portfolio" class="hover:text-link-color" target="_blank">Code available on Github 👾</a>
				</footer>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import Navbar from '../components/Navbar.vue'
import LandingView from './LandingView.vue'
import AboutView from './AboutView.vue'
import ExperienceView from './ExperienceView.vue'
import WorkView from './WorkView.vue'
import ContactView from './ContactView.vue'
import SplashView from './SplashView.vue'

import portfolio from '../portfolio'

const router = useRouter()

const showingSplash = ref(portfolio.splashScreen)
const showLanding = ref(!(portfolio.transitions.active || portfolio.transitions.onlyLanding))
const darkModeActive = ref(false)

onMounted(() => {
	splashScreen()
	landingTransition()
	useDark()
})

// Social Media Links
const githubLink = portfolio.socialMediaLinks.github
const linkedinLink = portfolio.socialMediaLinks.linkedin
const mediumLink = portfolio.socialMediaLinks.medium
const stackoverflowLink = portfolio.socialMediaLinks.stackoverflow
const xTwitterLink = portfolio.socialMediaLinks.xtwitter;

const splashScreen = () => {
	if (portfolio.splashScreen) {
		setTimeout(() => {
			showingSplash.value = false
			router.push(window.location.hash)
		}, 2000)
	}
}

const landingTransition = () => {
	if (!showLanding.value && portfolio.splashScreen) {
		setTimeout(() => {
			showLanding.value = true
		}, 2100)
	} else if (!showLanding.value) {
		setTimeout(() => {
			showLanding.value = true
		}, 500)
	}
}

const useDark = () => {
	// credit: https://tailwindcss.com/docs/dark-mode#supporting-system-preference-and-manual-selection
	if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
		document.documentElement.classList.remove('bg-white')
		document.documentElement.classList.add('dark', 'bg-slate-900')
		darkModeActive.value = true
	} else {
		document.documentElement.classList.remove('dark', 'bg-slate-900')
		document.documentElement.classList.add('bg-white')
		darkModeActive.value = false
	}
}

const toggleDark = () => {
	if (darkModeActive.value) {
		localStorage.theme = 'light'
	} else {
		localStorage.theme = 'dark'
	}

	useDark()
}

</script>