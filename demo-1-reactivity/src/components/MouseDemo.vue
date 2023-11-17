<script setup lang="ts">
import { useMouse } from '../composables'

const { x, y } = useMouse()
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>