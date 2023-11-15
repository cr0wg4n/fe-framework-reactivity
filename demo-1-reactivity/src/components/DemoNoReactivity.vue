<script setup lang="ts">
let counter = 0

console.log('Inicializando', {
  counter
})

setInterval(()=>{
  counter++
  console.log(counter)
}, 1000)
</script>

<template>
  <div>
    counter: {{ counter }}
  </div>
</template>

