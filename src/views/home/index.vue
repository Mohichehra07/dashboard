<script setup>
import BaseTable from '../../components/UI/table/index.vue';
import { tableHealders,tableRow } from '../../../constanta/index'
</script>
<template>
    <div class="flex mt-[70px] p-4">
    <BaseTable :haedings="tableHealders" :data="tableRow">
    <template #Action= "{ data }">
        <button class="py-2 px-3 bg-[#007bff] text-[white] rounded-md cursor-pointer hover:bg-[#0056b3] ">Active</button>
    </template>
    </BaseTable>
</div>
</template>