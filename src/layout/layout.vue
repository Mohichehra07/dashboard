<script setup>
import Navbar from '../components/navigation/index.vue'
</script>
<template>
<div>
  <Navbar />
  <main>
    <router-view />
  </main>
  <footer>
    Footer
  </footer>
</div>
</template>
<style scoped>

.faled-enter-active,
.faled-leave-active{
    transition: opacity 0.3s ease;
}
.faled-enter-active,
.faled-leave-to{
     opacity: 0;
}
</style>