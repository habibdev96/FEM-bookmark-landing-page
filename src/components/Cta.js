import styled from "styled-components";
import { maxWidthLg, sectionSpacingMd, textStyles } from "../abstracts/Mixins";
import { CtaHeading } from "./styledElements/Headings";
import Paragraph from "./styledElements/Paragraphs";
import Button from "./styledElements/Buttons";

const Section = styled.section`
  background-color: var(--softBlue);
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  text-align: center;

  .cta-form {
    padding-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  .cta-input {
    ${textStyles}
    outline: 0;
    border: 0;
    font-size: 1.4rem;
    padding: 1rem 2rem;
    width: 35%;
    border-radius: var(--mainRadius);
    box-shadow: var(--mainShadow);

    &:hover,
    &:active,
    &:focus {
      box-shadow: var(--activeShadow);
    }
  }
`;

const Cta = () => {
  return (
    <Section>
      <Container>
        <Paragraph cta>35,000+ already joined</Paragraph>
        <CtaHeading>Stay up-to-date with what we’re doing</CtaHeading>
        <form className="cta-form">
          <input
            type="text"
            className="cta-input"
            placeholder="Enter your email address"
          />
          <Button secondaryCta>Contact Us</Button>
        </form>
      </Container>
    </Section>
  );
};

export default Cta;
