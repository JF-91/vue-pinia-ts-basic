<script setup lang="ts" >
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/store';


const counterOptions = useCounterStore();

const { count, lastChanged, doubleCount   } = storeToRefs(counterOptions);

</script>

<template >
    <div>
        <h1>Counter : {{ counterOptions.count }}</h1>
        <h3>Last changed : {{ counterOptions.lastChanged }}</h3>
        <h3>{{ doubleCount }}</h3>
        <button @click="counterOptions.increment()">+1</button>
        <button @click="counterOptions.decrement()">-1</button>
        <button @click="counterOptions.reset()">reset</button>
    </div>
</template>
<style scoped >
    
</style>