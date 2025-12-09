<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                <div class="w-full sm:p-4 px-4 mb-6">
                    <h1 class="title-font font-medium text-xl mb-2 text-gray-900">គន្លឹះបង្រៀន៖</h1>
                    <div class="leading-relaxed">ការអស់សំណើច និងអួតអែកមិននាំឱ្យសម្រេចបានជ័យជម្នះ។ ការខិតខំ អត់ធ្មត់ និងយកចិត្តទុកដាក់ ទើបនាំឱ្យទទួលបានជោគជ័យ។</div>
                </div>
                <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 class="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                    <p class="leading-relaxed">អ្នកមើល</p>
                </div>
                <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 class="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                    <p class="leading-relaxed">មើលអត្ថបទ</p>
                </div>
                <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 class="title-font font-medium text-3xl text-gray-900">35</h2>
                    <p class="leading-relaxed">ការទាញយក</p>
                </div>
                <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
                    <p class="leading-relaxed">អត្ថបទ</p>
                </div>
                <AvatarGroup :avatars="avatarList" :maxVisible="6" />
            </div>
            <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                <div class="h-screen w-full flex items-center justify-center overflow-hidden">
                    <div class="relative lg:w-[290px] lg:h-[250px] md:w-[220px] md:h-[220px] sm:w-[180px] sm:h-[180px] w-[100px] h-[100px] transform-3d animate-[rotate_30s_linear_infinite]">
                        <span v-for="item in items" :key="item" :style="{'--i': item.id}" class="span-style">
                            <img :src="item.image" :alt="item.id" class="img-style"/>
                        </span>
                    </div>            
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted } from "vue"
import AvatarGroup from "@/components/AvatarGroup.vue";

const items = ref([])
const avatarList = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/31.jpg",
    "https://randomuser.me/api/portraits/men/33.jpg",
    "https://randomuser.me/api/portraits/women/32.jpg",
    "https://randomuser.me/api/portraits/men/44.jpg",
    "https://randomuser.me/api/portraits/women/42.jpg",
    "https://randomuser.me/api/portraits/men/45.jpg",
    "https://randomuser.me/api/portraits/women/46.jpg",
];

onMounted(async () => {
    const res = await fetch("/data/database.json")
    const data = await res.json()
    items.value = data?.statistic
})
</script>