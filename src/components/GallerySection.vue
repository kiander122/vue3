<template>
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">រឿងនិទានខ្មែរ មួយ ខ្លី សាមញ្ញ និងពេញនិយម</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">ខាងក្រោមជារោង រឿងនិទានខ្មែរ មួយ ខ្លី សាមញ្ញ និងពេញនិយម សម្រាប់អានសប្បាយៗ</p>
            </div>
            <div class="flex flex-wrap -m-4">
                <div v-for="item,index in items" :key="index" class="lg:w-1/3 sm:w-1/2 p-4">
                    <div @click="openModal(item)" class="flex relative h-65 cursor-pointer">
                        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" :src="item.image">
                        <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                            <h2 class="tracking-widest text-base title-font font-bold text-indigo-500 mb-1">រឿងព្រេងខ្មែរ៖</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">{{ item.title }}</h1>
                            <p class="leading-relaxed"></p>
                        </div>
                    </div>
                </div>
                <Modal v-model="showModal">
                    <section class="text-gray-600">
                        <div class="container px-5 py-24 mx-auto flex flex-wrap">
                            <div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg">
                                <img alt="feature" class="object-cover object-center h-full w-full" :src="detail.image">
                            </div>
                            <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                                <div class="flex flex-col mb-10 lg:items-start items-center">
                                    <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                        </svg>
                                    </div>
                                    <div class="grow">
                                        <h2 class="text-gray-900 text-xl title-font font-bold mb-3">{{ detail.title }}</h2>
                                        <p class="leading-relaxed text-base">
                                            {{ detail.description }}
                                        </p>
                                    </div>
                                </div>
                                <button @click="closeModal" class="px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-700">
                                    Close
                                </button>
                            </div>
                        </div>
                    </section>
                </Modal>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref, onMounted } from "vue"
import Modal from "./Modal.vue"

const items = ref([])
const showModal = ref(false)
const detail = ref("")

const openModal = (item) => {
    detail.value = item
    showModal.value = true
}

const closeModal = () => {
    showModal.value = false
}

onMounted(async () => {
    const res = await fetch("/data/database.json")
    const data = await res.json()
    items.value = data?.fairy_tale
})
</script>