<template>
  <h2 class="text-white text-center" style="font-size: 3rem; opacity: .9;">
     ม.5 / ปี 2566
 </h2>
 
   <VRow dense>
     <VCol
     v-for="i in result"
     :key="i"
       cols=auto
       class="mx-auto d-flex"
     >
     <VCard
     class="mx-auto my-1"
     max-width="auto"
     height="680"
     >
       <VImg
       :src="links[i.id-1]"
       width="360"
       height="355"
       aspect-ratio="1"
       cover
       >
       <template v-slot:placeholder>
           <VRow
             class="fill-height ma-0"
             align="center"
             justify="center"
           >
             <VProgress-circular
               indeterminate
               color="grey-lighten-5"
             ></VProgress-circular>
           </VRow>
         </template>
     </VImg>
 
       <VCard-item class="pb-0 pr-0">
         <VCard-title align="center" class="pr-5"><b>{{i.name}}</b></VCard-title>
         <VCard-subtitle>
           <span>
             <VChip-group>
              <VChip>M.5/66</VChip>
               <VChip v-if="i.ex!=null && i.ex!=' '" class="pa-0">{{i.ex}}</VChip>
             </VChip-group>
           </span>
         </VCard-subtitle>
       </VCard-item>
 
       <v-divider class="mx-auto mb-1"></v-divider>
 
       <VCard-title>Contact</VCard-title>
       <div class="px-4">
         <VList density="default" nav>
             <VList-item prepend-icon="mdi-facebook" v-if="i.fb!=null" >{{ i.fb }}</VList-item>
             <VList-item prepend-icon="mdi-instagram" v-if="i.ig!=null" >{{ i.ig }}</VList-item>
             <VList-item prepend-icon="mdi-phone" v-if="i.tel!=null" >{{ i.tel }}</VList-item>
         </VList>
       </div>
   </VCard>
     </VCol>
   </VRow>
 
 </template>
 
 <script lang="ts">
 import { defineComponent, onMounted ,ref} from 'vue'
 import axios from 'axios'
 export default defineComponent({
   setup() { 
     const result = ref<any>([])
     const links = []
     onMounted(() => {
         axios.get('/M5_66api.php')
               .then(response => {
                 result.value = response.data
                 for(let i = 0; i < result.value.length; i++){
                   links[i] = `/public/m5_66/${result.value[i].Picture}`;
                 }
                 // console.log(result.value); console.log(links);
               })
               .catch(error => {
                 console.error('Error fetching data:', error);
               });
       })
     return {
       result,
       links
     };
   },
 })
 </script>
 