<script lang="ts" setup>
const props = defineProps<{
    icon?: string;
    title: string;
    description?: string;
}>();
</script>
<template>
    <div class="">
        <u-icon :name="props.icon" />
        <header-2 class="text-2xl">{{ props.title }}</header-2>
        <span>{{ props.description }}</span>
    </div>
</template>