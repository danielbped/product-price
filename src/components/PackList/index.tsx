import { IPackList, Pack } from "../../interfaces";
import PackItem from "../PackItem";
import { StyledPackList } from "./style";

const PackList = (props: IPackList): JSX.Element => {
  return (
    <StyledPackList>
      { props.data.map((Pack: Pack) => <PackItem pack={ Pack } />) }
    </StyledPackList>
  )
}

export default PackList;