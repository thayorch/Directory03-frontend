<template>
  <VApp-bar
    class="px-3 d-block flex-column"
    flat
    prominent
    density="compact"
  >

    <VListItem
        :active="false"
        class="py-2 logo"
        prepend-avatar="/public/logo.png"
        title="DIRECTORY-03"
        subtitle="@RangseeVittaya"
        nav
        to="/"
        ></VListItem>

    <VSpacer></VSpacer>

      <VTabs
      id="main-menu"
      centered
      color="grey-darken-2"
      align-tabs="center"
      style="cursor: pointer;">
      <VTab
        v-for="link in links"
        :key="link"
        :title="link.title"
        :prepend-icon="link.icon"
          router :to="link.route"
        >{{ link.title }}</VTab>

        <VBtn class="d-grid font-weight-bold border my-1 "
        height="40" type="submit"
        @click="popup=true">Log in</VBtn>
    </VTabs>

    <VTabs
      id="mobile-menu"
      centered
      color="grey-darken-2"
      align-tabs="center"
      style="cursor: pointer; ">
      <VTab
        prepend-icon="mdi-account-group"
          router to="/"
          class="mx-0 my-0 pl-7 py-0"
        style=" min-width: 70px;"
        ></VTab>
      <VTab
        prepend-icon="mdi-compass"
          router to="/explore"
          class="mx-0 my-0 pl-7 py-0"
        style=" min-width: 70px;"
        ></VTab>
    </VTabs>

    <div id="hamburger-menu">
    <VMenu>
      <template v-slot:activator="{ props }">
          <v-btn
            class="w-0"
            v-bind="props"
          >
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
      <VList>
        <VList-item
        v-for="link in links"
        :key="link"
        :title="link.title"
        :prepend-icon="link.icon"
          router :to="link.route"
        >
        </VList-item>
        <VBtn v-if="permissions!='admin'" class="d-grid font-weight-bold border my-1 mx-3 align-middle"
        height="40" type="button"
        @click="popup=true">Log in</VBtn>

        <VBtn v-else-if="permissions=='admin'" class="d-grid font-weight-bold border my-1 mx-3 align-middle"
        height="40" type="button"
        @click="permissions='user'">Log out</VBtn>
      </VList>
    </VMenu>
</div>
  </VApp-bar>
  <v-dialog
      v-model="popup"
      width="auto"
    ><div class="text-center"><LoginForm @submitlogin="Alert"/></div>
</v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LoginForm from '@/components/env/LoginForm.vue';
export default defineComponent({
  components: {
    LoginForm,
  },
  setup() {
    let popup=ref(false);
    let links=ref([ { title : "Directory", icon:"mdi-account-group", route:'/'},
          { title : "Explore", icon:"mdi-compass",route:'/explore'},
          { title : "About", icon:"mdi-information",route:'/about'},]);
    let permissions=ref<string>('');

    const Alert = (event: any)=>{
      popup = false;
      permissions.value = event
      console.log(permissions.value , "Permissions");
      if(permissions.value == 'admin'){
        alert("Hello "+permissions.value+" !!!");
      }else{
        alert('You are not admin !!!');
      }
      if(permissions.value=='user'){
        links.value=[
          { title : "Directory", icon:"mdi-account-group", route:'/'},
          { title : "Explore", icon:"mdi-compass",route:'/explore'},
          { title : "About", icon:"mdi-information",route:'/about'},
        ]
      }
      if(permissions.value=='admin'){
        links.value=[
          { title : "Directory", icon:"mdi-account-group", route:'/'},
          { title : "Explore", icon:"mdi-compass",route:'/explore'},
          { title : "Staff", icon:"mdi-security",route:'/staff'},
          { title : "About", icon:"mdi-information",route:'/about'},
          ]
      }
      
    }

    return{
    Alert,
    LoginForm,
    popup,
    links,
    permissions,
    }
  },
})
</script>