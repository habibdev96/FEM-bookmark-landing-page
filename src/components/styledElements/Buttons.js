import styled, { css } from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";

const Button = styled.a`
  ${headingStyles}
  font-size: 1.5rem;
  display: inline-block;
  padding: 1.5rem 2rem;
  box-shadow: var(--mainShadow);
  border-radius: var(--mainRadius);
  transition: var(--mainTransition);

  &:hover,
  &:focus {
    box-shadow: var(--activeShadow);
  }

  ${({ primary }) =>
    primary &&
    css`
      background-color: var(--softBlue);
      border: 0.2rem solid var(--softBlue);
      color: var(--white);

      &:hover,
      &:focus {
        background-color: transparent;
        color: var(--softBlue);
      }
    `}

  ${({ secondary }) =>
    secondary &&
    css`
      text-transform: uppercase;
      padding: 1rem 2rem;
      background-color: var(--softRed);
      border: 0.2rem solid var(--softRed);
      color: var(--white);

      &:hover,
      &:focus {
        background-color: transparent;
        color: var(--softRed);
      }
    `}

  ${({ tertiary }) =>
    tertiary &&
    css`
      background-color: var(--lightGray);
      border: 0.2rem solid var(--lightGray);
      color: var(--darkBlue);

      &:hover,
      &:focus {
        background-color: transparent;
        border: 0.2rem solid var(--darkBlue);
      }
    `}
`;

export default Button;
