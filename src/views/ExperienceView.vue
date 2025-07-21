<template>
    <section class="min-h-screen w-full" ref="experienceSection" id="experience-section">
        <div class="relative flex py-5 items-center" :class="[visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm', 'transition-all motion-reduce:transition-none duration-500']">
            <h1 class="text-3xl font-bold pr-5">🛡️ Experience</h1>
            <div class="flex-grow border-t border-black dark:border-white border-1"></div>
        </div>
        <div :class="['flex flex-col space-y-4 mb-36 transition-all motion-reduce:transition-none duration-500 delay-300', visible ? 'translate-y-0 opacity-1 blur-0' : 'translate-y-4 opacity-0 blur-sm']">
            <ExperienceCard
                v-for="(experience, index) in content"
                :key="index" :experience="experience"
            />
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue'
import ExperienceCard from '../components/ExperienceCard.vue'
import { onIntersect } from '../composables/onIntersect';

const props = defineProps({
    content: Object,
    transitions: Object
})

const experienceSection = ref({})
const visible = props.transitions.active && window.matchMedia('(prefers-reduced-motion: no-preference)').matches ? onIntersect(experienceSection, !!props.transitions.showOnce, { threshold: props.transitions.thresholdOption }) : true

</script>