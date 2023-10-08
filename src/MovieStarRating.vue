<script setup>
import { computed } from "vue";
import { StarIcon } from "@heroicons/vue/24/solid";
const props = defineProps({
  rating: Number,
});

const notRated = computed(() => Boolean(!props.rating));
</script>
<template>
  <div class="movie-item-star-wrapper">
    <StarIcon
      id="rating"
      class="movie-item-star-rating-icon"
      :class="{
        'text-yellow-500': !notRated,
        'text-gray-500': notRated,
      }"
    />
    <div class="movie-item-star-content-wrapper">
      <span
        v-if="!notRated"
        id="rating-stars"
        class="movie-item-star-content-rating-rated"
      >
        {{ rating }}
      </span>
      <span v-else class="movie-item-star-content-rating-not-rated"> - </span>
    </div>
  </div>
</template>
