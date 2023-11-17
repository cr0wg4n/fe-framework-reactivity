<script setup lang="ts">
  import { reactive, onRenderTracked, onRenderTriggered } from 'vue'
  // Inicialización de variable reactiva
  const user = reactive({
    name: 'Samuel Lopez',
    age: 24,
    email: 'samuL@demo.com'
  })
  // Para modificar un valor interno
  user.age = 23
  // Para acceder a un valor interno
  console.log(user.name)
  // No imprime el objecto, imprime un Proxy ¿?
  console.log(user) 

  onRenderTracked((event) => {
    console.log(event)
  })

  onRenderTriggered((event) => {
    console.log(event)
  })
</script>

<template>
  <div>
    {{ user.name }}
  </div>
</template>