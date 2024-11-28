
<script setup>
import { ref, computed } from "vue";
import fetchEvent from "../../graphql/fetchEvent.gql";
import query from "../../composables/query/query";
import mutator from "../../composables/mutation/mutator";
import insertEvent from "../../composables/mutation/mutator"
import Tooltip from "../Tooltip.vue"
import useNotify from "../../use/notify"
// Reactive state variables
const { notify } = useNotify();
const notifys=ref(false)
const search = ref("");
const commingEvent = ref([]);
const error = ref(null);
const isLoading = ref(true); 
const limit = ref(10);
const offset = ref(0);
const totalEvent = ref(0);
const totalEventRemaining = ref(0);
const showMoredisable = ref(false);
const showLessdisable=ref(false)
const formData=ref({
address:"sdd",
title:"yemn title",
venue:'ere venue',
price:23,

})
const updateModelvalue = (values) => {
  search.value = values;
  console.log(values);
};

const filter = computed(() => {
  const filterValue = {};
  if (search.value) {
    filterValue.venue = { "_ilike": `%${search.value}%` };
  }
  return filterValue;
  //     const filter = computed(() => {
//   const filterValue = {};

//   // Only apply filters if search.value exists
//   if (search.value) {
//     // Apply filters directly to each field
//     filterValue.title = { "_ilike": `%${search.value}%` };
//     filterValue.venue = { "_ilike": `%${search.value}%` };
//     filterValue.address = { "_ilike": `%${search.value}%` };
//   }

//   return filterValue;
// });
});

const { onResult, loading, onError, refetch } = query(fetchEvent, {
  filter: filter,
  limit,
  offset,
});


const {mutate,onDone,onError:insertError,loading:insertLoading}=mutator(insertEvent,{query:formData.value})

// Handle successful query result
onResult(({ data }) => {
  if (data) {
    console.log(data);
    totalEvent.value = data.events_aggregate.aggregate.count;
    commingEvent.value = [...commingEvent.value, ...data.events]; // Append new events
    console.log(commingEvent.value.length);
    if(commingEvent.value.length<=11){
      showLessdisable.value=true

    }
    else if(commingEvent.value.length>11){
      showLessdisable.value=false

    }
  
    totalEventRemaining.value = totalEvent.value - commingEvent.value.length;
    if(totalEventRemaining.value<=0){
      showMoredisable.value=true
                                 }
    else{
      showMoredisable.value=false
    }

  } else {
    error.value = "No events found."; 
  }
  isLoading.value = false;
});

// Handle query errors
onError(() => {
  error.value = "Something went wrong. Please try again later."; 
  isLoading.value = false;
});

const handleSeemore = () => {
  if (totalEventRemaining.value > 0) {
    offset.value += limit.value; // Increase offset by limit
    refetch({ 
       filter: filter,
       limit, 
       offset: offset.value 
       });
   
  } else {
    showMoredisable.value = true; // Disable "See More" if no events left
  }
};

const handleShowless=()=>{
  if(showLessdisable.value===false){
     commingEvent.value.splice(0,limit.value)
     if(commingEvent.value.length<=11){
      showLessdisable.value=true
     }
}
}

const handleNotify=()=>{
  console.log("notification is succesfull in this");
  notifys.value=true
  if(notifys.value){
     notify({
      title: "Success",
      description: "You have successfully registered for the course",
      cardClass: "bg-green-100 dark:bg-gray-800 mt-14",
      icon: "line-md:confirm-circle",
      iconClass: "text-green-400",
      borderClass: "border-l-8 border-green-300 rounded-l-lg",
    });
       

}

}
</script>

<template>
  <div class="container mx-auto p-4">
    <!-- Loading State -->
    <div v-if="isLoading" class="flex items-center justify-center">
      <p class="text-gray-500 text-lg animate-pulse">Loading events...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center">
      <p class="text-red-500 font-semibold">{{ error }}</p>
    </div>

    <!-- Events Grid -->
    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <HTextField
        :modelValue="search"
        name="search"
        type="text"
        class="w-full my-2 bg-slate-100"
        placeholder="Search by venue"
        label="Search by venue"
        leadingIcon="tdesign:search"
        iconLeadingClass="pl-12 py-4"
        @update:modelValue="updateModelvalue"
      />

      <!-- Event Cards -->
      <div
        v-for="event in commingEvent"
        :key="event?.id"
        class="p-4 border rounded shadow hover:shadow-lg transition"
      >
        <h2 class="text-lg font-bold">{{ event?.title }}</h2>
        <p>{{ event?.venue }}</p>
      </div>

      <!-- See More Button -->
      
    </div>
    <div class="flex flex-row gap-2 mt-5 justify-center py-5">
        <button
          :disabled="showMoredisable"
          @click="handleSeemore"
          class="bg-blue-600 text-white px-4 py-3 rounded-xl   disabled:bg-gray-400"
        >
          See More
        </button>
        <button  
        @click="handleShowless"  
          :disabled="showLessdisable"
         class="bg-blue-600 text-white px-4 py-3 rounded-xl   disabled:bg-gray-400"
         >
         Show Less
         </button>
      </div>

      <Tooltip/>
       <HNotification/>
      <button @click="handleNotify" class="bg-sky-700 mt-7 text-white py-1 px-1">click to see modal</button>
      <HSwitch/>
  </div>
</template>

