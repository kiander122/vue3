<template>
    <div class="text-gray-800 overflow-x-hidden">
        <div class="fixed inset-0 -z-10 overflow-hidden opacity-20">
            <div class="absolute w-64 h-64 rounded-full bg-floral-pink top-1/4 -left-16 animate-float"></div>
            <div class="absolute w-48 h-48 rounded-full bg-floral-green bottom-1/4 -right-12 animate-float delay-200"></div>
            <div class="absolute w-32 h-32 rounded-full bg-floral-peach top-1/3 right-1/4 animate-float delay-300"></div>
            <div class="absolute w-40 h-40 rounded-full bg-floral-lavender bottom-1/3 left-1/4 animate-float delay-400"></div>
        </div>

        <section class="min-h-screen pt-24 pb-12 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto">
            <div class="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12 animate-slide-up">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 text-gray-800">
                    <span class="block">Nature's</span>
                    <span class="block text-transparent bg-clip-text bg-floral-gradient-to-r from-floral-pink to-floral-green">Floral Elegance</span>
                    <span class="block">In Every Petal</span>
                </h1>
                <p class="text-lg text-gray-600 mb-8 max-w-lg">
                    Discover the perfect harmony of nature and design with our exquisite floral arrangements. Each bouquet tells a unique story of beauty and grace.
                </p>
                <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button class="px-8 py-3 bg-floral-gradient-to-r from-floral-pink to-floral-green text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center">
                        Explore Collections
                        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </button>
                    <button class="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center justify-center">
                        <i class="fas fa-play mr-2 text-floral-pink"></i>
                        Our Story
                    </button>
                </div>
                
                <div class="mt-12 flex items-center space-x-8">
                    <div class="flex flex-col">
                        <span class="text-3xl font-bold text-floral-pink">250+</span>
                        <span class="text-gray-600">Floral Varieties</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-3xl font-bold text-floral-green">15</span>
                        <span class="text-gray-600">Years Experience</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-3xl font-bold text-floral-peach">5K+</span>
                        <span class="text-gray-600">Happy Clients</span>
                    </div>
                </div>
            </div>
            
            <div class="lg:w-1/2 relative animate-slide-up delay-200">
                <div class="relative rounded-2xl overflow-hidden shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                    <img class="w-full h-auto object-cover" src="/images/Categories/4.jpg" alt="Colorful bouquet of flowers">
                    <div class="absolute inset-0 bg-floral-gradient-to-t from-black/20 to-transparent opacity-25"></div>
                </div>
                
                <div class="absolute -top-6 -left-6 bg-white p-3 rounded-lg shadow-md w-32 animate-slide-up delay-300">
                    <div class="w-6 h-6 rounded-full bg-floral-pink/20 text-floral-pink flex items-center justify-center mb-1">
                        <i class="fas fa-leaf text-xs"></i>
                    </div>
                    <h4 class="font-bold text-gray-800 text-sm">Fresh Daily</h4>
                    <p class="text-xs text-gray-600">Locally sourced</p>
                </div>
                
                <div class="absolute -bottom-6 -right-6 bg-white p-3 rounded-lg shadow-md w-32 animate-slide-up delay-400">
                    <div class="w-6 h-6 rounded-full bg-floral-green/20 text-floral-green flex items-center justify-center mb-1">
                        <i class="fas fa-truck text-xs"></i>
                    </div>
                    <h4 class="font-bold text-gray-800 text-sm">Free Delivery</h4>
                    <p class="text-xs text-gray-600">On all orders</p>
                </div>
            </div>
        </section>

        <Carousel />

        <Categories />

        <Products />
        
    </div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue'
import Carousel from '@/components/Carousel.vue'
import Categories from '@/components/Categories.vue'
import Products from '@/components/Products.vue'

onMounted(() => {
    // Navbar scroll effect
    const onScroll = () => {
        const navbar = document.querySelector('nav')
        if (window.scrollY > 50) {
        navbar.classList.add('shadow-sm')
        navbar.classList.remove('bg-white/90')
        navbar.classList.add('bg-white/95')
        } else {
        navbar.classList.remove('shadow-sm')
        navbar.classList.add('bg-white/90')
        navbar.classList.remove('bg-white/95')
        }
    }

    window.addEventListener('scroll', onScroll)

    // Animation delay
    const elements = document.querySelectorAll('.animate-slide-up')
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 100}ms`
    })

    // Cleanup event when component is destroyed
    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll)
    })
})
</script>