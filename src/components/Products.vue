<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight mb-8 font-extrabold text-transparent bg-clip-text bg-floral-gradient-to-r from-floral-pink to-floral-green">
               Featured Products
            </h2>
            <div class="flex space-x-4">
                <div class="relative">
                    <select class="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500">
                        <option>All</option>
                        <option>Rose</option>
                        <option>Lily</option>
                        <option>Sunflower</option>
                        <option>Orchid</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <i class="fas fa-chevron-down text-xs"></i>
                    </div>
                </div>
                <button class="p-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300">
                    <i class="fas fa-filter"></i>
                </button>
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div v-for="item in displayedItems" :key="item" class="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div class="relative">
                    <img :src="item.image" alt="Floral dress" class="w-full h-80 object-cover">
                    <div class="absolute top-2 right-2">
                        <button class="p-2 rounded-full bg-white text-gray-700 hover:bg-pink-100 hover:text-pink-600 transition-colors duration-300">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 from-black to-transparent p-4">
                        <span class="text-xs font-semibold text-white">New Arrival</span>
                    </div>
                </div>
                <div class="p-4">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="text-xl font-bold text-floral-peach">
                                <a href="#">
                                    <span aria-hidden="true" class="absolute inset-0"></span>
                                    {{ item.title }}
                                </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">Floral</p>
                        </div>
                    </div>
                    <div class="mt-4 flex space-x-2">
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">S</span>
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">M</span>
                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-800">L</span>
                    </div>
                    <div class="mt-4">
                        <button class="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-md text-sm font-medium transition-colors duration-300">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-12 text-center">
            <button
                @click="showAll = true"
                v-if="!showAll"
                class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
                View All Products
                <i class="fas fa-arrow-right ml-2"></i>
            </button>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue"

const items = ref([])
const showAll = ref(false)

onMounted(async () => {
    const res = await fetch("/data/database.json")
    const data = await res.json()
    items.value = data?.products
})

const displayedItems = computed(() => {
    return showAll.value ? items.value : items.value.slice(0, 4)
})
</script>