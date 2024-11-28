import { defineRule } from "vee-validate";


export default defineNuxtPlugin((vueApp) => {
    defineRule("onerequired", (value, [], ctx) => {
      return !!value || value?.length || "At least one selection required";
    }),
      defineRule("required", (value, [], ctx) => {
        return !!value || `empty field is not required`;
      }),
    
    defineRule('minMax', (value, [min, max]) => {
       
        const numericValue = Number(value);
        if (numericValue < min) {
          return `This age must be greater than ${min}`;
        }
      
        if (numericValue > max) {
          return `This field must be less than ${max}`;
        }
      
        return true;
      });
      defineRule("maxCharacterLength", (value, [limit], context) => {
    
  
        if (value.length > limit) {
          return `${context.field} must be less than or equal to ${limit}!`;
        }
        return true;
      }),
      defineRule("minCharacterLength", (value, [limit], context) => {
      
  
        if (value.length < limit) {
          return `${context.field} must be greater than or equal to ${limit}!`;
        }
        return true;
      }),


    defineRule("is_required", (value, [], ctx) => {
      return !!value || value?.length || "Field Required";
    }),

      defineRule("max", (value, [max], ctx) => {
        return value <= max ? true : `must be ${max}   or less`;
      }),
      defineRule("min", (value, [min], ctx) => {
        return value >= min ? true : `must be ${min}  or more`;
      })
      
  
 


   
  
  
  });