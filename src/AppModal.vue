<script setup>
import { XMarkIcon } from "@heroicons/vue/20/solid";
defineProps({
  title: { type: String, default: null },
  show: { type: Boolean, default: false },
});

defineEmits(["close"]);
</script>

<template>
  <div class="modal-wrapper" v-if="show">
    <div class="modal-wrapper-inner">
      <button class="modal-close-button" @click="$emit('close')">
        <XMarkIcon class="w-8 h-8" />
      </button>
      <h3 class="modal-title" v-if="title">{{ title }}</h3>
      <div class="modal-inner">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active,
.fade-enter-active .modal-wrapper-inner,
.fade-leave-active .modal-wrapper-inner {
  transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fase-enter-from .modal-wrapper-inner,
.fase-leave-to .modal-wrapper-inner {
  transform: translateY(-50px);
}
</style>
