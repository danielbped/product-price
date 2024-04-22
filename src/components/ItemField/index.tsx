import { IItemField } from "../../interfaces";
import { StyledItemField, StyledItemLabel, StyledItemValue } from "./style";

const ItemField = (props: IItemField): JSX.Element => {
  return (
    <StyledItemField $fullWidth={props.fullWidth}>
      <StyledItemLabel>
        { props.label }
      </StyledItemLabel>
      <StyledItemValue>
        { props.value }
      </StyledItemValue>
    </StyledItemField>
  )
}

export default ItemField;