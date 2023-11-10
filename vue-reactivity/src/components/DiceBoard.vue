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

<style scoped>
.dice-board {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  padding: 30px;
  background: rgb(65, 35, 35);
  border-radius: 10px;
}

.dice-board__number {
  margin: auto;
  color: white;
  font-size: 24px;
}

.dice-board__button:hover {
  cursor: pointer;
}
</style>
