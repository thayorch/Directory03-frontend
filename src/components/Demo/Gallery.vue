<template>
  <VRow>
    <VCol
      v-for="n in 200"
      :key="n"
      cols="2"
      sm="3"
      md="2"
      lg="1"
    >
       <VImg
        :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
        :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
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
    </VCol>
  </VRow>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return{}
  },
})
</script>
