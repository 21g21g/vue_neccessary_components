<script setup>

import { ref } from "vue";

const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

watch(()=>selectedCity.value,(newValue)=>{
    console.log(newValue)
})
</script>
<template>
    <div class="bg-gray-700">

        <!-- <HfetchEvent/> -->
        <section class="min-h-screen bg-slate-500" id="dashboard">
            <LandingDashboard/>
             </section>
              <section class="min-h-screen bg-slate-50" id="team">
                <LandingTeam/>
            </section>
             <section class="min-h-screen " id="projects">
                <LandingProjects/>
             </section >
           
            <section class="min-h-screen bg-slate-600" id="calendar">
                 <LandingCalender/>
            </section>
               <div class="card flex justify-center">
        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Select a City" class="w-full md:w-56" />
    </div>
       
    </div>
</template>
<style >
html{
    scroll-behavior: smooth;
}

</style>