<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import DiceBoard from './components/DiceBoard.vue'

const timer = ref(0)
const disabled = ref(false)
const interval = setInterval(() => {
  timer.value++
  if (timer.value % 3 === 0) {
    disabled.value = true
  } else {
    disabled.value = false
  }
}, 1000)

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="game-board">
    <DiceBoard :disabled="disabled" />
    <div class="game-board__timer">Timer: {{ timer }}</div>
  </div>
</template>

<style scoped>
.game-board {
  position: relative;
}

.game-board__timer {
  position: absolute;
  top: 10px;
  left: 15px;
  color: white;
  font-size: 14px;
}
</style>
