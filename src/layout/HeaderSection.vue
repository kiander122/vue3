<template>
    <header class="w-full py-1 bg-white shadow-sm sticky top-0 z-50">
        <nav class="fixed top-0 left-0 w-full py-5 px-6 md:px-12 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
            <div class="max-w-7xl mx-auto flex justify-between items-center">
                <div class="flex items-center">
                    <img src="/images/logo.png" alt="logo" class="w-auto h-12 object-contain" />
                    <!-- <span class="text-2xl font-serif font-bold text-gray-800">Floral</span>
                    <span class="text-2xl font-serif font-bold text-floral-pink animate-pulse-slow">.</span> -->
                </div>
                
                <div class="hidden md:flex space-x-8">
                    <router-link to="/" class="relative group text-gray-600" active-class="text-floral-pink font-bold transition-colors duration-300">
                        <span class="relative">
                            Home
                            <span class="absolute bottom-0 left-0 w-0 h-px bg-floral-pink group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </router-link>
                    <router-link to="/collections" class="relative group text-gray-600" active-class="text-floral-pink font-bold transition-colors duration-300">
                        <span class="relative">
                            Collections
                            <span class="absolute bottom-0 left-0 w-0 h-px bg-floral-green group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </router-link>
                    <router-link to="/about" class="relative group text-gray-600" active-class="text-floral-pink font-bold transition-colors duration-300">
                        <span class="relative">
                            About
                            <span class="absolute bottom-0 left-0 w-0 h-px bg-floral-peach group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </router-link>
                    <router-link to="/contact" class="relative group text-gray-600" active-class="text-floral-pink font-bold transition-colors duration-300">
                        <span class="relative">
                            Contact
                            <span class="absolute bottom-0 left-0 w-0 h-px bg-floral-lavender group-hover:w-full transition-all duration-300"></span>
                        </span>
                    </router-link>
                </div>
                
                <div class="flex items-center space-x-4">
                    <button class="hidden md:block px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <i class="fas fa-search"></i>
                    </button>
                    <router-link to="/shopping" class="px-6 py-2 bg-floral-gradient-to-r from-floral-pink to-floral-green text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center cursor-pointer">
                        <i class="fas fa-shopping-bag mr-2"></i> Shop
                    </router-link>
                    <!-- <button class="px-6 py-2 bg-floral-gradient-to-r from-floral-pink to-floral-green text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center cursor-pointer">
                        <i class="fas fa-shopping-bag mr-2"></i> Shop
                    </button> -->
                    <button class="md:hidden flex flex-col space-y-1.5">
                        <span class="w-6 h-0.5 bg-gray-800"></span>
                        <span class="w-6 h-0.5 bg-gray-800"></span>
                        <span class="w-6 h-0.5 bg-gray-800"></span>
                    </button>
                </div>
            </div>
        </nav>
    </header>
</template>
<script setup>
import { ref,onMounted,watch } from "vue";
import Desktop from "./Desktop.vue";
import Mobile from "./Mobile.vue";
import LogoutButton from '@/components/LogoutButton.vue'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { useRouter } from 'vue-router'

const isOpen = ref(false);
const items = ref([])
const router = useRouter()

const isLoggedIn = ref(!!localStorage.getItem('passcode'))

const LOGOUT_TIME = 10 * 60 * 1000;

const saveLoginTime = () => {
    const expiresAt = Date.now() + LOGOUT_TIME;
    localStorage.setItem('logoutAt', expiresAt);
};

const checkAutoLogout = () => {
    const logoutAt = localStorage.getItem('logoutAt');
    if (logoutAt && Date.now() > logoutAt) {
        Swal.fire({
        title: 'Session Expired',
        text: 'Your session has expired. Do you want to more session?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Connect',
        cancelButtonText:"Logout",
        allowOutsideClick: false,
        customClass: {
            confirmButton: 'px-8 py-3 mx-2 bg-floral-gradient-to-r from-floral-pink to-floral-green text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center',
            cancelButton: 'bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition'
        },
        allowEscapeKey: false,
        buttonsStyling: false
        }).then((result) => {
            if (result.isConfirmed) {
                saveLoginTime();
            }else{
                handleLogout();
            }
        });
    }
};

onMounted(() => {
    setInterval(checkAutoLogout, 9000); // check every second
});

// Watch localStorage changes
watch(
    () => localStorage.getItem('passcode'),
    (newVal) => {
        isLoggedIn.value = !!newVal
    }
)

// Handle logout event
const handleLogout = () => {
    localStorage.removeItem('passcode')
    localStorage.removeItem('logoutAt')
    isLoggedIn.value = false
    router.push({ name: 'Login' })
}
</script>