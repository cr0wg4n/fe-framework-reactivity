<script setup lang="ts">
import { ref } from 'vue'
import DiceItem from './DiceItem.vue'
import { type DiceNumberType, DiceNumbers } from './types'

withDefaults(
  defineProps<{
    disabled: boolean
  }>(),
  { disabled: false }
)

const diceNumber = ref<DiceNumberType>('1')

const setRandomDiceNumber = () => {
  diceNumber.value = DiceNumbers[Math.floor(Math.random() * DiceNumbers.length)]
}
console.log('DiceBoard incializado')
</script>

<template>
  <div class="dice-board">
    <DiceItem :number="diceNumber" />
    <div class="dice-board__number">
      {{ diceNumber }}
    </div>
    <button class="dice-board__button" @click="setRandomDiceNumber" :disabled="disabled">
      Random Dice
    </button>
  </div>
</template>

<style scoped src="./DiceBoard.css" />
