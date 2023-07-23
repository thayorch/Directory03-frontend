<template>
  <VRow>
    <VCol
    v-for="i in Class"
    :key="i"
      cols=auto
      class="mx-auto"
    >
    <VCard
    router :to="i.route"
    class="mx-auto my-1 card"
    max-width="355"
    height="420"
    >
      <VImg
      :src="i.logo"
      :lazy-src="i.logo"
      width="360"
      height="355"
      aspect-ratio="1"
      cover
      >
      <template v-slot:placeholder>
          <VRow
            class="fill-height ma-0"
            align="center"
            justify="center">
            <VProgress-circular
              indeterminate
              color="grey-lighten-5"
            ></VProgress-circular>
          </VRow>
        </template>
    </VImg>
    <VCard-item class="pb-0">
      <a href="/list66" class="text-primary" style="text-decoration: none;">
        <VCard-title align="center"><b>LIST {{i.title}}</b></VCard-title></a>
    </VCard-item>
  </VCard>
  </VCol>
  </VRow>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const Class=[
          {title:'M.6/66',logo:'/public/logo/m6.png',route:'/list_m6_66'},
          {title:'M.5/66',logo:'/public/logo/m5.png',route:'/list_m5_66'},
          {title:'M.4/66',logo:'/public/logo/m4.png',route:'/list_m4_66'},
        ];
    return {
      Class
    }
  },
})
</script>
