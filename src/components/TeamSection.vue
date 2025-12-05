<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">ក្រុមរបស់យើង</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">យើងជាក្រុមដែលមានចំណង់ចំណូលចិត្តខ្ពស់ រួមមានអ្នកបង្កើត អ្នកដោះស្រាយបញ្ហា និងអ្នកដេញតាមក្តីស្រមៃ។ សមាជិកម្នាក់ៗនាំមកនូវជំនាញពិសេសៗរៀងៗខ្លួន ចាប់ពីការរចនា និងការអភិវឌ្ឍន៍ រហូតដល់ការគិតជាយុទ្ធសាស្ត្រ និងការទំនាក់ទំនង។ យើងរួមគ្នាប្រែក្លាយគំនិតទៅជាការពិត គាំទ្រគ្នាទៅវិញទៅមកដោយថាមពលវិជ្ជមាន និងខិតខំធ្វើឱ្យគម្រោងនីមួយៗក្លាយជាដំណើរដ៏គួរឱ្យរំភើប។</p>
            </div>
            <div class="flex flex-wrap -m-2">
                <div v-for="item in items" :key="item" class="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <img alt="team" class="w-20 h-20 bg-gray-100 object-cover object-center shrink-0 rounded-full mr-4" :src="item.image">
                    <div class="grow">
                        <h2 class="text-gray-900 title-font font-medium">{{ item.name }}</h2>
                        <p class="text-gray-500">{{ item.position }}</p>
                    </div>
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
    items.value = data?.our_team
})
</script>