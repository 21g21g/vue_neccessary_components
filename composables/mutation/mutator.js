import { useMutation } from "@vue/apollo-composable";
import { ref } from "vue"; // Import ref from vue

const role_ = ref("anonymous");
const defaultClientId = ref("");

export default function (query, clientId) {
  const { mutate, onDone, loading, onError } = useMutation(query, () => ({
    fetchPolicy: "network-only",
    clientId: clientId || defaultClientId.value,

    // context: {
    //   headers: {
    //     "x-hasura-role": role_.value,
    //   },
    // },
  }));
  // onError((err) => notify(parse(err)));
  return {
    mutate,
    loading,
    onDone,
    onError,
  };
}
