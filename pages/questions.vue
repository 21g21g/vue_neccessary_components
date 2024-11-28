<script setup>
import {ref} from "vue"
import {Form} from "vee-validate"
const selectedChoice = ref('');
const name=ref('')
const age=ref(null)
const picked=ref(null)
//  const questions=ref([{
//     name:'',
//     age:null,
//     picked:null,
//     selectedChoice:''
//  }])
const choiceOptions = [
  { value: 'student', text: 'student' },
  { value: 'Job Seeker', text: 'Job Seeker' },
  { value: 'Fresh graduate', text: 'Fresh graduate' },

];
const pickedOptions=ref([
            { value: 'yes', label: 'Yes' },
            { value: 'no', label: 'No' },
          
              ])



const handleSubmit=(values)=>{
    console.log(values);
    

}
</script>

<template>
    
    <div class="mx-60  flex flex-col w-[30rem] mt-6 border border-gray-500   h-auto">
        <p class="font-medium text-2xl mx-10 my-3">please fill the following forms?</p>
     <Form @submit="handleSubmit" class="flex flex-col gap-3 ml-10 py-4">
         
        <MycomponentTextComponent
       label="what is your name?"
       :modelValue="name"
        name="name"
        id="my-input-id"
        type="text"
        />
        <MycomponentNumberComponent
        label="How old are you?"
       :modelValue="age"
        name="age"
        id="my-input-id"
        type="number"
        
        />
        <MycomponentChoiceComponent
      label="Choose what describes you the most?"
      :options="choiceOptions"
       name="choice"
      :modalValue="selectedChoice"
      
    />
     
        <MycomponentYesnoComponent
            :modelValue="picked" 
             name="yes_no"
             :options="pickedOptions" 
              label="Do you live alone?"
        
        />
         
         <button type="submit" class="bg-emerald-500 text-zinc-50 mr-16  py-1 w-20 self-end rounded-lg">Submit</button>

          </Form>
    </div>
</template>