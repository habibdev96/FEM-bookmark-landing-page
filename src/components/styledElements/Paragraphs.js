import styled, { css } from "styled-components";
import { textStyles } from "../../abstracts/Mixins";
import Responsive from "../../abstracts/Responsive";

const Paragraph = styled.p`
  ${textStyles}
  color: var(--grayishBlue);
  padding: 2rem 0;
  font-size: 1.8rem;

  ${Responsive.sm`
    font-size: 1.5rem;
  `}

  ${({ section }) =>
    section &&
    css`
      font-size: 1.8rem;
      text-align: center;
      width: 50%;
      margin: 0 auto;

      ${Responsive.md`
        width: 100%;
      `}
    `}

  ${({ card }) =>
    card &&
    css`
      font-size: 1.5rem;
    `}

  ${({ faq }) =>
    faq &&
    css`
      font-size: 1.6rem;
    `}

  ${({ cta }) =>
    cta &&
    css`
      font-size: 1.8rem;
      text-transform: uppercase;
      text-align: center;
      letter-spacing: 0.8rem;
      color: var(--white);
    `}
`;

export default Paragraph;
