<script setup lang="ts">
import { ref } from 'vue'

const counter = ref(0)
console.log('Inicializando', {
  counter: counter.value
})

setInterval(()=>{
  counter.value++
}, 1000)
</script>

<template>
  <div>
    counter: {{ counter }}
  </div>
</template>