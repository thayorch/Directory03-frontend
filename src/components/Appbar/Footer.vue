<template>
  <v-footer class="d-block flex-column mt-3 bg-transparent" >
    <div class="text-center">
        © Copyright {{ new Date().getFullYear() }}. All Rights Reserved<br>
        Modify by <strong><a target="_blank" style="text-decoration: none; color: black;" href="https://www.facebook.com/lnwice0">Thatcharnon Maidee</a></strong>
    </div>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return{}
  },
})
</script>
