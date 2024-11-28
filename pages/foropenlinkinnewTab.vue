<script setup>
const link="https://www.this is link in new tab"

const openLinknuwTab=(url)=>{

    window.open(url,"_blank")
}

</script>

<template>
    <div>
      <button @click="openLinknuwTab(link)" class="text-slate-200 bg-indigo-800 rounded-2xl">Oppen</button>
    </div>
</template>