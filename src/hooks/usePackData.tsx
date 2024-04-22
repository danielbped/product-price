import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { Pack } from "../interfaces";

const { VITE_API_URL } = import.meta.env;

const fetchData = async (): AxiosPromise<Pack[]> => {
  const response = await axios.get<Pack[]>(VITE_API_URL + '/pack');
  return response;
};

const usePackData = () => {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['pack-data'],
    retry: false
  });

  return {
    ...query,
    data: query.data?.data
  };
};

export default usePackData;