<template>
  <VCard
    class="mx-auto my-10 mb-0"
    max-width="374"
  ><v-avatar class="avatar-1" size="x-large" image="https://scontent.fcnx4-1.fna.fbcdn.net/v/t39.30808-6/297076514_1205542383628230_3022579418076223530_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFGz3Hu-QltE6iV_AdgW8trvBt0vLKl2ae8G3S8sqXZp78lJ-L3YbDwjDsTOzUwEyX0vq-SV4JWGfJ2rQu39wPh&_nc_ohc=e7ARbl6yW-IAX9VAUZm&_nc_ht=scontent.fcnx4-1.fna&oh=00_AfCHnQhSxcB08dPAoFTOrzx4jwQHifnnbBRUL9mcMBc8Ig&oe=64768118"></v-avatar>
    <VCard-item>
      <VCard-title>Thatcharnon Maidee</VCard-title>

      <VCard-subtitle>
        <span class="me-1">
          <VChip-group>
            <VChip>Coding</VChip>
            <VChip>Thayorzz</VChip>
            <VChip>Musician</VChip>
          </VChip-group>
        </span>

      </VCard-subtitle>
    </VCard-item>

    <VCard-text>
      <VRow
        align="center"
        class="mx-0"
      >
      </VRow>

      <div class="my-1 text-subtitle-1">
        • Road to Software Developers    <br>
        • Let's go to FullStack !!!
      </div>
    </VCard-text>

    <v-divider class="mx-4 mb-1"></v-divider>

    <VCard-title>Contact</VCard-title>

    <div class="px-4">
      <VList density="default" nav>
          <VList-item prepend-icon="mdi-facebook" title="Thatcharnon Maidee" value="fb"></VList-item>
          <VList-item prepend-icon="mdi-instagram" title="__i.icez5__" value="ig"></VList-item>
          <VList-item prepend-icon="mdi-open-in-new" title="Go to Profile" value="profile"></VList-item>
      </VList>
    </div>
  </VCard>
</template>


<style>
.avatar-1 {
  margin: 5% 5%;
  margin-bottom: 0;
  padding: 0;
}
</style>

<!-- <script>
   import {ref} from 'vue';
    const data = ref([])
    fetch('https://script.googleusercontent.com/macros/echo?user_content_key=q1a5p0LgH7GIfsRwHG7USp_i8w90pdiibOHDUQI9-yMMHLlD8kPUzPpY16HW4CPBz-i2dueoMS8n3dQ43-XlRO6yPsGYWIW0m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBK4n-PC6TsKU-9Q5PARki0refEiD1Z2zr9BDU-5-475cSyQDWNzN1uLf8tPrBOCnMx6Sgk_ar6-epZ7gGsZb6HN7Z-tsUB6Mdz9Jw9Md8uu&lib=MHuJeZdDTaKhjphN_qwgnJhe_bxLtiFgC')
    .then(res => res.json())
    .then((result)=>{
      data.value = result
      console.log(result);
    })
</script> -->
