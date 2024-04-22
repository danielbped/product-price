import { IProductList, Product } from "../../interfaces";
import ProductItem from "../ProductItem";
import { StyledEmptyList, StyledProductList } from "./style";

const ProductList = (props: IProductList): JSX.Element => {
  return (
    <StyledProductList>
      { props.data.length === 0 && <StyledEmptyList>Nenhum produto para ser exibido.</StyledEmptyList>}
      { props.data.length !== 0 && props.data.map((product: Product) => <ProductItem product={ product } />) }
    </StyledProductList>
  )
}

export default ProductList;