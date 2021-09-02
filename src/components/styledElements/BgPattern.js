import styled, { css } from "styled-components";

const BgPattern = styled.div`
  background-color: var(--softBlue);
  position: absolute;
  height: 60%;
  width: 50%;
  z-index: 1;

  ${({ hero }) =>
    hero &&
    css`
      border-bottom-left-radius: 30%;
      top: 30%;
      right: -10%;
    `}

  ${({ feature }) =>
    feature &&
    css`
      border-bottom-right-radius: 30%;
      top: 60%;
      left: -15%;
      height: 30%;
    `}
`;

export default BgPattern;
