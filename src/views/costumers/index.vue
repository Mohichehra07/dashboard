<script setup>
import Navbar from '@/components/navigation/index.vue';
import Main from '@/components/main/index.vue';
import Table from '@/components/UI/table/index.vue';


</script>
<template>
    <div class="flex pt-[41px] w-[1250px] gap-[140px]">
        <Navbar />
        <div class="bg-[#fafbff] p-5">
            <div class=" w-[1000px] ">
                <div class="flex gap-[520px] ">
                    <h1 class="text-[24px] ">Hello Evano 👋🏼,</h1>     
                    <input class="flex justify-end h-8 bg-white w-45 rounded-md" type="search" placeholder="Search">
                    
                </div>
            </div>
            <div class=" bg-[white] w-[968px] h-[151px]">
                <Main />
            <Table />
                </div>
                </div>
            </div>

        </template>