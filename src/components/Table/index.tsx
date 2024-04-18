import { useEffect, useState } from "react";
import { ITable, Product, UpdateError } from "../../interfaces";
import { StyledTable, StyledTableSection, StyledTableRow, StyledTableHead, StyledTableCell, SuccessMessageField, SuccessMessage, SuccessMessageObs, ErrorMessage } from "./styles";

const Table = (props: ITable): JSX.Element => {
  const errorHeaders = ['Erro', 'Código do produto'];
  const productHeaders = ['Código', 'Nome', 'Valor', 'Novo valor'];

  const [items, setItems] = useState<Product[] | UpdateError[]>([]);

  useEffect(() => {
    if (props.error?.errors) {
      return setItems(props.error?.errors);
    }

    return setItems(props.products);
  }, [props.products, props.error])

  const headers = props.error ? errorHeaders : productHeaders;

  return (
    <StyledTableSection>
      {props.error && <ErrorMessage>{ props.error.message }</ErrorMessage>}
      {!props.error && props.products.length > 0 &&
        <SuccessMessageField>
          <SuccessMessage>Produtos validados com sucesso!</SuccessMessage>
          <SuccessMessageObs>Verifique os dados abaixo e finalize a atualização clicando no botão "Atualizar Produtos" acima.</SuccessMessageObs>
        </SuccessMessageField>
      }
      { items.length > 0 && <StyledTable>
        <thead>
          <tr>
            { headers.map((header) => (
              <StyledTableHead>{ header }</StyledTableHead>
            )) }
          </tr>
        </thead>
        <tbody>
          { items?.map((error) => (
              <StyledTableRow>
                { Object.values(error).map((item) => <StyledTableCell>{ item }</StyledTableCell>) }
              </StyledTableRow>
            ))}
        </tbody>
      </StyledTable> }
    </StyledTableSection>
  )
}

export default Table;