import { AxiosError } from "axios";
import { useState } from "react";

const useApiRequest = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async (callback: any) => {
    setLoading(true);
    setError('');

    try {
      const response = await callback;
      setData(response.data);
    } catch (error) {
      setError(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, fetchData, isLoading, error };
};

export default useApiRequest;
