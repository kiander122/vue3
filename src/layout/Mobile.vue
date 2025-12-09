<template>
    <div>
        <button @click="isOpen = !isOpen" class="text-gray-600">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
        </button>
        <transition name="fade">
            <div 
                v-if="isOpen"
                class="absolute top-16 left-0 w-full bg-white shadow-lg py-4 flex flex-col space-y-4 px-6 md:hidden"
            >
                <router-link 
                    to="/" 
                    @click="isOpen = false" 
                    class="hover:text-indigo-600"
                    exact-active-class="text-indigo-600 font-bold"
                >
                    ទំព័រដើម
                </router-link>

                <router-link 
                    to="/stories" 
                    @click="isOpen = false" 
                    class="hover:text-indigo-600"
                    active-class="text-indigo-600 font-bold"
                >
                    រឿងនិទានខ្មែរ
                </router-link>

                <router-link 
                    to="/features"
                    @click="isOpen = false" 
                    class="hover:text-indigo-600"
                    active-class="text-indigo-600 font-bold"
                >
                    លក្ខណៈ
                </router-link>
                <router-link 
                    to="/teams"
                    @click="isOpen = false" 
                    class="hover:text-indigo-600"
                    active-class="text-indigo-600 font-bold"
                >
                    អំពីពួកយើង
                </router-link>

                <router-link 
                    to="/contact"
                    @click="isOpen = false" 
                    class="hover:text-indigo-600"
                    active-class="text-indigo-600 font-bold"
                >
                    ទំនាក់ទំនង
                </router-link>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.25s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>