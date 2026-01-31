<script lang="ts" setup>
const props = defineProps<{
    icon?: string;
    title: string;
    description?: string;
}>();
</script>
<template>
    <div class="p-2 md:p-6 rounded-lg bg-accent">
        <u-icon class="block pb-2" :name="props.icon" size="1.5rem" />
        <div>
            <header-2 class=" text-xlmd:text-2xl p-0 m-0">{{ props.title }}</header-2>
            <p class="m-0! p-0!">{{ props.description }}</p>
        </div>
    </div>
</template>