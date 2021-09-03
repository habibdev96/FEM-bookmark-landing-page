import styled from "styled-components";
import { headingStyles, textStyles } from "../../abstracts/Mixins";

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

export const CtaHeading = styled(SectionHeading)`
  color: var(--white);
  font-size: 4rem;
`;

export const FeatureHeading = styled.h3`
  ${headingStyles}
  font-size: 3.2rem;
  color: var(--darkBlue);
`;

export const CardHeading = styled.h4`
  ${headingStyles}
  font-size: 2rem;
  color: var(--darkBlue);
`;

export const FaqHeading = styled(CardHeading)`
  ${textStyles}
  font-size: 1.8rem;
`;
