<script setup>
import Main from '@/components/main/index.vue';
import BaseTable from '@/components/UI/table/index.vue';
import { tableHeaders, tableRows } from '../../../constanta';
defineProps({
    haedings:Array,
    data: Array,
});

</script>
<template>
    <div class="ml-[100px]">
        
    <div class="flex pt-[41px] w-[1250px] gap-[140px] ">
        <div class="bg-[#fafbff] p-5">
            <div class=" w-[1000px] ">
                <div class="flex gap-[520px] ">
                    <h1 class="text-[24px] ">Hello Evano 👋🏼,</h1>     
                    <input class="flex justify-end h-8 bg-white w-45 rounded-md" type="search" placeholder="Search">
                    
                </div>
            </div>
            <div class=" bg-[white] w-[968px] h-[151px]">
                <Main />
                
                </div>
                    <header class="flex p-[10px]">
                        <div>
                          <strong><h1 class="w-[155px] h-[33px] text-[22px]">All Customers</h1></strong>  
                            <p class="w-[111px] h-[21px] text-[14px] text-[#16C098]">Active Members</p>
                        </div>
                        <input class="w-[216px] h-[38px] ml-[370px] rounded-md" type="search" placeholder="Search">
                        
                        <label>
                            Short by:
                                <select>
                                <option value="netwest">Netwest</option>
                                <option value="netwest">Finsweet</option>
                            </select>
                            </label>
                    </header><br>
                  
                </div>
                </div>
            <BaseTable :headings="tableHeaders" :data="tableRows" />
</div>

        </template>
        