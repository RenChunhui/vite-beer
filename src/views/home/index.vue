<template>
  <div>Home</div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const user = reactive({
  name: 'mars',
  sex: 'man',
})

console.log('user:', JSON.stringify(user))
sessionStorage.setItem('user', JSON.stringify(user))
</script>
