<template>
  <section class="my-30">
    <u-container>
      <Header2>{{ header }}</Header2>
      <List>
        <slot></slot>
      </List>
    </u-container>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  header: { type: String, default: "Hier kann ich unterstützen" },
  items: {
    type: Array as () => string[],
    default: () => [
      "Burnout und Stress",
      "Psychischen Erkrankung: Depression, Ängste, Zwänge",
      "Traumatische Erlebnisse",
      "Auffälligkeiten im Kindesalter: Aufmerksamkeitsdefizit-/Hyperaktivitätsstörung (AD(H)S), Lernschwächen",
      "Körperliche Erkrankungen: chronischen Krankheiten, Schmerzen, onkologische Erkrankungen, Kardiologische Erkrankungen, Post-Covid-Syndrom und ME/CFS Erkrankungen",
    ],
  },
});
</script>
