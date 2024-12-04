<script setup>
import Navigation from '../src/components/navigation/index.vue'
import Header from '../src/components/header/index.vue'
import Table from '../src/views/home/index.vue'
import Main from '../src/components/main/index.vue'
</script>
<template>
    <div class="flex pt-[41px] w-[1250px] gap-[140px]">
<Navigation />
<div class="bg-[#fafbff] p-5">
    <Header /><br><br>
    <div class=" bg-[white] w-[968px] h-[151px]">
        <Main />
    <Table />
        </div>
        </div>
        </div>
</template>