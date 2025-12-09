<template>
    <header class="w-full py-1 bg-white shadow-sm sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <router-link to="/" class="flex items-center">
                <img src="/images/logo.png" alt="logo" class="h-20 w-auto object-contain" />
            </router-link>
            <Desktop class="hidden md:flex" />
            <Mobile class="md:hidden" />
            <router-link to="/journey" class="hidden md:flex bg-indigo-600 text-white py-2 px-6 rounded-lg text-center">
                ដំណើរផ្សេងព្រេង
            </router-link>
        </div>
    </header>
</template>
<script setup>
import { ref,onMounted } from "vue";
import Desktop from "./Desktop.vue";
import Mobile from "./Mobile.vue";

const isOpen = ref(false);
const items = ref([])
</script>