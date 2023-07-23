
<template>

<VNavigationDrawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <VList-item
          class="py-2"
          prepend-avatar="/src/assets/logo.png"
          title="DIRECTORY-03"
          subtitle="@RangseeVittaya"
          nav
          >
          <template v-slot:append>
            <VBtn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></VBtn>
          </template>
        </VList-item>

      <VDivider></VDivider>

        <VList density="compact" nav>
          <VList-item
            v-for="link in links"
              :key="link"
              :title="link.title"
              :prepend-icon="link.icon"
            router :to="link.route">
          </VList-item>
            <!-- <VList-item prepend-icon="mdi-home" title="Home" ></VList-item>
            <VList-item prepend-icon="mdi-calendar" title="Todo-List"></VList-item>
            <VList-item prepend-icon="mdi-cog" title="Edit Post"></VList-item>
            <VList-item prepend-icon="mdi-database-cog" title="Database"></VList-item> -->
        </VList>
      </VNavigationDrawer>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const links = [
        { title : "Directory", icon:"mdi-account-group", route:'/'},
        { title : "Explorer", icon:"mdi-compass",route:'/post'},
        { title : "Database", icon:"mdi-database-cog",route:'/datatable'},
        { title : "Login", icon:"mdi-logout",route:'/login'},
      ];
      let rail = true
      let drawer = true
      return{
        links,
        rail,
        drawer
      }
  },
})
</script>
