<template>
    <div class="max-w-6xl mx-auto relative" ref="carouselContainer">
        <h2 class="text-3xl font-extrabold text-start ml-2 block text-transparent bg-clip-text bg-floral-gradient-to-r from-floral-pink to-floral-green mb-2 tracking-tight">
            Featured in
        </h2>
        <div class="overflow-hidden py-4">
        <div
            ref="track"
            class="flex transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${(index * 100) / itemsPerView}%)` }"
        >
            <div
            v-for="(item, idx) in items"
            :key="idx"
            class="min-w-full md:min-w-[33.33%] p-4"
            >
            <div
                class="group bg-white shadow-lg pb-8 text-center h-full border border-gray-100 cursor-pointer transition-all duration-300 hover:bg-floral-pink hover:scale-105 hover:shadow-2xl"
            >
                <div class="mb-4">
                    <img :src="item.image" alt="icon" class="w-full h-80 object-cover" />
                </div>
                <h3 class="text-2xl font-bold mb-3 text-gray-800 group-hover:text-white transition-colors">
                    {{ item.title }}
                </h3>
                <p class="text-gray-500 group-hover:text-blue-100 transition-colors">
                    {{ item.description }}
                </p>
            </div>
            </div>
        </div>
        </div>

        <button
        @click="prevSlide"
        class="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white p-3 rounded-full shadow-lg text-blue-900 hover:bg-blue-50 focus:outline-none z-10 transition"
        >
        <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        </button>
        <button
        @click="nextSlide"
        class="absolute top-1/2 right-0 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white p-3 rounded-full shadow-lg text-blue-900 hover:bg-blue-50 focus:outline-none z-10 transition"
        >
        <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        </button>

        <div class="flex justify-center mt-8 space-x-2">
        <button
            v-for="i in maxIndex + 1"
            :key="i"
            @click="goToSlide(i - 1)"
            :class="[
            'h-3 rounded-full transition-all duration-300',
            i - 1 === index ? 'bg-blue-900 w-8' : 'bg-gray-300 w-3'
            ]"
        ></button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const items = ref([])

onMounted(async () => {
  const res = await fetch('/data/database.json')
  const data = await res.json()
  items.value = data?.categories || []
})

const carouselContainer = ref(null)
const index = ref(0)
let itemsPerView = window.innerWidth >= 768 ? 3 : 1

// reactive maxIndex
const maxIndex = computed(() => {
  return Math.max(items.value.length - itemsPerView, 0)
})

// --- NAVIGATION ---

const goToSlide = (i) => {
  index.value = i
}

const nextSlide = () => {
  index.value = index.value < maxIndex.value ? index.value + 1 : 0
}

const prevSlide = () => {
  index.value = index.value > 0 ? index.value - 1 : maxIndex.value
}

// --- AUTOPLAY ---

let autoPlayInterval = null

const startTimer = () => {
  autoPlayInterval = setInterval(nextSlide, 4000)
}

const resetTimer = () => {
  clearInterval(autoPlayInterval)
  startTimer()
}

// --- RESPONSIVENESS ---

const updateItemsPerView = () => {
  itemsPerView = window.innerWidth >= 768 ? 3 : 1
}

// --- LIFECYCLE ---

onMounted(() => {
  startTimer()

  carouselContainer.value.addEventListener('mouseenter', () => clearInterval(autoPlayInterval))
  carouselContainer.value.addEventListener('mouseleave', startTimer)

  window.addEventListener('resize', updateItemsPerView)
})

onUnmounted(() => {
  clearInterval(autoPlayInterval)
  window.removeEventListener('resize', updateItemsPerView)
})
</script>