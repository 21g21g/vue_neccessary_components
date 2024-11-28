<script setup>
import { ref,computed } from "vue";
import fetch from "../composables/query/queryAdddefaultorder";
import adaddOrderbydOrder from "../graphql/addOrderby.gql";

const error = ref(null);
const eventData = ref([]);
const loading = ref(true);

// Pass order as an array with one sorting object
// const order = ref([{ venue: "asc" }]);
const order=computed(()=>{
    const orderContain={}
    orderContain.value=[{venue: "asc"}]
    return orderContain.value

})

const { onResult, onError, loading: queryLoading, refetch } = fetch(adaddOrderbydOrder, {
  orderBy: order.value,  
});

onResult(({ data }) => {
  loading.value = false;
  if (data) {
    error.value = null;
    eventData.value = data.events;
  } else {
    error.value = "No data found. Please try again.";
  }
});

onError((err) => {
  error.value = "Something went wrong. Please try again later.";
  loading.value = false;
});

const sortVenue = () => {
  refetch({
    orderBy: order.value,  // Pass as an array to match the schema
  });
};
</script>

<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <div v-for="event in eventData" :key="event.id">
        <p>Venue: {{ event.venue }}</p>
      </div>
    </div>
    <button @click="sortVenue">Sort by Venue</button>
  </div>
</template>
