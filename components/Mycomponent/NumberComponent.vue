<!-- @format -->

<script setup>
import { useField } from "vee-validate";
const props = defineProps({
  modelValue: {
    type: Number,
    default: undefined,
  },
  name: {
    type: String,
    default: undefined,
    required: true,
  },
  id: {
    type: String,
    default: undefined,
    required: false,
  },
  type: {
    type: String,
    default: "text",
    required: false,
  },
  placeholder: {
    type: String,
    default: undefined,
    required: false,
  },
  label: {
    type: String,
    default: undefined,
    required: false,
  },
  labelClass: {
    type: String,
    default: () => "",
    required: false,
  },
 

  class: String,
  iconLeadingClass: String,
  placeholderStyle: String,
  iconBackground: Boolean,
  mainDiv: String,
  inputClass: String,
  iconTraillingClass: String,
});
const emit = defineEmits(["update:modelValue"]);
console.log('Validation rules:', props.rules);
console.log(props.modelValue)
const {
  errorMessage,
  value: inputValue,
  meta,
}=useField(props.name, props.rules,{
  initialValue: props.modelValue,
});

const type = ref(props.type);

const set = (event) => {
  emit("update:modelValue", event.target.value);
};



watch(
  () => props.modelValue,
  (newVal) => {
    inputValue.value = newVal;
  }
);



const clear = () => {
  inputValue.value = "";
  emit("update:modelValue", undefined);
};
</script>
<template>
  <div :class="mainDiv">
  <div class="flex gap-x-1">
<label :for="props.id" :class="['text-sm font-medium text-gray-700', props.labelClass]">
      {{ props.label }}
    </label>    </div>
     <div
      class="relative flex rounded-lg font-body shadow-sm group"
      :class="props.class"
    >

      <div class="flex-1 flex relative mt-2">
       
        <input
          v-model="inputValue"
          @input="set($event)"
          @change="set($event)"
          :type="props.type"
          :name="props.name"
          :id="id"
        class="block w-[20rem] rounded-lg font-body text-base text-gray-700 placeholder-transparent focus:placeholder-gray-400 focus:outline-none  transition-all duration-300 shadow-sm border border-gray-300 py-2 pl-10 pr-10"
         
          aria-invalid="true"
        />

      </div>
    </div>
   
  </div>
</template>