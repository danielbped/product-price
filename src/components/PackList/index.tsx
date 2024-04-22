import { IPackList, Pack } from "../../interfaces";
import PackItem from "../PackItem";
import { StyledEmptyList, StyledPackList } from "./style";

const PackList = (props: IPackList): JSX.Element => {
  return (
    <StyledPackList>
      { props.data.length === 0 && <StyledEmptyList>Nenhum pacote para ser exibido.</StyledEmptyList>}
      { props.data.length !== 0 && props.data.map((Pack: Pack) => <PackItem pack={ Pack } />) }
    </StyledPackList>
  )
}

export default PackList;