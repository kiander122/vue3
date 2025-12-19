<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8 font-extrabold text-transparent bg-clip-text bg-floral-gradient-to-r from-floral-pink to-floral-green">
            Floral Category
        </h2>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div v-for="item in randomItems" :key="item" class="group relative block bg-gray-100 rounded-lg overflow-hidden w-full">
                <div class="">
                    <img :src="item?.image" class="w-full h-80 object-cover">
                    <div class="absolute inset-0 from-gray-900 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-4">
                        <h3 class="text-xl font-semibold text-white">{{ item?.title }}</h3>
                        <p class="mt-1 text-sm text-gray-300">Shop Now</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"

const items = ref([])
const randomItems = ref([])
let interval = null

function pickRandom() {
    randomItems.value = items.value
        .filter(item => item.id >= 1 && item.id <= 50)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4)
}

onMounted(async () => {
    const res = await fetch("/data/database.json")
    const data = await res.json()

    items.value = data?.categories ?? []

    pickRandom()

    // auto change every 10 seconds
    interval = setInterval(() => {
        pickRandom()
    }, 10000)
})

onBeforeUnmount(() => {
    clearInterval(interval)
})
</script>