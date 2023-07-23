<template>
  <VCard
    max-width="400"
    class="mx-auto"
  >
    <VContainer style="background: transparent;">
      <VRow dense >

        <VCol
        cols="auto"
          v-for="i in result"
          :key="i"
          class="mx-auto my-2">
          <v-card
            color="white"
            theme="dark"
            width="370"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
              <VCard-text class="text-h5 font-weight-bold">
                <VAvatar class="avatar-1 mr-3 border border-primary bg-white" size="45">
                  <VIcon size="40" class="text-primary">mdi-account</VIcon>
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
        axios.post('http://26.228.141.51/delete.php', {
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
    axios.get('http://26.228.141.51/postapi.php')
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
