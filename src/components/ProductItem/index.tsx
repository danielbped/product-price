import { IProductItem } from "../../interfaces";
import ItemField from "../ItemField";
import { StyledProductItem } from "./style";

const ProductItem = (props: IProductItem): JSX.Element => {
  return (
    <StyledProductItem>
      <ItemField label="Código do Produto" value={ props.product.code } fullWidth={ true } />
      <ItemField label="Nome do produto" value={ props.product.name } fullWidth={ true } />
      <ItemField label="Valor de custo" value={ `R$ ${props.product.cost_price}` } fullWidth={ true } />
      <ItemField label="Valor de venda" value={ `R$ ${props.product.sales_price}` } fullWidth={ true } />
    </StyledProductItem>
  )
}

export default ProductItem;