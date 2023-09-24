<script setup>
import { ref } from "vue";
import { StarIcon } from "@heroicons/vue/24/solid";
import { items } from "./movies.json";
const movies = ref(items);

function updateRating(movieIndex, rating) {
  movies.value[movieIndex].rating = rating;
}

const modalTrigger = ref(false);

function updateModalTrigger() {
  return modalTrigger.value = !modalTrigger.value;
}
let name = ref('');
let description = ref('');
let image = ref('');
let rating = ref(0);
let genres = ref([]);
let theater = ref(false);

let newMovie = {
  'image': image,
  'name': name,
  'description': description,
  'rating': rating,
  'genres': genres,
  'theater': theater
}

function resetFrom() {

  name = ref('');
  description = ref('');
  image = ref('');
  rating = ref(0);
  genres = ref([]);
  theater = ref(false);
  updateModalTrigger();
}

function onSubmit(e) {
  console.log(newMovie);

  movies.value.push(newMovie);

  resetFrom();
}
</script>

<template>
  <div class="app">
    <div class="flex relative w-full">
      <!-- Modal toggle -->
      <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" 
              class="movie-add-btn"
              type="button"
              @click="updateModalTrigger">
              Add Movie
      </button>

      <!-- Main modal -->
      <div id="defaultModal" tabindex="-1" aria-hidden="true" 
          class="movie-modal"
          :class="[modalTrigger ? 'flex': 'hidden']"
          >

          <div class="absolute top-0 left-0 w-full h-full bg-slate-400/50" @click="updateModalTrigger"></div>

          <div class="relative w-full max-w-2xl max-h-full">

              <!-- Modal content -->
              <div class="relative bg-white rounded-lg">            
                  <!-- Modal body -->
                  <div class="p-6 space-y-6">
                      <form @submit.prevent="onSubmit" id="form">

                        <label for="name" class="form-label">
                          <span>Name:</span>
                          
                          <input type="text" name="name" id="name" class="form-input" required
                                v-model="name"/>
                        </label>

                        <label for="description" class="form-label">
                          <span>Description:</span>
                          <textarea name="description" id="description" cols="30" rows="4" class="form-input"
                                    v-model="description"></textarea>
                        </label>

                        <label for="image" class="form-label">
                          <span>Image:</span>
                          <input type="text" name="image" id="image" class="form-input"
                                v-model="image"/>
                        </label>

                        <label for="genres" class="form-label">
                      
                          <span>Genres:</span>
                          <select name="genres" id="genres" multiple  class="form-input" required
                                  v-model="genres">
                            <option value="drama">Drama</option>
                            <option value="action">Action</option>
                            <option value="crime">Crime</option>
                            <option value="commedy">Commedy</option>
                          </select>
                        </label>

                        <label for="theater" class="inline-flex items-center">
                          <input type="checkbox" name="theater" id="theater" 
                              class="form-checkbox" v-model="theater"/>
                          <span>In Theaters</span>
                        </label>


                        <div class="flex items-center justify-between pt-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">

                            <button data-modal-hide="defaultModal" 
                                type="button" 
                                class="movie-add-cancel"
                                @click="resetFrom">Cancel</button>

                            <button data-modal-hide="defaultModal" 
                                type="submit"
                                class="movie-add-accept">Create</button>
                        </div>

                      </form>
                  </div>
                  <!-- Modal footer -->
              
              </div>
          </div>
        </div>
      </div>
    <div class="movie-list">
      <div
        class="movie-item"
        v-for="(movie, movieIndex) in movies"
        :key="movie.id"
      >
        <div class="movie-item-image-wrapper">
          <div class="movie-item-star-wrapper">
            <StarIcon
              id="rating"
              class="movie-item-star-rating-icon"
              :class="[movie.rating ? 'text-yellow-500' : 'text-gray-500']"
            />
            <div class="movie-item-star-content-wrapper">
              <span
                v-if="movie.rating"
                id="rating-stars"
                class="movie-item-star-content-rating-rated"
              >
                {{ movie.rating }}
              </span>
              <span v-else class="movie-item-star-content-rating-not-rated">
                -
              </span>
            </div>
          </div>
          <img :src="movie.image" class="movie-item-image" :alt="movie.name" />
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

            <div class="movie-item-star-icon-wrapper">
              <button
                v-for="star in 5"
                :key="star"
                class="movie-item-star-icon-button"
                :class="[
                  star <= movie.rating ? 'text-yellow-500' : 'text-gray-500',
                ]"
                :disabled="star === movie.rating"
                @click="updateRating(movieIndex, star)"
              >
                <StarIcon class="movie-item-star-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
