<script setup>

const marqueeStyle = {
        duration: 20,
        delay: 0,
        direction: "normal",
        pauseOnHover: true,
        pauseOnClick: true,
        loops: "infinite",
        gradientColor: [200, 255, 300],
        gradientWidth: "100px",
        minWidth: "100%",
      }

</script>

<template>
    
    <div>
                <Vue3Marquee
                :clone="true"
                :duration="marqueeStyle.duration"
                :pauseOnHover="marqueeStyle.pauseOnHover"
                :pauseOnClick="marqueeStyle.pauseOnClick"
                :gradient="true"
                :gradientColor="marqueeStyle.gradientColor"

        >
        <div class="flex flex-row mr-3 w-80"></div>
        <img class="h-56 w-56" src="../assets/la1.jpeg" alt="no image"/>
        <img class="h-56 w-56" src="../assets/la2.jpeg" alt="no image"/>
        <img class="h-56 w-56" src="../assets/la3.jpeg" alt="no image"/>
        <img class="h-56 w-56" src="../assets/la4.jpeg" alt="no image">
        <img class="h-56 w-56" src="../assets/la5.jpeg" alt="no image">

        </Vue3Marquee>
    </div>
</template>