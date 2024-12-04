<template>
    <div class=" bg-[white]">
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
        </header>
        <table>
            <thead>
                <tr>
                    <th v-for="head in haedings" :key="head.key"> {{ head.title }} </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in data" :key="row.id"> 
                <td v-for="head in haedings" :key="head.key">
                    <slot :name="head.key" :data="row"> {{ row[head.key] }} </slot>
                </td> 
                </tr>
            </tbody>
        </table><br>
        <div class="flex gap-3">
            <p class="text-[#B5B7C0] text-[14px]">Showing data 1 to 8 of  256K entries</p>
            <div class="flex  " v-for="btn in button" :key="btn">
                <button class="w-6 h-6  "> {{ btn.number }} </button> 
                

            </div>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from "vue";
import  { button }  from "../../../../constanta/index";

defineProps({
    haedings:Array,
    data: Array,
});

</script>
<style scoped>
table{
    width: 969px;
    height: 587px;
    text-align: center;

    th{
       
    color: #B5B7C0;
    font-weight: 500;


    }
    thead{
        border: none;
    }
    tr{
        border: 1px solid #B5B7C0 ;
        

    }
    td{
         height: 30px;
        font-size: 16px;
    }
   
}
button{
    border-radius: 5px;
    width: 24px;
    height: 24px;
    border:none;
}
button:hover{
    transition: 0.4s;
    color: white;
    background-color: blue;
}

</style>