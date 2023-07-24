
<template>
  <VCarousel
    class="d-flex Slide"
    style="margin-top: -1px;"
    hide-delimiters :show-arrows="false">
    <VCarousel-item
      :src="banner.src"
      width="1000"
      cover
    >
      <v-row class="title fill-height ma-0 pa-0 Slide" align="center" justify="center">
        <h2 class="text-white banner " style="font-size: 3rem; opacity: .9;">About Us <br>
           <p>
          โครงงานนี้จัดทำขึ้นโดยสายรหัสสาย 3 ( วิทย์ - คอม ) โรงเรียนรังษีวิทยาปี 2566
          <br>
          โดยจัดตั้งเพื่อความทันสมัยของสาย 3 ที่จะเป็นการเล่นสายรหัสแบบใหม่ ทันสมัยกว่าเดิม
          <br>
          โดนการเล่นผ่านช่องทาง EXPLORE ที่จะเป็นการโพสต์แบบไม่ระบุตัวตน
          <br>
          ทั้งรุ่นพี่และรุ่นน้องก็สามารถโพสต์ข้อความลงไปได้
          </p>
        </h2>
      </v-row>
    </VCarousel-item>
  </VCarousel>

  <div class="container ">
    <h2 class="text-white text-center about " style="font-size: .9rem; opacity: .9;">
           <p style="text-indent: 4em; text-align:left;" class="px-2">
          โครงงานนี้จัดทำขึ้นโดยสายรหัสสาย 3 ( วิทย์ - คอม ) โรงเรียนรังษีวิทยาปี 2566
          โดยจัดตั้งเพื่อความทันสมัยของสาย 3 ที่จะเป็นการเล่นสายรหัสแบบใหม่ ทันสมัยกว่าเดิม
          โดนการเล่นผ่านช่องทาง EXPLORER ที่จะเป็นการโพสต์แบบไม่ระบุตัวตน
          ทั้งรุ่นพี่และรุ่นน้องก็สามารถโพสต์ข้อความลงไปได้
           </p>
        </h2>
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
