import Loading from "../../components/Loading";
import PackList from "../../components/PackList";
import usePackData from "../../hooks/usePackData";
import { StyledHeader, StyledPacks } from "./style";

const Packs = (): JSX.Element => {
  const { data, isLoading, error, isError } = usePackData();

  return (
    <StyledPacks>
      <StyledHeader>Pacotes</StyledHeader>
      { isLoading && <Loading /> }
      { !isLoading && data && <PackList data={ data } /> }
      { !isError && error && <p>{error.response.data.message}</p> }
    </StyledPacks>
  )
}

export default Packs;