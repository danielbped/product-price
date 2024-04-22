import { IPackItem } from "../../interfaces";
import ItemField from "../ItemField";
import { StyledPackItem } from "./styles";

const PackItem = (props: IPackItem): JSX.Element => {
  const handlePackValue = () => Number(props.pack.value) !== 0 ? props.pack.value : (Number(props.pack.product.sales_price) * Number(props.pack.qty)).toFixed(2);

  return (
    <StyledPackItem>
      <ItemField label="Name do Produto" value={ props.pack.product.name  }/>
      <ItemField label="Quantidade" value={ `${props.pack.qty} unidade(s)` } />
      <ItemField label="Valor" value={ `R$ ${handlePackValue()}` } />
    </StyledPackItem>
  )
}

export default PackItem;