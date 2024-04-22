import ProductsImage from '../../assets/3652015.svg'
import { StyledSideSection, StyledSideSectionImage, StyledSideSectionTitle } from './style';

const SideSection = (): JSX.Element => {
  return (
    <StyledSideSection>
      <StyledSideSectionTitle>Product Prices</StyledSideSectionTitle>
      <StyledSideSectionImage src={ ProductsImage } alt="Ilustração de produtos"/>
    </StyledSideSection>
  )
}

export default SideSection;