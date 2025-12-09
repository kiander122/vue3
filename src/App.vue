<script setup>
    import HeaderSection from "./layout/HeaderSection.vue";
    import FooterSection from "@/components/FooterSection.vue" 
</script>

<template>
    <HeaderSection />
    <main class="flex-1">
        <router-view />
    </main>
    <FooterSection />
</template>

<style scoped></style>
