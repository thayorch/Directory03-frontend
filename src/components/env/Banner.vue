<template>
  <VCarousel
    class="d-flex Slide"
    style="margin-top: -1px;"
    hide-delimiters show-arrows="hover">
    <!-- <VCarousel-item
    v-for="i in banner"
    :key="i"
    cover
    ><v-img :src="i.src">
      <v-row class="title fill-height" align="center" justify="center">
        <h2 class="text-white banner" style="font-size: 2.8rem;">Welcome to DIRECTORY-03</h2>
      </v-row></v-img>
    </VCarousel-item> -->

    <v-carousel-item
      v-for="i in banner"
      :key="i"
      :src="i.src"
      width="1000"
      cover
    >
    <v-row class="title fill-height  ma-0 pa-0 Slide" align="center" justify="center">
        <h2 class="text-white banner" style="font-size: 2.8rem;">Welcome to DIRECTORY-03</h2>
    </v-row>
  </v-carousel-item>
  </VCarousel>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
   const banner = [
        {src:'/public/banner/1.png'},
        {src:'/public/banner/2.png'},
        {src:'/public/banner/3.png'},
        {src:'/public/banner/4.png'},
        {src:'/public/banner/5.png'},
      ]
      return {
        banner
      }
  },
})
</script>