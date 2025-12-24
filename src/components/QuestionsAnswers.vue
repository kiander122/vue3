<template>
    <div class="w-full md:w-2/3 mx-auto p-5 bg-white rounded-lg shadow">
        <h2 class="font-bold text-xl mb-6">Questions and Answers</h2>

        <div v-for="(item, qIndex) in items" :key="qIndex" class="mb-10">
        <!-- Question -->
        <div class="flex items-start mb-4">
            <span class="inline-flex justify-center items-center w-6 h-6 rounded bg-green-500 text-white text-sm font-medium">Q</span>
            <p class="ml-4 md:ml-6 font-semibold">{{ item.question }}</p>
        </div>

        <!-- Answers -->
        <div class="ml-12 space-y-2">
            <label
            v-for="(answer, aIndex) in item.answers"
            :key="aIndex"
            class="flex items-center space-x-3 cursor-pointer"
            >
            <input
                type="radio"
                :name="'question-' + qIndex"
                :value="getLetter(aIndex)"
                v-model="item.selected"
                class="w-4 h-4"
            />
            <span class="font-semibold">{{ getLetter(aIndex) }}.</span>
            <span class="text-gray-800">{{ answer }}</span>
            </label>
        </div>

        <!-- Selected answer preview -->
        <div v-if="item.selected" class="ml-12 mt-2 text-sm text-gray-600">
            Selected: {{ item.selected }}
        </div>
        </div>

        <!-- Submit Button -->
        <button
        @click="submitAnswers"
        class="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
        Submit Answers
        </button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
    items: {
        type: Array,
        required: true
    }
})  

const getLetter = (index) => String.fromCharCode(65 + index)

const emit = defineEmits(['submit'])
const submitAnswers = () => {
    const answers = props.items
        .map(item => {
            if (!item.selected) return null; // skip if no selection

            const selectedIndex = item.selected.charCodeAt(0) - 65; // 'A' → 0, 'B' → 1
            return {
            id: item.id,
            key: item.selected,                        // Letter: A, B, C
            answer: item.answers[selectedIndex] || ''  // Answer text
            }
        })
        .filter(ans => ans !== null);

    emit('submit', answers)
}

</script>