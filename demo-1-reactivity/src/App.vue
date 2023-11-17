<script setup lang="ts">
import DemoReactivity from './components/DemoReactivity.vue';
import DemoNoReactivity from './components/DemoNoReactivity.vue';
import ReactiveUsage from './components/ReactiveUsage.vue';
import RefUsage from './components/RefUsage.vue';
import MouseDemo from './components/MouseDemo.vue';
</script>

<template>
    <DemoReactivity />
    <!-- Uncomment the next line to see what happens if we don't use reactivity vars -->
    <!-- <DemoNoReactivity /> -->
    <!-- <ReactiveUsage /> -->
    <!-- <RefUsage /> -->
    <!-- <MouseDemo /> -->
</template>

