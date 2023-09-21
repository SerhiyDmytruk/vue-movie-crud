<script setup>
import { ref } from "vue";
import { StarIcon } from "@heroicons/vue/24/solid";
import { items } from "./movies.json";
const movies = ref(items);

function ratingUpdate(movieIndex, star){
  movies.value[movieIndex].rating = star;
}

</script>

<template>
  <div class="app">
    <div class="movie-list">
      <div class="movie-item" v-for="(movie, movieIndex) in movies" :key="movie.id">
        <div class="movie-item-image-wrapper">
          <img :src="movie.image" class="movie-item-image" alt="" />

          <div class="absolute top-5 right-5">
              <StarIcon
               class="h-10 w-10  "
               :class="[movie.rating ? 'text-yellow-500' : 'text-gray-500']" />

              <span class="movie-rating-mark">
                <span v-if="movie.rating">{{ movie.rating }}</span> 
                <span v-else class="text-yellow-500">-</span>
              </span>
          </div>
        </div>

        <div class="movie-item-content-wrapper">
          <div class="movie-item-title-wrapper">
            <h3 class="movie-item-title">{{ movie.name }}</h3>
            <div class="movie-item-genres-wrapper">
              <span
                v-for="genre in movie.genres"
                :key="`${movie.id}-${genre}`"
                class="movie-item-genre-tag"
                >{{ genre }}</span
              >
            </div>
          </div>
          <div class="movie-item-description-wrapper">
            <p class="movie-item-description">{{ movie.description }}</p>
          </div>
          <div class="movie-item-rating-wrapper">
            <span class="movie-item-rating-text">
              Rating: ({{ movie.rating }}/5)
            </span>

            <span class="movie-item-rating-items">
              

              <span class="movie-item-rating-wrapper-default absolute  z-0">

                <button
                  v-for="star in 5"
                  :key="star"
                  class="movie-item-star-icon-button"
                  :class="[
                    star <= movie.rating ? 'text-yellow-500' : 'text-gray-500',
                  ]"
                  :disabled="star === movie.rating"
                  @click="ratingUpdate(movieIndex, star)"
                  >

                  <StarIcon class="movie-item-star-icon" />
                </button>
                
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
