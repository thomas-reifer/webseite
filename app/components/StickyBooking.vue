<template>
  <Transition name="booking-fade">
    <a
      v-if="visible"
      :href="calendarUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="booking-widget"
      aria-label="Unverbindliches Beratungsgespräch online vormerken"
    >
      <svg
        class="booking-svg"
        viewBox="0 0 170 170"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="arc-top"
            d="M 15,85 a 70,70 0 0,1 140,0"
          />
          <filter id="soft-shadow">
            <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#6b4f35" flood-opacity="0.15"/>
          </filter>
        </defs>

        <!-- Äußerer feiner Ring -->
        <circle cx="85" cy="85" r="82" fill="none" stroke="#c9aa88" stroke-width="0.7" opacity="0.4"/>

        <!-- Hauptkreis -->
        <circle cx="85" cy="85" r="52" fill="#7a6248" filter="url(#soft-shadow)"/>

        <!-- Text oben im Halbmond -->
        <text
          font-family="'Cormorant Garamond', Georgia, serif"
          font-size="13"
          fill="#9a7e63"
          letter-spacing="4"
          text-anchor="middle"
          style="text-transform: uppercase;"
        >
          <textPath href="#arc-top" startOffset="50%">Online Termin vormerken</textPath>
        </text>
      </svg>
    </a>
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
.booking-widget {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 9999;
  width: 130px;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
  transition: opacity 0.4s ease;
  text-decoration: none;
}

.booking-widget:hover {
  opacity: 1;
}

.booking-svg {
  width: 100%;
  height: 100%;
}

.booking-fade-enter-active {
  transition: opacity 0.6s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.booking-fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.booking-fade-enter-from,
.booking-fade-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.92);
}

@media (max-width: 640px) {
  .booking-widget {
    width: 100px;
    height: 100px;
    bottom: 1.25rem;
    right: 1.25rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .booking-fade-enter-active,
  .booking-fade-leave-active {
    transition: opacity 0.3s ease;
  }
}
</style>
