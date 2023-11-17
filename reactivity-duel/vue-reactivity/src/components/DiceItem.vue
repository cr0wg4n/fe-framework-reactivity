<script setup lang="ts">
import { computed, defineProps } from 'vue'
import type { DiceNumberType } from './types'

const props = defineProps<{
  number: DiceNumberType
}>()

const dots = computed(() => {
  switch (props.number) {
    case '1':
      return [false, false, false, false, true, false, false, false, false]
    case '2':
      return [false, false, true, false, false, false, true, false, false]
    case '3':
      return [false, false, true, false, true, false, true, false, false]
    case '4':
      return [true, false, true, false, false, false, true, false, true]
    case '5':
      return [true, false, true, false, true, false, true, false, true]
    case '6':
      return [true, false, true, true, false, true, true, false, true]
    default:
      return new Array(9).fill(false)
  }
})
console.log('DiceItem inicializado')
</script>

<template>
  <div class="dice">
    <div class="dice__container">
      <template v-for="(dot, index) in dots">
        <div
          v-if="dot"
          class="dice__dot"
          :class="dot && 'dice__dot-active'"
          :key="'dice-' + index"
        />
        <div v-else class="dice__dot" :key="'no-dice-' + index" />
      </template>
    </div>
  </div>
</template>

<style scoped src="./DiceItem.css" />
