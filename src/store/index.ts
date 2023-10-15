import { defineStore } from 'pinia';

interface CounterState {
    count: number;
    lastChanged?: Date ;
}

export const useCounterStore = defineStore('counter', {
    state: () => (
        {
            count: 0,
            lastChanged: undefined 
        } as CounterState),

    getters: {
      doubleCount: (state) => state.count * 2,
    },
    actions: {
      increment() {
        this.count++
        this.lastChanged = new Date() 
      },
      decrement(){
        this.count--
        this.lastChanged = new Date()
      },
      reset(){
        this.count = 0
        this.lastChanged = new Date()
      }
    },
  })