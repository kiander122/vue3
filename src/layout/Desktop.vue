<template>
   <nav class="flex space-x-8 text-gray-700 font-medium">
        <router-link to="/" class="hover:text-indigo-600" exact-active-class="text-indigo-600 font-bold">
            ទំព័រដើម
        </router-link>

        <router-link to="/stories" class="hover:text-indigo-600" active-class="text-indigo-600 font-bold">
            រឿងនិទានខ្មែរ
        </router-link>

        <router-link to="/features" class="hover:text-indigo-600" active-class="text-indigo-600 font-bold">
            លក្ខណៈ
        </router-link>

        <router-link to="/teams" class="hover:text-indigo-600" active-class="text-indigo-600 font-bold">
            អំពីពួកយើង
        </router-link>

        <router-link 
            to="/contact"
            class="hover:text-indigo-600"
            active-class="text-indigo-600 font-bold"
        >
            ទំនាក់ទំនង
        </router-link>
    </nav>
</template>
<script setup>
import { ref } from "vue";
</script>