<script setup lang="ts">
const { icon = "heroicons-check" } = defineProps<{
  icon?: string;
  showBorder?: boolean;
  title?: string;
}>();
</script>
<template>
  <li>
    <div
      class="text-lg flex items-center gap-2 align-top py-2"
      :class="showBorder ? 'border-b' : ''"
    >
      <div><u-icon v-if="icon" :name="icon" size=""></u-icon></div>
      <div class="">{{ title }}<slot></slot></div>
    </div>
  </li>
</template>
