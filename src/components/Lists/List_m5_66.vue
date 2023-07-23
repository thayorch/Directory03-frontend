<template>
  <VCarousel
    class="my-3 d-flex Slide"
    style="margin-top: -1px;"
    hide-delimiters :show-arrows="false">
    <VCarousel-item
    width="1000"
    cover>
      <v-img :src="banner.src">
      <v-row class="title fill-height ma-0 pa-0 Slide" align="center" justify="center">
        <h2 class="text-white banner" style="font-size: 3rem; opacity: .9;">ปรับปรุงระบบชั่วคราว<br>
        </h2>
      </v-row>
    </v-img>
    </VCarousel-item>
  </VCarousel>
  <div class="container">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const  banner = {src:'/public/banner/1.png'}
    return{
      banner
    }
  },
})
</script>
