<script setup>
import {ref,computed} from "vue"
import fetchEvent from "../../graphql/fetchEvent.gql"
import fetchTraining from "../../graphql/fetchTraining.gql"
import query from "../../composables/query/query"
const dataStore=ref([])
const error=ref(null)
const loadingStore=ref(false)

const filter=computed(()=>{
    const fiterContain={}
    fiterContain.value={"_and": [{price: {"_eq": "free"}},{venue:{"_eq": "hawasa"}},{address: {"_eq": "stadium"}}]}
    return fiterContain.value
    

})

const {onResult,onError,loading,refetch} =query(fetchTraining,
{
    filter:filter

    })
onResult(({data})=>{
    if(data){
        console.log(data);
        loadingStore.value=false
        error.value=null
        dataStore.value=data?.events
    }
    else{
        error.value="no data exist please try again"
    }
    loadingStore.value=false

})
onError(() => {
  error.value = "Something went wrong. Please try again later."; 
  loadingStore.value = false;
});
</script>
<template>
    
    <div>
        <div v-if="loadingStore">Loading...</div>
        <div v-else-if="error">{{error}}</div>
        <div v-else>
         <div v-for="datas in dataStore" :key="datas">
             <p>{{datas.price}}</p>
             <p>{{datas.venue}}</p>
             <p>{{datas.address}}</p> 

         </div>


        </div>

        <HTabs/>
    </div>
</template>