<template>
  <VApp>
    <VMain class="main">
        <Navbar/>
        <RouterView/>
        <Footer/>
    </VMain>
  </VApp>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { RouterView } from 'vue-router';
import Navbar from '@/components/Appbar/Navbar.vue';
import Footer from '@/components/Appbar/Footer.vue';
export default defineComponent({
  components:{
      Navbar,
      Footer,
      RouterView
    },
    setup() {
    onMounted(() => {
      if(onloadstart==true) window.location.reload();
    })
    return{onMounted}
  },
})
</script>