import styled from "styled-components";

export const StyledAlertModal = styled.div`
  padding: 1rem;
  font-weight: bold;
  border-radius: 1rem;
  position: fixed;
  bottom: 0;
  margin-bottom: 2rem;

  &.success {
    color: white;
    background-color: rgba(0, 128, 0, 0.8);
  }

  &.error {
    color: white;
    background-color: rgba(255, 0, 0, 0.8);
  }
`;