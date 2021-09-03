import styled, { css } from "styled-components";
import Responsive from "../../abstracts/Responsive";

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

      ${Responsive.xl`
        top: 40%;
      `}

      ${Responsive.lg`
        top: 50%;
        height: 25%;
      `}

      ${Responsive.md`
        top: 25%;
        height: 30%;
      `}

      ${Responsive.sm`
        top: 30%;
        height: 20%;
      `}
    `}

  ${({ feature }) =>
    feature &&
    css`
      border-bottom-right-radius: 30%;
      top: 60%;
      left: -15%;
      height: 30%;

      ${Responsive.md`
        height: 20%;
        top: 75%;
      `}

      ${Responsive.xs`
        top: 80%;
        height: 13%;
      `}
    `}
`;

export default BgPattern;
