import styled from "styled-components";

export const StyledPackItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: .4rem;

  &:not(:last-child) {
    border-bottom: 1px solid #d3d3d3;
  }
`;