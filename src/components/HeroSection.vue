<template>
    <section class="min-h-screen pt-4 pb-16 bg-white relative overflow-hidden">
        <div class="absolute inset-0 bg-blue-50/50 -m-10 rounded-3xl" style="clip-path: inset(40px round 2rem);"></div>
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <header class="flex justify-between items-center py-4 mb-16">
                <div class="text-xl font-bold text-gray-900">
                    <img src="/images/logo.png" alt="logo" class="w-auto h-28 object-contain" />
                </div>
                <nav class="hidden md:flex space-x-8 text-gray-600 font-medium">
                    <a href="#" class="hover:text-indigo-600">About</a>
                    <a href="#" class="hover:text-indigo-600">Service</a>
                    <a href="#" class="hover:text-indigo-600">Feature</a>
                    <a href="#" class="hover:text-indigo-600">Contact</a>
                </nav>
                
                <a href="#" class="hidden md:block purple-gradient bg-indigo-600 text-white py-2 px-6 rounded-lg font-medium shadow-md hover:shadow-lg transition duration-300">
                    Sign up
                </a>

                <button class="md:hidden text-gray-600">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </header>
            
            <div class="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
                <div class="pt-8 lg:pt-0">
                    <h1 class="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
                        Let's Work Together to Create Wonders with Us
                    </h1>
                    
                    <p class="text-lg text-gray-600 mb-10 max-w-md">
                        A visionary creative, crafting captivating wonders through art and design. Adept at turning imagination into extraordinary reality.
                    </p>

                    <div class="flex space-x-4 mb-16 md:mb-24">
                        <a href="#" class="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-8 rounded-xl font-semibold transition duration-300">
                            Let's Talk
                        </a>
                        <a href="#" class="border border-gray-300 text-gray-800 hover:bg-gray-50 py-3 px-8 rounded-xl font-semibold transition duration-300">
                            Start Project
                        </a>
                    </div>
                </div>
                <div class="relative mt-12 lg:mt-0 flex justify-center lg:justify-end">
                    <img 
                        src="/images/Feature/hero_one.avif" 
                        alt="Man in blazer adjusting glasses" 
                        class="w-full max-w-lg lg:max-w-none object-cover rounded-xl"
                    >
                    <div class="absolute top-1/4 right-0 transform translate-x-1/2 hidden sm:block">
                        <div class="p-2 bg-white rounded-full shadow-lg text-sm font-medium text-gray-700 border border-gray-100">Illustration</div>
                    </div>
                    
                    <div class="absolute bottom-1/4 right-1/4 transform translate-x-1/2 hidden sm:block">
                        <div class="p-2 bg-white rounded-full shadow-lg text-sm font-medium text-gray-700 border border-gray-100">Graphic Design</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>