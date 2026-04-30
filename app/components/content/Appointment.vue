<template>
  <div class="appointment-wrap">
    <a
      :href="calendarUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="appointment-btn"
    >
      Erstgespräch online anfragen
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  calendarUrl: {
    type: String,
    default: 'https://cal.com/thomas-reifer/klinisch-psychologisches-erstgesprach',
  },
})
</script>

<style scoped>
.appointment-wrap {
  margin: 32px 0 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
}

.appointment-btn {
  display: inline-block;
  background: #7a6248;
  color: #f5ede0;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.09em;
  padding: 18px 48px;
  border-radius: 999px;
  border: 1px solid rgba(245, 225, 195, 0.15);
  text-decoration: none;
  box-shadow: 0 3px 14px rgba(80, 55, 30, 0.09);
  transition: background 0.4s ease, box-shadow 0.4s ease;
  white-space: nowrap;
}

.appointment-btn:hover {
  background: #6b5239;
  box-shadow: 0 6px 22px rgba(80, 55, 30, 0.15);
}

.appointment-hint {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 12px;
  letter-spacing: 0.03em;
  color: #8a7060;
  opacity: 0.72;
  line-height: 1.6;
}

@media (max-width: 640px) {
  .appointment-btn {
    white-space: normal;
    text-align: center;
    width: 100%;
  }
}
</style>
