<script setup>
import { useField } from "vee-validate";
import { ref, onMounted, watch } from "vue";

// Emit the event for model updates
const emit = defineEmits(["update:modelValue"]);

// Define props
const props = defineProps({
  modelValue: {
    type: String,
    default: undefined,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  classProp:{
    type:String
  },
  label: {
    type: String,
    default: "",
  },
  min: String,
  max: String,
  rules: {
    type: [String, Object],
    default: "",
    required: false,
  },
});

// vee-validate field setup
const { errorMessage, value: inputValue, meta } = useField(props.name,props.rules);

// watch(
//   () => inputValue.value,
//   (newVal) => {
//     console.log(newVal);
//     if (newVal !== props.modelValue) {
//       emit("update:modelValue", newVal); 
//     }
//   }
// );
 watch(
  () => props.modelValue,
  (newVal) => {
    console.log(newVal);
    if (newVal !== inputValue.value) {
      inputValue.value = newVal; 
    }
  }
);

// Debugging on mount
onMounted(() => {
  console.log("Initial modelValue:", props.modelValue);
});
</script>

<template>
  <div class="flex flex-col gap-1">
    <!-- Label -->
    <label v-if="props.label" class="text-sm font-medium text-gray-700">
      {{ props.label }}
    </label>

    <!-- Input Field -->
    <InputText
      :type="props.type"
      :name="props.name"
      v-model="inputValue"
      :placeholder="props.placeholder"
      :class="props.classProp"
    />

    <!-- Error Message -->
    <p
      class="col-span-5 mt-1 text-sm text-red-600 transition-all duration-300 font-body"
      :class="errorMessage ? 'h-5' : 'h-0'"

    >
      {{ errorMessage }} &nbsp;
    </p>
  </div>
</template>