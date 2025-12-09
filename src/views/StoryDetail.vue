<template>
    <section class="min-h-screen px-6 py-20 container mx-auto">
        <button 
            @click="$router.back()" 
            class="px-4 py-2 bg-indigo-600 text-white rounded mb-6"
        >
            ⬅ ត្រឡប់ក្រោយ
        </button>

        <div v-if="story" class="max-w-3xl mx-auto">
            <img :src="story.image" class="w-full rounded-lg mb-6" />

            <h1 class="text-3xl font-bold mb-4">{{ story.title }}</h1>

            <p class="text-gray-700 leading-relaxed whitespace-pre-line">
                {{ story.description }}
            </p>
        </div>

        <div v-else>
            <p class="text-gray-600 text-lg text-center">កំពុងដំណើរការ...</p>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const story = ref(null)

onMounted(async () => {
    const res = await fetch("/data/database.json")
    const data = await res.json()

    story.value = data.fairy_tale.find(item => item.id == route.params.id)
})
</script>