<template>
  <Banner/>
  <Class/>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import Class from '@/components/env/Class';
import Banner from '@/components/env/Banner';
export default defineComponent({
  components:{
    Class,
    Banner
  },
  setup() {
    return{Class,Banner}
  }
})
</script>