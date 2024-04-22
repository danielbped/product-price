import { IProductList, Product } from "../../interfaces";
import ProductItem from "../ProductItem";
import { StyledProductList } from "./style";

const ProductList = (props: IProductList): JSX.Element => {
  return (
    <StyledProductList>
      { props.data.map((product: Product) => <ProductItem product={ product } />) }
    </StyledProductList>
  )
}

export default ProductList;