import styled from "styled-components";

export const StyledItemField = styled.div<{ $fullWidth?: boolean }>`  
  padding: .5rem;  
  width: 25%;

  &:nth-child(2) {
    width: ${props => (props.$fullWidth ? "100%" : "25%")};
  }
`;

export const StyledItemValue = styled.p`
  font-size: .8rem;
  text-align: right;
`;

export const StyledItemLabel = styled.label`
  font-size: .6rem;
  color: #2da77a;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;