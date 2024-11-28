<script setup>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { ref } from "vue";

import {Dummy} from "../use/Dummy"
// const settings = ref({
//   itemsToShow: 3,
//   snapAlign: "start",
// });
const breakpoints = ref({
  // Extra-small screens (mobile devices)
  0: {
    itemsToShow: 1,
    snapAlign: "start",
  },
  // Small screens (e.g., larger smartphones)
  480: {
    itemsToShow: 1.5,
    snapAlign: "start",
  },
  // Small tablets
  640: {
    itemsToShow: 2,
    snapAlign: "start",
  },
  // Large tablets or small laptops
  768: {
    itemsToShow: 2.5,
    snapAlign: "start",
  },
  // Medium screens (e.g., typical laptops)
  1024: {
    itemsToShow: 3,
    snapAlign: "start",
  },
  // Large screens (e.g., desktops)
  1280: {
    itemsToShow: 3.5,
    snapAlign: "start",
  },
  // Extra-large screens (e.g., large desktops)
  1536: {
    itemsToShow: 4,
    snapAlign: "start",
  },
  // Ultra-wide screens
  1920: {
    itemsToShow: 5,
    snapAlign: "start",
  },
});
</script>
<template>
 <div class="min-h-screen bg-black pt-5 flex w-full px-3">
   <carousel
  :wrapAround="true"
  :autoplay="0"
  :transition="700"
  :breakpoints="breakpoints"
  class="relative w-auto mt-4 md:mt-7 h-full overflow-hidden"
      >
        <slide
           
          v-for="dum in Dummy"
          :key="dum.id"
           class="px-0  dark:text-white h-auto py-2"

        >
          <CorosolCard :dummy="dum" />
        </slide>
            <template 
             
            #addons>
            <div class="mt-4">
             <navigation />
            <pagination />
            </div>
    
       </template>
 
         </carousel>
   </div>  
</template>
<style>
::-webkit-scrollbar {
  width: 0px;
  height: 1px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #f1f1f1;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #596474;
  border-radius: 3px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #596474;
}

:root {
  /* Color */
  --vc-clr-primary: #00dcac00;
  /* --vc-clr-secondary: #009688; */
  --vc-clr-secondary: rgba(0, 150, 136, 0.4);
  --vc-clr-white: #ffffff;
  --vc-clr-hsecondary: #e5e5e5;
  --vc-clr-pagprimary: #009688;

  /* Icon */
  --vc-icn-width: 1.2em;

  /* Navigation */
  --vc-nav-width: 70px;
  --vc-nav-height: 70px;
  --vc-pgn-height: 7px;
  /* --vc-nav-color: #009688; */
  --vc-nav-color: rgba(0, 150, 136, 0.4);
  --vc-pgn-border-radius: 19px !important;
  --vc-nav-background-color: var(--vc-clr-primary);
  --vc-pgn-background-color: var(--vc-clr-hsecondary);
  --vc-pgn-active-color: var(--vc-clr-pagprimary);
  --vc-pgn-margin: 0px;
}
.carousel__pagination-button {
  background-color: var(--vc-pgn-background-color);
  height: 7px;
  width: 20px;
  border-radius: 30%;
}

.carousel__pagination-button--active {
  background-color: var(--vc-pgn-active-color);
  gap: 10px;
  height: var(--vc-pgn-height);
  border-radius: 30%;
  /* height: var(--vc-nav-height);
  width: var(--vc-nav-width);
  border-radius: 30%; */
}
.carousel__pagination {
  display: flex;
  justify-content: center;
  pad: 0px;
  gap: 10px;
}
.carousel__prev,
.carousel__next {
  color: #058075;
  padding: 5px; 
  width: 70px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, border-color 0.3s ease; /* Smooth transitions */
  position: absolute; /* Position them absolutely inside the carousel */
  top: 50%; /* Center vertically */
  transform: translateY(-50%); /* Adjust for centering */
  z-index: 10; /* Ensure they appear above content */
/*  background: rgba(0, 0, 0, 0.6); /* Semi-transparent background for better visibility */
  /*border-radius: 50%; /* Circular arrows */
}

.carousel__prev {
  left: 10px; /* Position on the left */
}

.carousel__next {
  right: 10px; /* Position on the right */
}

.carousel__icon {
   width: 120px;
  height: 100px;
  fill: #046654; 
}
/* Hide arrows for medium screens and smaller */
@media (max-width: 768px) {
  .carousel__prev,
  .carousel__next {
    display: none;
  }
}

/* Show arrows for medium screens and larger */
@media (min-width: 768px) {
  .carousel__prev,
  .carousel__next {
    display: flex;
  }
}
</style>
