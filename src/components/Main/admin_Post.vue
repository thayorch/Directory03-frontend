<template>
  <div class="bg-fff">
  <VCard
    max-width="auto"
    class="mx-auto bg-transparent"
  >
  <VContainer style="background: transparent;">
      <VRow dense>
        <VCol 
          cols="auto"
          v-for="i in result"
          :key="i"
          class="mx-auto my-2 d-flex ">
          <VCard
            border
            border-primary
            color="white"
            theme="dark"
            width="380"
          >


          <div class="d-flex flex-no-wrap justify-space-between px-2 py-2">

            <div>
              <VCard-text class="text-h5 font-weight-bold">
                <VAvatar class="avatar-1 mr-3 border border-primary bg-white" size="45">
                  <VIcon size="40" class="text-primary">mdi-account</VIcon>
                </VAvatar>{{ i.name }}
            </VCard-text>
              <VCard-text>{{ i.description }}</VCard-text>
            </div>

            <VDialog width="250px" >
            <template v-slot:activator="{ props }">
              <VBtn icon="mdi-delete" color="primary" v-bind="props"></VBtn>
            </template>
            <VCard
            title="Confirm to Delete"
            class="text-center align-center d-block flex-column pb-4">
              <v-btn class="mx-2 " width="10px" color="success" @click="deleteN(i.id)">Yes</v-btn>
              <v-btn class="mx-2 " width="10px" @click="dialog=false">No</v-btn>
            </VCard>
          </VDialog>
          </div>
          </VCard>
        </VCol>
      </VRow>
    </VContainer>
  </VCard>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
  setup() {
    const result= ref([])
    const post_data = {name:"",description:""}
    let dialog= ref(false)

    const deleteN = (id)=>{
    console.log(id);
      if(id!==null){
        axios.post('http://192.168.1.106/delete.php',id)
        .then((response)=>{
          // console.log(response);
          window.location.reload()
        })
      }else{
        console.log("Error to delete");
      }
  }

  onMounted(() => {
    axios.get('http://192.168.1.106/postapi.php')
    .then(response => {
      result.value = (response.data).reverse()
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  })
  
  return{
    result,
    post_data,
    dialog,
    deleteN,
  }
}
})
</script>

