import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  width: 496px;
  padding: 20px 40px;
  background-color: ${(props) => props.theme.background};
  @media (max-width: 600px) {
    width: 90%;
    padding: 75px 40px;
  }
`;

export const RadioContainer = styled.div`
  display: flex;
`;

export const PhotoContainer = styled.div`
  margin: 1rem 0 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.fontColor};
  padding: 12px 16px;
  width: 25rem;
  @media (max-width: 600px) {
    width: 17rem;
    margin: 2rem;
  }
`;

export const PhotoInput = styled.input`
  cursor: pointer;
  font-size: 18px;
  width: 17rem;
`;

export const Img = styled.img`
  aspect-ratio: 1 / 1;
  width: 100px;
  heigth: 100px;
  margin-right: 1.5rem;
  margin-left: 1rem;
  object-fit: cover;
`;

export const ErrorMsg = styled.div`
  color: ${({ theme }) => theme.colors.warning || "#FF0000"};
  align-self: flex-start;
  font-size: 14px;
  margin: -10px 0 0 12px;
  @media (max-width: 600px) {
    margin: 0 0 0 7px;
  }
`;

export const ErrorRadio = styled.div`
  color: ${({ theme }) => theme.colors.warning || "#FF0000"};
  font-size: 14px;
  margin: 0 15px 0 12px;
`;
