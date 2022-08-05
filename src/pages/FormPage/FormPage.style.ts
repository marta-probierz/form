import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 496px;
  padding: 20px 40px;
  background-color: ${(props) => props.theme.background};
`;

export const RadioContainer = styled.form`
  display: flex;
`;

export const Img = styled.img`
  aspect-ratio: 1 / 1;
  width: 6rem;
  heigth: 6rem;
  margin-right: 1rem;
`;
