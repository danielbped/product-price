import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledFileName = styled.p`
  margin: 1rem;
  font-size: 1rem;
`;

export const StyledRemoveFileButton = styled.button`
  border: none;
  color: red;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: all.3s ease-in-out;
  }
`;

export const StyledFileField = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid grey;
  border-radius: 1rem;
  padding: .5rem;
  margin-top: 1rem;
`;