<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">រឿងនិទានខ្មែរ មួយ ខ្លី សាមញ្ញ និងពេញនិយម</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">ខាងក្រោមជារោង រឿងនិទានខ្មែរ មួយ ខ្លី សាមញ្ញ និងពេញនិយម សម្រាប់អានសប្បាយៗ</p>
            </div>
            <div class="flex flex-wrap -m-4">
                <div v-for="item,index in items" :key="index" class="lg:w-1/3 sm:w-1/2 p-4">
                    <div class="flex relative h-65 cursor-pointer" @click="storyDetail(item)">
                        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" :src="item.image">
                        <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                            <h2 class="tracking-widest text-base title-font font-bold text-indigo-500 mb-1">រឿងព្រេងខ្មែរ៖</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ item.title }}</h1>
                            <p class="leading-relaxed"></p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const items = ref([])
const storyDetail = (item) => {
    router.push(`/story/${item.id}`)
}

onMounted(async () => {
    const res = await fetch("/data/database.json")
    const data = await res.json()
    items.value = data?.fairy_tale
})
</script>