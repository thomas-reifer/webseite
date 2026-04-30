<template>
  <Transition name="booking-fade">
    <div v-if="visible" class="booking-wrap">
      <a
        :href="calendarUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="booking-btn"
        aria-label="Erstgespräch anfragen – ich melde mich persönlich per E-Mail"
      >
        Erstgespräch anfragen
      </a>
      <p class="booking-hint">Ich melde mich zeitnah persönlich bei Ihnen per E-Mail.</p>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  calendarUrl: {
    type: String,
    default: 'https://cal.com/thomasreifer/beratungsgespraech',
  },
})

const visible = ref(false)
let showTimer = null

function handleScroll() {
  if (window.scrollY > 80) {
    visible.value = true
    window.removeEventListener('scroll', handleScroll)
  }
}

onMounted(() => {
  if (window.scrollY > 80) {
    visible.value = true
  } else {
    showTimer = setTimeout(() => { visible.value = true }, 2000)
    window.addEventListener('scroll', handleScroll, { passive: true })
  }
})

onUnmounted(() => {
  clearTimeout(showTimer)
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.booking-wrap {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

.booking-btn {
  display: inline-block;
  background: #7a6248;
  color: #f5ede0;
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.09em;
  padding: 17px 48px;
  border-radius: 999px;
  border: 1px solid rgba(245, 225, 195, 0.18);
  text-decoration: none;
  box-shadow: 0 4px 18px rgba(80, 55, 30, 0.10);
  transition: background 0.4s ease, box-shadow 0.4s ease;
  white-space: nowrap;
}

.booking-btn:hover {
  background: #6b5239;
  box-shadow: 0 8px 28px rgba(80, 55, 30, 0.16);
}

.booking-hint {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-size: 12px;
  letter-spacing: 0.03em;
  color: #8a7060;
  opacity: 0.75;
  text-align: center;
  line-height: 1.6;
}

/* Entrance transition */
.booking-fade-enter-active {
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.booking-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.booking-fade-enter-from,
.booking-fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Mobile */
@media (max-width: 640px) {
  .booking-wrap {
    bottom: 1.25rem;
    right: 1.25rem;
    left: 1.25rem;
    align-items: stretch;
  }

  .booking-btn {
    text-align: center;
    padding: 15px 24px;
    font-size: 15px;
  }

  .booking-hint {
    font-size: 11px;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .booking-fade-enter-active,
  .booking-fade-leave-active {
    transition: opacity 0.3s ease;
  }
}
</style>
