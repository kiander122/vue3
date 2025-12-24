<template>
    <div class="flex flex-col items-center justify-center h-screen space-y-5">
        <QuestionsAnswers
            v-if="!isPasscode"
            :items="questions"
            @submit="handleSubmit"
        />
        <div v-else-if="isPasscode">
            <h1 class="block text-transparent bg-clip-text bg-floral-gradient-to-r from-floral-pink to-floral-green text-3xl">Enter Passcode</h1>

            <div class="flex items-center gap-2 justify-center">
                <input
                    v-for="(digit, index) in otp"
                    :key="index"
                    type="text"
                    maxlength="1"
                    class="w-16 h-16 font-semibold outline-none text-xl text-center border rounded-md bg-gray-100 border-gray-300 focus:border-blue-500"
                    v-model="otp[index]"
                    @input="handleInput(index)"
                    @keydown="handleKeydown($event, index)"
                    ref="otpRefs"
                />
            </div>

            <div class="grid grid-cols-4 gap-2 mt-4">
                <button
                    v-for="num in 9"
                    :key="num"
                    class="w-16 h-16 px-4 py-2 bg-gray-300 rounded"
                    @click="pressNumber(num)"
                >
                    {{ num }}
                </button>
                <button class="w-16 h-16 px-4 py-2 bg-gray-300 rounded" @click="pressNumber(0)">0</button>
                <button class="w-16 h-16 px-4 py-2 bg-red-400 text-white rounded" @click="pressBackspace">
                    ←
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, nextTick, watch,onMounted,reactive,computed } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toast-notification'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import QuestionsAnswers from '@/components/QuestionsAnswers.vue'

const toast = useToast()

const router = useRouter()
const length = 4
const otp = ref(Array(length).fill(''))
const otpRefs = ref([])
const validCodes = ref([])
const isPasscode = ref(false)

const questions = reactive([
    {
        id:1,
        question: "Floral Elegance: What is your favorite flower?",
        answers: ["Roses", "Tulips", "Lilies", "Mixed Bouquet"],
        selected: null
    },
    {
        id:2,
        question: 'Who was the last person you gave flowers to and why did you give them flowers?',
        answers: [
            'A friend to celebrate their birthday',
            'Family to show appreciation',
            'Colleague for a work achievement',
            'Myself just because'
        ],
        selected: null
    }
])

const generatePasscode = (length = 4) => {
    let passcode = ''
    const digits = '0123456789'

    for (let i = 0; i < length; i++) {
        passcode += digits[Math.floor(Math.random() * digits.length)]
    }

    return Number(passcode)
}
isPasscode.value = !!localStorage.getItem('passcode_user')

const handleSubmit = (answers) => {
    if(answers.length>0){
        const passcode = generatePasscode(4)
        Swal.fire({
            title: passcode,
            text: 'This is a pass code!',
            icon: 'success',
            confirmButtonText: 'Next to Enter Passcode'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem('passcode_user',passcode)
                isPasscode.value = true
            }
        })
    }
}

const handleInput = (index) => {
    const value = otp.value[index]
    if (/^\d$/.test(value)) {
        if (index < otp.value.length - 1) {
        nextTick(() => otpRefs.value[index + 1].focus())
        }
    } else {
        otp.value[index] = ''
    }
}

const handleKeydown = (e, index) => {
    if (e.key === 'Backspace') {
        e.preventDefault()
        if (otp.value[index] === '' && index > 0) {
            otp.value[index - 1] = ''
            nextTick(() => otpRefs.value[index - 1].focus())
        } else {
            otp.value[index] = ''
        }
    }
}

const pressNumber = (num) => {
    const emptyIndex = otp.value.findIndex(d => d === '')
    if (emptyIndex !== -1) {
        otp.value[emptyIndex] = num.toString()
        nextTick(() => otpRefs.value[emptyIndex].focus())
    }
}

const pressBackspace = () => {
    const filledIndex = otp.value.map((d, i) => (d !== '' ? i : -1)).filter(i => i !== -1).pop()
    if (filledIndex !== undefined) {
        otp.value[filledIndex] = ''
        nextTick(() => otpRefs.value[filledIndex].focus())
    }
}

watch(
    otp,
    (newOtp) => {
        if (newOtp.every(d => d !== '')) {
            submitOtp()
        }
    },
    { deep: true }

)


const submitOtp = () => {
    const code = otp.value.join('')
    validCodes.value = localStorage.getItem('passcode_user')??null
    if (validCodes.value === code) {
        localStorage.removeItem('passcode_user')
        localStorage.setItem('passcode', code)
        router.push({ name: 'Home' })
    } else {
        toast.error('Invalid code!',{position: 'top',duration: 3000})
        otp.value = Array(length).fill('')
        nextTick(() => otpRefs.value[0].focus())
    }
}
</script>