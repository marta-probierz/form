import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 16px;
  width: 100vw;
  height: 100vh;
  color: ${(props) => props.theme.fontColor};
`;
