import { IAlertModal } from "../../interfaces"
import { StyledAlertModal } from "./styles";

const AlertModal = (props: IAlertModal): JSX.Element => {
  return (
    <StyledAlertModal
      onClick={ () => props.onClick() }
      className={ props.className }
    >
      { props.message }
    </StyledAlertModal>
  )
};

export default AlertModal;
