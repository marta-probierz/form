import styled from "styled-components";

import warning from "../assets/warning.svg";

export const WarningIcon = styled.img.attrs({
  src: `${warning}`,
})`
  display: none;
  padding-right: 12px;
  &.invalid {
    display: block;
    position: absolute;
    top: 25.3rem;
    align-self: flex-end;
    padding-right: 1.5rem;
  }
`;
