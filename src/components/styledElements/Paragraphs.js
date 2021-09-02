import styled, { css } from "styled-components";
import { textStyles } from "../../abstracts/Mixins";

const Paragraph = styled.p`
  ${textStyles}
  color: var(--grayishBlue);
  padding: 2rem 0;
  font-size: 1.8rem;

  ${({ section }) =>
    section &&
    css`
      font-size: 1.8rem;
      text-align: center;
      width: 50%;
      margin: 0 auto;
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
`;

export default Paragraph;
