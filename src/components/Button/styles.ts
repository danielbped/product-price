import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  padding: 1rem;
  border-radius: .5rem;
  margin: 1rem;
  font-weight: bold;

  &.validate {
    background-color: #2da77a;
    color: white;

    &:hover {
      color: white;
      background-color: #01BC6E;
    }
  }

  &.import {
    background-color: #1E2044;
    color: white;

    &:hover {
      color: white;
      background-color: #007BFF;
    }
  }

  &.update {
    background-color: #242e8a;
    color: white;

    &:hover {
      color: white;
      background-color: #4352d9;
    }
  }

  &:hover {
    cursor: pointer;
    transition: all.3s ease-in-out;
  }

  &.disabled {
    color: white:
    background-color: grey;
    cursor: none;
  }
`;