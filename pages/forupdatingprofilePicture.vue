<script setup>
import { useUserStore } from "@/stores/user.js";
// import { useForm } from "vee-validate";
// import updateMutation from "@/composables/mutation/Authorizer.js";
// import updateQuery from "@/graphql/mutation/auth/update.gql";
// import useNotify from "@/use/notify";

// const router = useRouter();

// const { handleSubmit } = useForm();
// const localPath = useLocalePath();
// const { notify } = useNotify();
// const userStore = useUserStore();
// const imageUrl = ref("");
// const profileEdit = ref(false);
// imageUrl.value = userStore?.user?.picture;
// const handlePhoneChange = handleSubmit(() => {
//   // console.log("clicked");
//   updateMutate({
//     params: {
//       given_name: first_name.value,
//       middle_name: middle_name.value,
//       family_name: last_name.value,
//       picture: imageUrl.value,
//     },
//   });
// });
// const first_name = ref(userStore?.user?.given_name);
// const middle_name = ref(userStore?.user?.middle_name);
// const last_name = ref(userStore?.user?.family_name);
// const clientId = "Authorizer";
// const role = "primary:user";
// const {
//   mutate: updateMutate,
//   loading: updateLoading,
//   onDone: onUpdateDone,
//   onError: onUpdateError,
// } = updateMutation(updateQuery, clientId, role);
// onUpdateDone(() => {
//   notify({
//     title: "Profile Updated",
//     description: "Profile updated successfully",
//     type: "success",
//     cardClass: "border-l-8 border-green-300 bg-white dark:bg-gray-800 rounded",
//   });
//   profileEdit.value = false;
//   userStore.user.given_name = first_name.value;
//   userStore.user.middle_name = middle_name.value;
//   userStore.user.family_name = last_name.value;
//   userStore.user.picture = imageUrl.value;
// });
</script>
<!-- 
<template>
<div>
this is profile
</div> -->
  <!-- <div
    class="md:w-[80%] w-full h-full flex-col bg-white-100 justify-center items-center dark:border-gray-700 dark:bg-secondary-dark-2 my-3 pl-2 rounded-md border-[1px] transition-all duration-200 ease-in-out transform hover:scale-101 hover:shadow"
  >
    <div class="w-full flex bg-white-100 justify-between">
      <div
        class="w-full h-full space-y-2 p-2 flex-col bg-white-100 justify-center items-center p- relative"
      >
        <div class="inline-block p-4">
          <img
            v-if="userStore?.user?.picture"
            class="w-24 h-24 rounded-full"
            :src="userStore?.user?.picture"
            alt="profile picture"
          />
          <img
            v-else
            class="w-24 h-24 rounded-full"
            src="@/assets/images/place.png"
            alt="profile picture"
          />
        </div> -->

        <!-- <h1 class="text font-poppins font-medium capitalize pt-2">
          <span class="text-gray-500 dark:text-white">Name:</span>
          {{ userStore?.user?.given_name }} {{ userStore?.user.middle_name }}
          {{ userStore?.user?.family_name }}
        </h1>
        <h1
          class="text-xs text-gray-600 font-poppins font-light capitalize text-start"
        ></h1>
      </div>
      <div class="p-5">
        <button @click="profileEdit = true" class="reactiveButton flex">
          <Icon
            name="ri:edit-line"
            width="20"
            height="20"
            class="self-center text-primary-100 mr-1 font-poppins"
          ></Icon
          >{{ $t("edit") }}
        </button>
      </div>
    </div>
  </div>
  <HModal
    autoClose
    v-model="profileEdit"
    wrapperClass="bg-white !w-fit h-full !text-black  flex items-center mx-auto dark:bg-secondary-dark-2"
  >
    <template #content>
      <form
        action=""
        @submit.prevent="handlePhoneChange"
        class="form-group space-y-5 px-2"
      >
        <div class="space-y-4">
          <h1
            class="text font-poppins font-medium capitalize pt-0 dark:text-white text-primary-dark"
          >
            {{ $t("Update_your_profile_settings") }}
          </h1>
          <CommenProfileUploadSetting v-model="imageUrl" />
        </div>
        <div>
          <HTextField
            rules="required"
            name="given_name"
            v-model="first_name"
            label="First Name"
          >
            <template v-slot:label>
              <div
                class="text-sm mb-2 font-medium leading-[35px] text-secondary dark:text-white"
              >
                {{ $t("first_name") }}
              </div>
            </template>
          </HTextField>

          <HTextField
            rules="required"
            name="middle_name"
            v-model="middle_name"
            label="Middle Name"
          >
            <template v-slot:label>
              <div
                class="text-sm mb-2 font-medium leading-[35px] text-secondary dark:text-white"
              >
                {{ $t("middle_name") }}
              </div>
            </template>
          </HTextField>
          <HTextField
            rules="required"
            name="family_name"
            v-model="last_name"
            label="Last Name"
          >
            <template v-slot:label>
              <div
                class="text-sm mb-2 font-medium leading-[35px] text-secondary dark:text-white"
              >
                {{ $t("last_name") }}
              </div>
            </template>
          </HTextField>

          <button
            type="submit"
            class="reactiveButton my-6 flex items-center justify-center"
          >
            {{ $t("update") }}
          </button>
        </div>
      </form>
    </template>
  </HModal> -->
<!-- </template> --> 
<template>
  <div>
  file upload
  </div>
</template>
