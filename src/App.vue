<script setup>
import { items } from "./movies.json";
/*
 This is an Icon that you can use to represent the stars if you like
 otherwise you could just use a simple ⭐️ emoji, or * character.
*/
import { StarIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <!-- This is where your template goes	-->
  <div class="h-full flex items-center">
    <ul class="flex items-center w-4/5 mx-auto">
      <li v-for="item in items" v-bind:key="item.id" 
          class="flex justify-items-center items-center w-1/3 px-2 rounded-2xl overflow-hidden">
        <div class="h-full flex flex-col">
          <div class="h-[520px]">
            <img :src="item.image" :alt="item.name" class="h-full w-full">
          </div>
          <div class="bg-white  text-black px-6 py-4 text-xs flex flex-col">
            <p class="text-2xl">{{ item.name }}</p>
            <ul class="flex items-center justify-start text-white mt-2">
              <li v-for="(genre, index) in item.genres" :key="index" class="mr-2">
                  <span class="rounded-md bg-orange-900 px-2">{{genre}}</span>
              </li>
            </ul>
            <p class="mt-4">{{ item.description }}</p>
            
            <p class="mt-4 flex">
              <span>Rating</span>
              <span>({{ item.rating }})</span>


              <span class="flex ml-2">
                <StarIcon
                v-for="star in item.rating"
                :key="`star-${star}`"
                class="h-5 w-5 text-yellow-500"
              />
              </span>
             
            </p>
          </div>
        </div>
        
     
      </li>
    </ul>
  </div>
</template>
