import { useEffect, useState } from "react";
import { ITable, ProductToUpdate, UpdateError } from "../../interfaces";
import { StyledTable, StyledTableSection, StyledTableRow, StyledTableHead, StyledTableCell, MessageField, SuccessMessage, MessageObs, ErrorMessage } from "./styles";
import { FormMessage, FormMessageObs } from "../../enums";

const Table = (props: ITable): JSX.Element => {
  const errorHeaders = ['Erro', 'Código do produto'];
  const productHeaders = ['Código', 'Nome', 'Valor', 'Novo valor']

  const [items, setItems] = useState<ProductToUpdate[] | UpdateError[]>([]);

  useEffect(() => {
    if (props.error?.errors) {
      return setItems(props.error?.errors);
    }

    return setItems(props.products);
  }, [props.products, props.error])

  const headers = props.error ? errorHeaders : productHeaders;

  return (
    <StyledTableSection>
      {props.error &&
        <MessageField>
          <ErrorMessage>{ props.error.message }</ErrorMessage>
          <MessageObs>{ FormMessageObs.ERROR }</MessageObs>
      </MessageField>}
      {!props.error && props.products.length > 0 &&
        <MessageField>
          <SuccessMessage>{ FormMessage.SUCCESS }</SuccessMessage>
          <MessageObs>{ FormMessageObs.SUCCESS }</MessageObs>
        </MessageField>
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