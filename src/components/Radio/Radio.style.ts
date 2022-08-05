import styled from "styled-components";

export const RadioContainer = styled.div`
  width: 5rem;
  margin: 1.5rem 1.5rem .5rem;
`;

export const RadioLabel = styled.label`
  position: relative;
  bottom: 0.5rem;
  left: 5px;
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => props.theme.fontColor};
`;

export const Rdo = styled.input`
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.fontColor};
  border: 1px solid ${(props) => props.theme.fontColor};
  cursor: pointer;
  width: 30%;
  height: 2rem;
  &:focus {
    outline: none;
  }
`;
