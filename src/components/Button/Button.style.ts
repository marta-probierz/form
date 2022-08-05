import styled from "styled-components";

export const ButtonStyle = styled.button`
  width: 15rem;
  height: 3rem;
  border: 1px solid ${(props) => props.theme.fontColor};
  font-size: 1.5rem;
  text-decoration: none;
  color: #000;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 6px;
  cursor: pointer;
  :hover {
    box-shadow: 0 0 10px gray;
  }
`;
