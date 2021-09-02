import styled, { css } from "styled-components";

const BgPattern = styled.div`
  background-color: var(--softBlue);
  position: absolute;
  height: 60%;
  width: 50%;
  border-bottom-left-radius: 30%;
  z-index: 1;

  ${({ hero }) =>
    hero &&
    css`
      top: 30%;
      right: -10%;
    `}
`;

export default BgPattern;
