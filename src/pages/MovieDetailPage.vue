<script setup>
import { ref, computed } from "vue";
import { items } from "@/movies.json";
import MovieStarRating from "@/MovieStarRating.vue";

const props = defineProps({
  id: {type: Number, default: null}
})

const movies = ref(items);
const movie = computed(() => movies.value.find((m) => m.id === props.id))

</script>
<template>

<div class="container flex items-center max-w-6xl gap-4 p-10 m-auto">
  <RouterLink class="w-full" 
    :to="{ name: 'home' }">
    Home
  </RouterLink>
</div>

  <div
    class="container flex items-center max-w-6xl gap-4 p-10 m-auto dark:text-white"
  >

    <figure class="relative">
      <MovieStarRating :rating="movie.rating" class="absolute top-5 right-5" />
      <img :src="movie.image" :alt="movie.name" class="w-96" />
    </figure>

    <div>
      <h1 class="mb-4 text-5xl">{{ movie.name }}</h1>
      <div class="mb-3 movie-item-genres-wrapper">
        <span
          v-for="genre in movie.genres"
          :key="`${movie.id}-${genre}`"
          class="!text-lg movie-item-genre-tag"
          >{{ genre }}</span
        >
      </div>
      <p class="text-xl">{{ movie.description }}</p>
    </div>
  </div>
</template>
