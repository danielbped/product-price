import { StyledErrorMessage, StyledHeader, StyledProducts } from "./style";
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
      { !isLoading && isError && error && <StyledErrorMessage>
        <p>Houve um erro ao buscar os produtos disponíveis.</p>
        <p>Motivo: {error.message || error.response.data.message}</p>
      </StyledErrorMessage> }
    </StyledProducts>
  )
}

export default Products;