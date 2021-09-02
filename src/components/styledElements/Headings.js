import styled from "styled-components";
import { headingStyles } from "../../abstracts/Mixins";

export const HeroHeading = styled.h1`
  ${headingStyles}
  font-size: 4.8rem;
  color: var(--darkBlue);
`;

export const SectionHeading = styled.h2`
  ${headingStyles}
  font-size: 3.2rem;
  text-align: center;
  color: var(--darkBlue);
`;

export const FeatureHeading = styled.h3`
  ${headingStyles}
  font-size: 3.2rem;
  color: var(--darkBlue);
`;
