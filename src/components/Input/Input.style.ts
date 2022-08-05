import styled from "styled-components";

export const InputContainer = styled.div`
  width: 25rem;
  margin: 1rem;
`;

export const InputLabel = styled.label`
  align-self: flex-start;
  font-weight: 500;
  font-size: 18px;
  color: ${(props) => props.theme.fontColor};
`;

export const Int = styled.input`
  align-self: flex-start;
  margin-top: 3px;
  padding: 12px 16px;
  width: 100%;
  height: 48px;
  background: ${(props) => props.theme.background};
  font-size: 18px;
  color: ${(props) => props.theme.fontColor};
  border: 1px solid ${(props) => props.theme.fontColor};
  &:focus {
    outline: none;
  }
  &.invalid {
    border: 1px solid #222222;
    box-shadow: 0px 0px 0px 2px #a3270c;
  }
`;
