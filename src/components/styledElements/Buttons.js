import styled, { css } from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";

const Button = styled.a`
  ${headingStyles}
  text-transform: uppercase;
  font-size: 1.5rem;
  display: inline-block;
  padding: 1rem 2rem;
  box-shadow: var(--mainShadow);
  border-radius: var(--mainRadius);
  transition: var(--mainTransition);

  &:hover,
  &:focus {
    box-shadow: var(--activeShadow);
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: var(--softRed);
      border: 0.2rem solid var(--softRed);
      color: var(--white);

      &:hover,
      &:focus {
        background-color: transparent;
        color: var(--softRed);
      }
    `}
`;

export default Button;
