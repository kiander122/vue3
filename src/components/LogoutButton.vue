<template>
    <button 
        @click="logout" 
        type="button" 
        class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
    >
        <i class="fa-solid fa-power-off"></i>
    </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toast-notification'
import { defineEmits } from 'vue'
const emit = defineEmits(['logout'])

const router = useRouter()
const toast = useToast()

const isLoggedIn = ref(false)


// Check if passcode exists on mount
onMounted(() => {
    isLoggedIn.value = !!localStorage.getItem('passcode')
})

const logout = () => {
    localStorage.removeItem('passcode')
    isLoggedIn.value = false
    emit('logout')
    toast.success('Logged out successfully!')
    router.push({ name: 'Login' })
}

</script>