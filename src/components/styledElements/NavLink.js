import styled, { css } from "styled-components";
import { textStyles } from "../../abstracts/Mixins";

const NavLink = styled.a`
  ${textStyles}
  text-transform: uppercase;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--darkBlue);
  transition: var(--mainTransition);

  &:hover,
  &:focus {
    color: var(--softRed);
  }

  ${({ mobile }) =>
    mobile &&
    css`
      color: var(--white);
      font-size: 2rem;
      letter-spacing: 0.5rem;

      &:hover,
      &:focus {
        color: var(--softRed);
      }
    `}

  ${({ footer }) =>
    footer &&
    css`
      color: var(--white);

      &:hover,
      &:focus {
        color: var(--softRed);
      }
    `}
`;

export default NavLink;
