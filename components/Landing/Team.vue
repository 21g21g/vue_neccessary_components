<script setup>
import { ref, computed } from 'vue';
const expanded=ref(false)
import developer from "../../graphql/developer.gql"
import list from "../../composables/query/query"
const commingData=ref([])
const error=ref(null)
const handleExpandController=()=>{
    expanded.value=true

}

const handleShrink=()=>{
    expanded.value=false

}
// {"filter": {"course_instructors": {"instructor": {"position": {"_eq": "developer"}}}}}
// {"filter": {"course_instructors": {"instructor": {"position":  {"_eq": "developer"}}}}}

const filter = computed(() => ({
  course_instructors: {
    instructor: {
      position: { _eq: "developer" },
    },
  },
}));

const { onResult, onError, loading } = list(developer, {
  filter: filter.value,
});

// Reactive variables


onResult(({ data }) => {
  if (data?.courses && data.courses.length > 0) {
    commingData.value = data.courses; // Assign courses array
    loading.value = false;
    error.value = null;
  } else {
    commingData.value = null;
    error.value = "There is no data; please try another way.";
    loading.value = false;
  }
});

onError(() => {
  error.value = "Something went wrong. Please try again later.";
  loading.value = false;
});


</script>
<template>
    
<div class="flex  w-full  pt-10">
<div class="flex flex-col  items-center w-full">
<div class=" w-1/2  relative"> 
  <p :class="{'max-h-[15rem]':!expanded,'h-full transition-all duration-1000':expanded}" class="text-center  overflow-y-clip transition-all duration-1000">Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Minima inventore, voluptatum consequatur commodi, 
                itaque delectus vero odit tempora ipsa modi laudantium
                 recusandae provident accusantium id pariatur et aliquam tenetur obcaecati!
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, deleniti saepe? Magni eaque veniam autem
                  facere rerum recusandae animi vero, reprehenderit minus doloribus numquam 
                 necessitatibus vitae labore? Inventore, nesciunt temporibus.
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum quas quidem delectus harum, 
                 voluptates excepturi ab tempora rerum assumenda?
                  Quos nulla a delectus facilis aperiam, sit sint cum debitis. Cum.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta eos laboriosam assumenda aspernatur,
                   unde vitae sunt adipisci eius ex
                   veniam odio tenetur aliquid amet modi. Quia asperiores officiis perspiciatis? Accusamus.
                   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et nesciunt possimus voluptas 
                   odio natus repellendus repellat,
                    ab illum nisi cum perferendis officia, enim eaque error neque eum, sit earum corporis.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet natus maiores aspernatur, 
                    tempore molestias dolorem eaque soluta assumenda. Eveniet beatae pariatur aperiam, sequi eaque
                     dignissimos excepturi eum a in illum.
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, in esse consectetur 
                     quisquam eum, doloribus unde dolores nihil distinctio dolore veritatis? Rem placeat quam 
                     reprehenderit beatae, iste enim ipsum molestiae.
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum doloremque aut sapiente 
                     repudiandae, magnam velit et molestiae. Veniam odit ad aliquid laborum reprehenderit. Aut,
                      ullam omnis! Velit officia repellat explicabo?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ipsum cum sed! Quasi
                       eius recusandae ea consectetur, maiores nostrum, eligendi asperiores hic similique 
                       dolorem veniam quo quia amet voluptas debitis.
                 </p>
              <div v-if="!expanded" class="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-t from-white to-white/0 pointer-events-none"></div>
             </div>
           <button v-if="!expanded" @click="handleExpandController" class="bg-blue-600 text-white font-bold py-1 px-1 mt-1 w-32 rounded-xl hover:bg-purple-800 transition-all duration-300">Show More</button>
            <button v-else @click="handleShrink"  class="bg-blue-600 text-white font-bold py-1 px-1 mt-1 w-32 rounded-xl hover:bg-purple-800 transition-all duration-300">Show Less</button>

            <div>
                <div v-if="loading">Loading...</div>
                <div v-else-if="error">{{error}}</div>
                <div v-else>
                    <div v-for="com in commingData" :key="com">
                        <p>{{com.title}}</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>