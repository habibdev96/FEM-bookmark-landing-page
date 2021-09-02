import styled, { css } from "styled-components";
import { textStyles } from "../../abstracts/Mixins";

const Paragraph = styled.p`
  ${textStyles}
  color: var(--grayishBlue);
  padding: 2rem 0;

  ${({ hero }) =>
    hero &&
    css`
      font-size: 1.8rem;
    `}

  ${({ section }) =>
    section &&
    css`
      font-size: 1.8rem;
      text-align: center;
      width: 50%;
      margin: 0 auto;
    `}

  ${({ feature }) =>
    feature &&
    css`
      font-size: 1.8rem;
    `}

  ${({ card }) =>
    card &&
    css`
      font-size: 1.5rem;
    `}
`;

export default Paragraph;
