import { PropagateLoader } from "react-spinners";
import { StyledLoading } from "./style";

const Loading = () => {
  return (
    <StyledLoading>
      <PropagateLoader color="#007BFF" />
    </StyledLoading>
  )
}

export default Loading;
