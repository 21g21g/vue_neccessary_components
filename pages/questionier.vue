<script setup>
  import {ref} from "vue"
  const formOpen = ref(false);
  const initial=ref(0)
  const inputText = ref(null);
  const selectedQuestion = ref(null);
  const questionv2 = ref([]);
  const questiontype = ref([
    { name: "text"},
    { name: "number"},
    { name: "choice"},
    { name: "yes_no"},
     ]);
     const addQuestion = () => {
    const newQuestion = {
    text: "", // Empty text for the new question
    order: questionv2.value.length + 1, // Automatically set the order
    type: null, // Default type is null
    choices: [], // Initialize an empty choices array
   };
   console.log(newQuestion);
  questionv2.value.push(newQuestion); // Add the new question to the array
 };
  const removeQuestion = (index) => {
  if (questionv2.value[index]) {
    questionv2.value.splice(index, 1);
  }
};
   const removeChoise=(questionIdex,choiceIndex)=>{
    if(questionv2.value[questionIdex]?.choices[choiceIndex]){
        questionv2.value[questionIdex].choices.splice(choiceIndex,1)
    }
}
const addChoice = (index) => {
  questionv2.value[index].choices.push({
    text: "", // Empty choice text
  });
};
const hadleDone=()=>{
    //submiting the whole questions
    console.log("the questions:",questionv2.value)
}
const orderUp=(questionIndex,previousQuestionIndex)=>{
     if(questionv2.value[questionIndex] && questionv2.value[previousQuestionIndex]){
        const previousQuestion=questionv2[previousQuestionIndex]
        questionv2.value[previousQuestionIndex]=questionv2.value[questionIndex]
        questionv2.value[questionIndex]=previousQuestion
    }
}
const orderDown=(questionIndex,nextQuestionIndex)=>{
    // check if both questions exis
    // swapp there position
    if(questionv2.value[questionIndex] && questionv2.value[nextQuestionIndex]){
        const nextQuestion=questionv2.value[nextQuestionIndex]
        questionv2.value[nextQuestionIndex]=questionv2.value[questionIndex]
        questionv2.value[questionIndex]=nextQuestion
         }
         }
    </script>
   <template>
    <div class="flex flex-col gap-3">
    <!-- Dynamically render questions -->
    <div v-for="(question, index) in questionv2" :key="index" class="flex flex-row gap-4 ml-10">
      <!-- Input for Question Text -->
      <div class="card flex justify-center">
        <InputText
          v-model="question.text"
          placeholder="Write Your Question?"
        />
      </div>
     <!-- Select for Question Type -->
      <div class="card flex justify-center">
        <Select
          v-model="question.type"
          :options="questiontype"
          optionLabel="name"
          placeholder="Question Type"
          class="w-full md:w-56"
        />
      </div>
       <!-- Remove Button -->
      <svg
        @click="removeQuestion(index)"
        xmlns="http://www.w3.org/2000/svg"
        class="cursor-pointer"
        width="1.5rem"
        height="1.5rem"
        viewBox="0 0 24 24"
      >
      <path fill="red" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-4-8h8v2H8v-2z" />
      </svg>
    </div>
       <!-- Add Question Button -->
    <div>
      <svg
        @click="addQuestion"
        class="ml-4 mt-10 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="2rem"
        height="2rem"
        viewBox="0 0 24 24"
        >
        <path
          fill="green"
          d="M12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8m0-2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2m5 9h-4V7h-2v4H7v2h4v4h2v-4h4z"
        />
      </svg>
    </div>
   <div>
      <button @click="hadleDone" class="bg-purple-800 text-gray-50 hover:bg-fuchsia-700 transition-all duration-500">done</button>
    </div>
  </div>
</template>