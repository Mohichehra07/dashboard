<script setup>
import { defineProps } from "vue";



defineProps({
  headings: Array,
  data: Array,
});
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="head in headings" :key="head.key">
            {{ head.title }}</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="row in data" :key="row.id">
          <td v-for="head in headings" :key="head.key">
            <slot :name="head.key" :data="row"> {{ row[head.key] }} </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

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
       border-bottom: 1px solid #B5B7C0;
        

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
