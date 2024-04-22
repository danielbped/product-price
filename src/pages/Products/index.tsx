import { StyledHeader, StyledProducts } from "./style";
import useProductData from "../../hooks/useProductData";
import Loading from "../../components/Loading";
import ProductList from "../../components/ProductList";

const Products = (): JSX.Element => {
  const { data, isLoading, error, isError } = useProductData();

  return (
    <StyledProducts>
      <StyledHeader>Produtos</StyledHeader>
      { isLoading && <Loading /> }
      { !isLoading && data && <ProductList data={ data } /> }
      { !isError && error && <p>{error.response.data.message}</p> }
    </StyledProducts>
  )
}

export default Products;