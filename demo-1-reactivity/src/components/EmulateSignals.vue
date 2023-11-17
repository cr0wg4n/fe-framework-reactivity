<template>
    <div>
        {{ counter() }}
    </div>
    <br>
    <div>
        {{ count() }}
    </div>
    <button @click="updateValues">Update</button>
</template>

<script setup lang="ts">
import { createSignal, signal } from './utils'

const counter = signal(0)
counter.set(10)
counter.update(v => v + 1)
console.log(counter())

const [count, setCount] = createSignal(10)
setCount(20)
console.log(count())

const updateValues = () => {
  setCount(count() + 1)
  counter.update(v => v + 1)
}
</script>
