import {ref, computed} from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', ()=>{
    const count = ref<number>(0)
    const lastChanged = ref<Date>(new Date())

    const increment = ()=>{
        count.value++
        lastChanged.value = new Date()
    }

    const decrement = ()=>{
        count.value--
        lastChanged.value = new Date()
    }

    const reset = ()=>{
        count.value = 0
        lastChanged.value = new Date()
    }

    return {
        count,
        lastChanged,
        increment,
        decrement,
        reset,
        squared: computed(()=> count.value * 2),
    }
})