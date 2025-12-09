<template>
    <div class="flex">
        <div class="flex justify-end mr-2">
            <template v-for="(avatar, index) in displayedAvatars" :key="index">
                <img
                class="border-2 border-white dark:border-gray-800 rounded-full h-10 w-10 -mr-2"
                :src="avatar"
                alt="avatar"
                />
            </template>
            <span
                v-if="extraCount > 0"
                class="flex items-center justify-center bg-white dark:bg-gray-800
                    text-sm text-gray-800 dark:text-white font-semibold
                    border-2 border-gray-200 dark:border-gray-700 rounded-full
                    h-10 w-10"
            >
                +{{ extraCount }}
            </span>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
    avatars: {
        type: Array,
        required: true
    },
    maxVisible: {
        type: Number,
        default: 6
    }
});

const displayedAvatars = computed(() => props.avatars.slice(0, props.maxVisible));
const extraCount = computed(() => props.avatars.length - props.maxVisible);
</script>
