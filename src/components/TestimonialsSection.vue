<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">មតិយោបល់/ការទស្សន៍ទាយ/ការពិពណ៌នាអនុស្សាវរីយ៍</h1>
            <div class="flex flex-wrap -m-4">
                <div v-for="item in items" :key="item" class="lg:w-1/3 lg:mb-0 mb-6 p-4">
                    <div class="h-full text-center">
                    <img :src="item.image" alt="testimonial" class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" />
                    <p class="leading-relaxed">{{ item.feedback }}</p>
                    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                    <h2 class="text-gray-900 font-extrabold title-font tracking-wider text-sm">{{ item.title }}</h2>
                    <p class="text-gray-500">{{ item.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted } from "vue"

const items = ref([])

onMounted(async () => {
    const res = await fetch("/data/database.json")
    const data = await res.json()
    items.value = data?.comments
})
</script>