import { useLocation, useNavigate } from "react-router-dom";
import { StyledActionBar, StyledActionBarLink } from "./style";
import { useEffect, useState } from "react";

const ActionBar = (): JSX.Element => {
  const nagivate = useNavigate();
  const { pathname } = useLocation();
  const [selectedPath, setSelectedPath] = useState('/')

  const handleSelected = (path: string) => selectedPath.includes(path);

  useEffect(() => {
    setSelectedPath(pathname);
  }, [pathname]);

  return (
    <StyledActionBar>
      <StyledActionBarLink $selected={ !handleSelected('packs') && !handleSelected('products') } onClick={ () => nagivate('/') }>Atualizar produtos</StyledActionBarLink>
      <StyledActionBarLink $selected={ handleSelected('products') } onClick={ () => nagivate('/products') }>Produtos</StyledActionBarLink>
      <StyledActionBarLink $selected={ handleSelected('packs') } onClick={ () => nagivate('/packs') }>Pacotes</StyledActionBarLink>
    </StyledActionBar>
  )
}

export default ActionBar;