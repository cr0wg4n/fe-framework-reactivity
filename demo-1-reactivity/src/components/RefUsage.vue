<script setup lang="ts">
  import { ref } from 'vue'

  // Inicialización de variable reactiva
  const counter = ref(0)
  // Para modificar
  counter.value = 20
  // Para acceder (imprime 10)
  console.log(counter.value) 
</script>

<template>
  <div>
    {{ counter }}
  </div>
</template>