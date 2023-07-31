<template>
  <div class="bg-fff">
  <VCard
    max-width="auto"
    class="mx-auto bg-transparent"
  >
    <VContainer>
      <VRow dense>
        <VCol
          cols="auto"
          v-for="i in result"
          :key="i"
          class="mx-auto my-2 d-flex">
          <v-card
            border
            border-primary
            color="white"
            theme="dark"
            width="380"
          >

            <div class="d-flex flex-wrap justify-space-between">
              <div>
              <VCard-text class="text-h5 font-weight-bold">
                <VAvatar class="avatar-1 mr-3 border border-primary bg-white" size="45">
                  <VIcon class="text-primary">mdi-account</VIcon>
                </VAvatar>{{ i.name }}
              </VCard-text>
              <VCard-text>{{ i.description }}</VCard-text>
              </div>
            </div>
          </v-card>
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
    const result= ref<any>([])
    const post_data = {name:"",description:""}
    let dialog= ref(false)

    const deleteN = (id)=>{
    console.log(id);
      if(id!==null){
        axios.post('http://192.168.1.106/delete.php', {
          id: parseInt(id)
        })
        .then((response)=>{
          console.log(response);
          window.location.reload()
        })
        .catch((error)=> {
          console.log(error);
        });
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
