<script setup lang="ts">
const props = defineProps<{
    title: string;
    description: string;
    to?: string;
}>();   
</script>
<template>
    <div class="flex flex-col p-6 justify-between gap-2 rounded-lg bg-accent">
        <div v-if="props.to" class="text-end">
            <u-button size="lg" class="rounded-lg" :to="props.to">Mehr erfahren</u-button>
        </div>
        <div>
            <header-2 class="">{{ props.title }}</header-2>
            <p class="text-s">{{ props.description }}</p>
        </div>
    </div>
</template>