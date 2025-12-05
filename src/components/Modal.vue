<template>
    <transition name="fade">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-start justify-start bg-gray-100 bg-opacity-25">
            <div class="bg-white rounded-lg shadow-lg w-full p-6 relative">
                <div class="w-full">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "Modal",
    props: {
        modelValue: {
            type: Boolean,
            default: false,
        },
    },
    emits: ["update:modelValue"],
    computed: {
        isOpen() {
            return this.modelValue;
        },
    },
    methods: {
        close() {
            this.$emit("update:modelValue", false);
        },
    },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>