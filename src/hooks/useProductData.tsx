import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { Product } from "../interfaces";

const { VITE_API_URL } = import.meta.env;

const fetchData = async (): AxiosPromise<Product[]> => {
  const response = await axios.get<Product[]>(VITE_API_URL + '/product');
  return response;
};

const useProductData = () => {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['product-data'],
    retry: false
  });

  return {
    ...query,
    data: query.data?.data
  };
};

export default useProductData;