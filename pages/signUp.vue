<script setup>
// import  FormComponentInputtext  from "../components/FormComponent/Inputtext.vue";
import { Form,useForm } from "vee-validate";
import {ref} from "vue"

const username=ref('')
const password=ref('')
const email=ref('')
const handleSubmit=(values)=>{
    console.log(values);

}
</script>
<template>
  <div class="bg-slate-300 dark:bg-black min-h-screen w-full flex  justify-center">
    <div class="flex flex-col items-center justify-center mt-9 bg-slate-50 p-6 rounded-lg h-[30rem] shadow-md">
      <h1 class="text-3xl font-bold mb-4 text-center">SignUp Page</h1>
      <Form @submit="handleSubmit" class="flex flex-col justify-center space-y-6 w-[20rem] ">
        <FormComponentInputtext
          label="User Name"
          name="username"
          v-model="username"
          placeholder="Enter your User Name"
          type="text"
          :rules="'required'"
          classProp="w-full"
        />
        <FormComponentInputtext
          label="Email"
          name="email"
          v-model="email"
          placeholder="Enter your Email"
          type="email"
          :rules="'required'"
          classProp="w-full"
        />
        <FormComponentInputtext
          label="Password"
          name="password"
          v-model="password"
          placeholder="Enter your Password"
          type="password"
          :rules="'required||maxCharacterLength:20||minCharacterLength:8'"

          classProp="w-full"
        />
        <button
        type="submit"
          class="text-xl font-medium rounded-lg w-full h-10 py-1 px-1 bg-blue-600 hover:bg-violet-700 transition-all duration-300 text-white"
        >
          Signup
        </button>
      </Form>
      <p class="text-sm font-normal mt-4"><span>Already have a Shopify account? </span> <NuxtLink class="text-blue-700" to="/logIn">Login</NuxtLink></p>

    </div>
  </div>
</template>
