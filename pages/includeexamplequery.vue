<script setup>
// query($filter:events_bool_exp,$someText:Boolean!){
//   events(where:$filter){
//     address@include(if:$someText)
//     price
//   }
// }
//{"filter": {"_and": [{"price": {"_eq": "free"}},{"venue":{"_eq": "hawasa"}},{"address": {"_eq": "stadium"}}]},"someText": false}
//the above query is used for @include directives it is used for make conditional for the query for exxample for the above if we give
// the value of someText field false the address is not not fetched, but if we give its value true the address is fetched.
// Here, we query for articles, ordered by their rating in descending order, and then by their author's id in ascending order.

// query ArticlesOrderedByRatingAndAuthorId {
//   article(order_by: [{ id: desc }, { author: { id: asc } }]) {
//     title
//     rating
//   }
// }
// https://hasura.io/docs/2.0/api-reference/graphql-api/mutation/
</script>
<template>
    
</template>