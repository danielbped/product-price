import Loading from "../../components/Loading";
import PackList from "../../components/PackList";
import usePackData from "../../hooks/usePackData";
import { StyledErrorMessage, StyledHeader, StyledPacks } from "./style";

const Packs = (): JSX.Element => {
  const { data, isLoading, error, isError } = usePackData();

  return (
    <StyledPacks>
      <StyledHeader>Pacotes</StyledHeader>
      { isLoading && <Loading /> }
      { !isLoading && data && <PackList data={ data } /> }
      { !isLoading && isError && error && <StyledErrorMessage>
        <p>Houve um erro ao buscar os pacotes disponíveis.</p>
        <p>Motivo: {error.message || error.response.data.message}</p>
      </StyledErrorMessage> }
    </StyledPacks>
  )
}

export default Packs;