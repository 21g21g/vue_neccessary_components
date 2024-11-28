<script  setup>
import {ref} from "vue"
import {Question} from "../data/quise"
const shownext=ref(false)
const handleClick=()=>{
     shownext.value=true
    }
     const handleButton=()=>{
        index.value++
        shownext.value=false

    }
const index=ref(0)
</script>
<template>
    <div class="flex items-center flex-col mt-5  ">
    <div  class="border border-gray-500 px-3 py-3">
     <h1 class="flex text-lg text-red-900 font-bold">Simple Question and Answers</h1>
    <div>
    <h1>{{Question[index].question}}</h1>
    <h2 @click="handleClick" class="cursor-pointer text-white bg-gray-900 w-full">{{Question[index].answers.a}}</h2>
<h2 
  @click="handleClick" 
  class="bg-orange-300 text-gray-800 w-full cursor-pointer">
  {{Question[index].answers.b}}
</h2>    <h2  @click="handleClick" class="cursor-pointer">{{Question[index].answers.c}}</h2>
    <h2 @click="handleClick" class="cursor-pointer">{{Question[index].answers.d}}</h2>
     </div>

     <button @click="handleButton" v-if="shownext" class="text-black font-bold">next</button>
    </div>
   
    </div>
</template>