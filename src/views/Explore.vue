<template>
  <user_Post class="mt-1"/>
  
  <v-dialog
    v-model="dialog"
    width="auto"
  >
      <template v-slot:activator="{ props }">
        <VBtn density="comfortable" icon="mdi-plus" color="#c2aee1" size="50" class="newPost" v-bind="props"></VBtn>
      </template>
      <div class="text-center"><newPost/></div>
  </v-dialog>



  <v-dialog
      v-model="popup"
      width="auto"
    ><div class="text-center"><alert @click="popup=false"/></div>
</v-dialog>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import newPost from "@/components/env/Postform";
import user_Post from "@/components/Main/user_Post.vue";
import alert from '@/components/env/alert.vue';

export default defineComponent({
  components: {
    newPost,
    user_Post,
    alert
  },
  setup() {
    let popup = ref<boolean>(true)
     let dialog=ref<boolean>(false)
     return{
      dialog,
      popup
     }
     
  },
})
</script>