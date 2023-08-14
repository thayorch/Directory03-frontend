
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
      <v-row class="title fill-height mx-4  ma-0 pa-0 Slide text-center" align="center" justify="center">
        <h2 class="text-white banner " style="font-size: 3rem; opacity: .9;">About Us <br>
           <p>
          โครงงานนี้จัดทำขึ้นโดยสายรหัสสาย 3 ( วิทย์ - คอม ) โรงเรียนรังษีวิทยาปี 2566
          โดยจัดตั้งเพื่อความทันสมัยของสาย 3 ที่จะเป็นการเล่นสายรหัสแบบใหม่ ทันสมัยกว่าเดิม
          โดนการเล่นผ่านช่องทาง EXPLORE ที่จะเป็นการโพสต์แบบไม่ระบุตัวตน
          ทั้งรุ่นพี่และรุ่นน้องก็สามารถโพสต์ข้อความลงไปได้
          </p>
        </h2>
      </v-row>
    </VCarousel-item>
  </VCarousel>

<VCard class="container d-grid text-center item-center">
    <h2 class="text-white text-center about ">
           <p style="text-indent: 4em; text-align:left;" class="px-2">
          โครงงานนี้จัดทำขึ้นโดยสายรหัสสาย 3 ( วิทย์ - คอม ) <br>
          โรงเรียนรังษีวิทยาปี 2566
          โดยจัดตั้งเพื่อความทันสมัยและการสร้างCommunityใหม่ๆของเด็กสาย 3 ที่จะเป็นการเล่นสายรหัสแบบทันสมัยกว่าเดิม
          โดนการเล่นผ่านช่องทาง EXPLORER ที่จะเป็นการโพสต์แบบไม่ระบุตัวตน
          ทั้งรุ่นพี่และรุ่นน้องก็สามารถโพสต์ข้อความลงไปได้
           </p>
        </h2>
</VCard>




<div class="banner-about px-12 my-3" style=" opacity: .9; text-shadow: 2px 2px 2px #1e1e1e;">
  <h2 class="text-white title my-2" style="text-shadow:
  0 0 42px #0000,
    0 0 42px #ba24ff,
    0 0 41px #ba24ff,
    0 0 40px #ba24ff,
    0 0 42px #fff,
    0 0 40px #ba24ff
    ; border-radius: 30px;">จัดทำโดย<br></h2>
    
  <div>
    <div class="images-about-right">
      <img class="images-about_right" src="/public/m6_66/12.jpg">
    </div>
    <div class="text-about-right mx-3 my-5">
        <h1>ธัชนนท์ ใหม่ดี</h1>
        <p>Facebook : Thatcharnon Maidee</p>
    </div>
  </div>

  <div>
      <div class="images-about-left">
        <img class="images-about_left" src="/public/m6_66/15.jpg">
      </div>
      <div class="text-about-left mx-3 my-5">
        <h1>นนทนันท์ ณรงค์ฤทธิ์</h1>
        <p>Facebook : Nontanan Narongrit</p>
      </div>
  </div>

  <div>
    <div class="images-about-right">
      <img class="images-about_right" src="/public/m6_66/20.jpg">
    </div>
    <div class="text-about-right mx-3 my-5">
        <h1>ภัทรณันต์ วงษ์รัตนไตยกูล</h1>
        <p>Facebook : Pataranan Wongrattrikun</p>
    </div>
  </div>

  <div>
      <div class="images-about-left">
        <img class="images-about_left" src="/public/m6_66/34.jpg">
      </div>
      <div class="text-about-left mx-3 my-5">
        <h1>อนันตญา ขันวิชัย</h1>
        <p>Facebook : Anantaya Satam</p>
      </div>
  </div>

  <div>
    <div class="images-about-right">
      <img class="images-about_right " src="/public/m6_66/35.jpg">
    </div>
    <div class="text-about-right mx-3 my-5">
        <h1>วศินี สุวรรณ</h1>
        <p>Facebook : Junior Junior</p>
    </div>
  </div>
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
