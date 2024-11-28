import { ref } from "vue";
import { useQuery } from "@vue/apollo-composable";

const defaultOffset = ref(0);
const defaultLimit = ref(10); 
const defaultFilter = ref({});
const defaultOrderBy = ref([]); // Initialize with an empty array or desired default order
const defaultEnabled = ref(true);
const defaultIsFeatured = ref({});
const defaultClientId = ref("AnonymousHahu");

export default function (
    query,
    {
      filter = defaultFilter,
      is_featured = defaultIsFeatured,
      limit = defaultLimit,
      offset = defaultOffset,
      orderBy = defaultOrderBy,
      enabled = defaultEnabled,
      clientId = defaultClientId,
    } = {} // Default to an empty object
  ) {
    const { onResult, loading, onError, refetch } = useQuery(
      query,
      () => ({
        limit: limit?.value || 10, // Default if undefined
        offset: offset?.value || 0,
        is_featured: is_featured?.value || false,
        filter: filter?.value || {}, // Default to empty object if undefined
        orderBy: orderBy?.value || [], // Default to empty array if undefined
      }),
      () => ({
        fetchPolicy: "network-only",
        enabled: enabled?.value ?? true, // Default to true if undefined
      })
    );
  
    return {
      onResult,
      loading,
      refetch,
      onError,
    };
  }
  