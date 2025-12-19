<template>
    <header class="w-full py-1 bg-white shadow-sm sticky top-0 z-50">
        <nav class="fixed top-0 left-0 w-full py-5 px-6 md:px-12 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
            <div class="max-w-7xl mx-auto flex justify-between items-center">
                <div class="flex items-center">
                    <img src="/images/logo.png" alt="logo" class="w-auto h-12 object-contain" />
                    <!-- <span class="text-2xl font-serif font-bold text-gray-800">Floral</span>
                    <span class="text-2xl font-serif font-bold text-floral-pink animate-pulse-slow">.</span> -->
                </div>
                
                <div class="hidden md:flex space-x-8">
                    <router-link to="/" class="relative group text-gray-600 hover:text-gray-900 transition-colors duration-300">
                        <span class="relative">
                            Home
                            <span class="absolute bottom-0 left-0 w-0 h-px bg-floral-pink group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </router-link>
                    <router-link to="/collections" class="relative group text-gray-600 hover:text-gray-900 transition-colors duration-300">
                        <span class="relative">
                            Collections
                            <span class="absolute bottom-0 left-0 w-0 h-px bg-floral-green group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </router-link>
                    <router-link to="/about" class="relative group text-gray-600 hover:text-gray-900 transition-colors duration-300">
                        <span class="relative">
                            About
                            <span class="absolute bottom-0 left-0 w-0 h-px bg-floral-peach group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </router-link>
                    <router-link to="/contact" class="relative group text-gray-600 hover:text-gray-900 transition-colors duration-300">
                        <span class="relative">
                            Contact
                            <span class="absolute bottom-0 left-0 w-0 h-px bg-floral-lavender group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </router-link>
                </div>
                
                <div class="flex items-center space-x-4">
                    <button class="hidden md:block px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <i class="fas fa-search"></i>
                    </button>
                    <button class="px-4 py-2 bg-floral-pink text-white rounded-lg hover:bg-floral-pink/90 transition-all duration-300">
                        <i class="fas fa-shopping-bag mr-2"></i> Shop
                    </button>
                    <button class="md:hidden flex flex-col space-y-1.5">
                        <span class="w-6 h-0.5 bg-gray-800"></span>
                        <span class="w-6 h-0.5 bg-gray-800"></span>
                        <span class="w-6 h-0.5 bg-gray-800"></span>
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>
<script setup>
import { ref,onMounted } from "vue";
import Desktop from "./Desktop.vue";
import Mobile from "./Mobile.vue";

const isOpen = ref(false);
const items = ref([])
</script>