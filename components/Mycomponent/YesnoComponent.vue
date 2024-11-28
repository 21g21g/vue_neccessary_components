<script setup>
import { watch, ref, computed } from "vue";
import { useField } from "vee-validate";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String, 
   },

  name: String,
  label: String,
  description: String,
  class: String,
 options: {
    type: Array, 
    default: () => [], 
  },
});

const {
  errorMessage,
  value: inputValue,
  meta,
} = useField(props.name, props.rules, {
  initialValue: props.modelValue,
});
watch(
  () => props.modelValue,
  (newVal) => {
    console.log(newVal)
    
    inputValue.value=newVal
   
  }
);
watch(
  () => inputValue.value,
  (newVal) => {
    emit("update:modelValue", newVal);
  }
);


</script>

<template>
  <div>
     <p class="text-sm font-medium text-gray-700">{{props.label}}</p>
    <div class="relative flex flex-row gap-3 mt-2">
       
      <div class="flex items-center gap-1 h-5" v-for="option in props.options" :key="option.value">
        
        <input
           v-model="inputValue"
          :id="option.value"
          :value="option.value"
          :name="props.name"
           type="radio"
          class="focus:ring-primary text-primary border-primary rounded text-md"
          :class="props.class"
        />
        <label
          :for="option.value"
          class="ml-3 text-gray-900 cursor-pointer text-md"
        >
          {{ option.label }}
        </label>
      </div>
    </div>
  </div>
</template>
