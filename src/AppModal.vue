<script setup>
import { XMarkIcon } from "@heroicons/vue/20/solid";
defineProps({
  title: { type: String, default: null },
});

defineEmits(["close"]);
</script>

<template>
  <div class="modal-wrapper">
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
