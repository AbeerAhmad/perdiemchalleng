import { useState } from "react";

const useApiRequest = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (callback: any) => {
    setLoading(true);
    setError(null);

    try {
      const response = await callback;
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, fetchData, isLoading, error };
};

export default useApiRequest;
