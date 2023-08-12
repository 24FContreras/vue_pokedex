import axios from "axios";
import { ref } from "vue";

export const useGetData = () => {
  const data = ref(null);
  const errorData = ref(null);
  const loading = ref(true);

  const getData = async (url) => {
    loading.value = true;
    try {
      const res = await axios.get(url);
      data.value = res.data;

      return res.data;
    } catch (error) {
      data.value = false;
      errorData.value = "Server error. Please try again later";
    } finally {
      loading.value = false;
    }
  };

  return { getData, data, loading, errorData };
};
