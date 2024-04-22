import styled from "styled-components";

export const StyledActionBar = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 4rem;
`;

export const StyledActionBarLink = styled.p<{ $selected?: boolean; }>`
  cursor: pointer;
  text-decoration: ${props => (props.$selected ? "underline" : "none")};
  font-weight: ${props => (props.$selected ? "bold" : "normal")};

  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    transition: all.3s ease-in-out;
  }
`;