import { IButton } from "../../interfaces";
import { StyledButton } from "./styles";

const Button = (props: IButton): JSX.Element => {
  return (
    <StyledButton
      disabled={ props.disabled }
      className={ props.className }
      onClick={ (e) => props.onClick(e) }
    >
      { props.name }
    </StyledButton>
  )
}

export default Button;