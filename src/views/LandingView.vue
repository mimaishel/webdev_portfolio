<template>
    <section class="min-h-[calc(100vh*0.80)] w-full flex justify-center mb-52" id="landing-page">
        <div class="flex items-center space-x-0 space-y-7 md:space-y-0 md:space-x-7 flex-col md:flex-row m-auto">
            <img
                :class="['w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full shadow-md transition-all motion-reduce:transition-none duration-500 delay-[400ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']"
                :src="getImageUrl(content.portraitLink)"
            />
            <div class="flex flex-col space-y-2">
                <p :class="['text-lg lg:text-xl transition-all motion-reduce:transition-none duration-500 delay-[500ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">{{ content.intro }}</p>
                <h1 :class="['text-2xl lg:text-4xl font-bold transition-all motion-reduce:transition-none duration-500 delay-[550ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">{{ content.name }}</h1>
                <p :class="['text-sm lg:text-base text-slate-500 dark:text-slate-300 transition-all motion-reduce:transition-none duration-500 delay-[600ms]', showTransition ? 'translate-y-0 opacity-1' : '-translate-y-4 opacity-0']">{{ content.message }}</p>
                <p>Люблю тебя солнышко моё 💛.</p>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';

const props = defineProps({
    content: Object,
    showTransition: Boolean
})

// Static Images
const showIntro = ref(false)

let getImageUrl = (path) => {
  return new URL(`../assets/${path}`, import.meta.url).href
}
</script>