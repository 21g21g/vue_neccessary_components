<script setup>
import { ref, watch, computed,onMounted } from "vue";
import { useField } from "vee-validate";
const emit = defineEmits(['update:modelValue']);
const noValue=ref('')
const search=ref('')
const selected=ref(null)
const ShowNovalue=ref(false)
const placeholders=ref('')
const props = defineProps({
  label: {
    type: String,
  },
  options: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  selectId: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    default: '',
  },
  classProp:{
    type:String,
  },

  rules:{
    type:String
  }
});

const {
  errorMessage,
  value: inputValue,
  meta,
} = useField(props.name, props.rules, {
  initialValue: props.modelValue,
});




const isOpen = ref(false);


const filteredOptions = computed(() => {

  
  const results = props.options.filter(option =>
    option.text.toLowerCase().includes(search.value.toLowerCase())
  );

  if (results.length === 0) {
    ShowNovalue.value = true;
    noValue.value = "No results found";
  } else {
    ShowNovalue.value = false;
  }

  return results;
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;


};

const selectOption = (option) => {
  inputValue.value = option.value;
  selected.value=option.value
  console.log(selected.value)
  search.value=''
  emit('update:modelValue', option.value);
  isOpen.value = false;
};


// Close dropdown when clicking outside
const closeDropdown = (event) => {
  if (!event.target.closest('.dropdown')) {
    isOpen.value = false;
  }
};


// Listen for clicks outside the dropdown to close it
onMounted(()=>{
window.addEventListener('click', closeDropdown);

})
watch(()=>props.modelValue,
(newVal)=>{
    inputValue.value=newVal
    emit("update:modelValue",newVal)
}
)


</script>

<template>
  <div class="relative dropdown">
    <div class="border relative  flex items-center max-w-[20rem]
      rounded  " @click="toggleDropdown">
        <input 
         readonly
         :name="name" 
        class="p-2  cursor-pointer w-[20rem]" 
       :class="classProp"
       v-model="inputValue" 
       :placeholder="inputValue || props.label"
    />
    <Icon 
      name="tabler:chevron-down" 
      width="25" 
      height="25" 
      color="gray" 
      class="absolute right-2 top-4" 
    />


    </div>
    
      <div v-if="isOpen" class="absolute z-10  w-[20rem] bg-white border  rounded shadow-lg">
   

      <p class="px-7 py-4" v-if="ShowNovalue">{{noValue}}</p>
      <div  class="max-h-60 overflow-y-auto">
        <div v-for="option in filteredOptions" :key="option.value" @click="selectOption(option)" class="p-2 cursor-pointer">

          <h1 class="relative" v-if="option.text===selected">{{ option.text}}  
         
          </h1>
          <h1 v-else>{{option.text}}</h1>
        </div>
      </div>
    </div>

  
  </div>
</template>


