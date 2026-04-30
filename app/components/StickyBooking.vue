<template>
  <Transition name="booking-fade">
    <div
      v-if="visible"
      class="booking-widget"
      :class="{ 'is-hovered': isHovered }"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <!-- Rotierender Textring -->
      <div class="booking-ring" aria-hidden="true">
        <svg
          class="booking-ring__svg"
          viewBox="0 0 140 140"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="circle-path"
              d="M 70,70 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
            />
          </defs>
          <text class="booking-ring__text">
            <textPath href="#circle-path" startOffset="0%">
              Online Termin vormerken &nbsp;—&nbsp; Online Termin vormerken &nbsp;—&nbsp;
            </textPath>
          </text>
        </svg>
      </div>

      <!-- Zentraler Button -->
      <a
        :href="calendarUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="booking-center"
        aria-label="Unverbindliches Beratungsgespräch online vormerken"
      >
        <span class="booking-center__icon">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </span>
        <span class="booking-center__label">Termin<br />vormerken</span>
      </a>
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
const isHovered = ref(false)

let showTimer = null

function handleScroll() {
  if (window.scrollY > 80) {
    visible.value = true
  }
}

onMounted(() => {
  if (window.scrollY > 80) {
    visible.value = true
  } else {
    showTimer = setTimeout(() => {
      visible.value = true
    }, 2000)
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
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.booking-ring {
  position: absolute;
  inset: 0;
  animation: spin 18s linear infinite;
}

.booking-widget.is-hovered .booking-ring {
  animation-duration: 8s;
}

.booking-ring__svg {
  width: 100%;
  height: 100%;
}

.booking-ring__text {
  font-size: 11.5px;
  font-family: 'Cormorant Garamond', 'Georgia', serif;
  letter-spacing: 0.06em;
  fill: #c4a882;
  text-transform: uppercase;
}

.booking-center {
  position: relative;
  z-index: 2;
  width: 82px;
  height: 82px;
  border-radius: 50%;
  background-color: #a0593a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: #fdf6ee;
  text-decoration: none;
  box-shadow:
    0 4px 24px rgba(160, 89, 58, 0.38),
    0 1px 4px rgba(0, 0, 0, 0.12);
  transition:
    background-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.booking-center:hover,
.booking-center:focus-visible {
  background-color: #8d4a2e;
  transform: scale(1.07);
  box-shadow:
    0 8px 32px rgba(160, 89, 58, 0.48),
    0 2px 8px rgba(0, 0, 0, 0.16);
  outline: none;
}

.booking-center:focus-visible {
  outline: 2px solid #a0593a;
  outline-offset: 4px;
}

.booking-center__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.92;
}

.booking-center__label {
  font-size: 9.5px;
  font-family: 'Cormorant Garamond', 'Georgia', serif;
  letter-spacing: 0.08em;
  text-align: center;
  text-transform: uppercase;
  line-height: 1.3;
  opacity: 0.88;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
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
  transform: translateY(12px) scale(0.88);
}

@media (max-width: 640px) {
  .booking-widget {
    width: 110px;
    height: 110px;
    bottom: 1.25rem;
    right: 1.25rem;
  }

  .booking-ring__text {
    font-size: 9.5px;
  }

  .booking-center {
    width: 66px;
    height: 66px;
  }

  .booking-center__icon svg {
    width: 18px;
    height: 18px;
  }

  .booking-center__label {
    font-size: 8px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .booking-ring {
    animation: none;
  }
  .booking-fade-enter-active,
  .booking-fade-leave-active {
    transition: opacity 0.3s ease;
  }
}
</style>
