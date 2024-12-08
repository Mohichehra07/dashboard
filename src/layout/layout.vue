<script setup>
import { RouterView } from 'vue-router';
import Navbar from '../components/navigation/index.vue'
</script>
<template>
  <div class="flex">
    <div>
        <Navbar />
    </div>
    <div>
        <RouterView />
    </div>
</div>
</template>

