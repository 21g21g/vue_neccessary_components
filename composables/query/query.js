import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
const defaultOffset = ref(0);
const defaultLimit = ref(10); 
const defaultFilter = ref({});
const defaultEnabled = ref(true);
// const role_ = ref("primary:user");
const defaultIsFeatured = ref({});
const defaultClientId = ref("AnonymousHahu");

export default function (
  query,
  {
    filter = defaultFilter,
    is_featured = defaultIsFeatured,
    limit = defaultLimit,
    offset = defaultOffset,
    enabled = defaultEnabled,
    clientId = defaultClientId,
    // role = role_,
  } 
) {
  const { onResult, loading, onError, refetch } = useQuery(
    query,
    () => ({
      limit: limit?.value,
      offset: offset?.value,
      is_featured: is_featured.value,
      filter: filter?.value,
      clientId:clientId?.value,
    }),
    () => ({
      fetchPolicy: "network-only",
    //   clientId: clientId.value,
      enabled: enabled.value, // Ensure `enabled` is passed as a value
    })
  );

  return {
    onResult,
    loading,
    refetch,
    onError,
  };
}
