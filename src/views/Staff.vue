<template>
    <admin_Post/>
  
  <v-dialog
        v-model="dialog"
        width="auto"
      >
      <template v-slot:activator="{ props }">
        <VBtn density="comfortable" icon="mdi-plus" color="#c2aee1" size="50" class="newPost" v-bind="props"></VBtn>
      </template>
      <div class="text-center"><newPost/></div>
  </v-dialog>
  
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  import newPost from "@/components/env/Postform";
  import admin_Post from '@/components/Main/admin_Post';
  
  export default defineComponent({
    components: {
      newPost,
      admin_Post
    },
    setup() {
       let dialog=ref(false)
       return{
        dialog
       }
    },
  })
  </script>