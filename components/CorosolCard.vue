<script setup>
const props=defineProps({
    dummy:{
        type:Object
    }
})

</script>
<template>
     <div class="flex flex-col bg-white mr-0  rounded-2xl   pb-10  relative  ring ring-transparent hover:ring-sky-500 group">
    <Card  class="!w-[20rem] !h-[25rem]">
      <template #header>
        <img :src="props.dummy.image" alt="there is no photo" class="object-cover w-[20rem] h-[15rem] rounded-2xl" />
      </template>
      <template #title>
        <h1 class="text-sky-500 py-2 text-2xl font-bold">{{ props.dummy.title }}</h1>
      </template>
      <template #content>
        <div class="relative">
          <p class="text-justify transition-all line-clamp-6 duration-300 text-[#334155] px-3  overflow-hidden text-sm">
            {{ props.dummy.description }}
          </p>

        </div>
      </template>
    </Card>
 
  </div>
</template>