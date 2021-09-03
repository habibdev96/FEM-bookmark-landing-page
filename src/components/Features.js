import { useState } from "react";
import styled from "styled-components";
import {
  maxWidthLg,
  sectionSpacingSm,
  sectionSpacingMd,
} from "../abstracts/Mixins";
import { SectionHeading } from "./styledElements/Headings";
import Paragraph from "./styledElements/Paragraphs";
import BgPattern from "./styledElements/BgPattern";
import Feature from "./Feature";
import { featuresData } from "../data";
import Responsive from "../abstracts/Responsive";

const Section = styled.section`
  position: relative;
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  position: relative;
  z-index: 5;

  .tab-container {
    ${sectionSpacingSm}
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 50%;
    margin: 0 auto;

    ${Responsive.md`
      width: 100%;
    `}

    ${Responsive.sm`
      flex-direction: column;
      gap: 2rem;
    `}
  }

  .feature-tab {
    border: 0;
    background-color: transparent;
    height: 100%;
    width: 100%;
    font-size: 1.6rem;
    color: var(--grayishBlue);
    padding: 1rem;

    &:hover,
    &:focus,
    &.active-tab {
      color: var(--darkBlue);
    }

    &.active-tab {
      border-bottom: 0.3rem solid var(--softRed);
    }
  }
`;

const Features = () => {
  const [features, setFeatures] = useState(featuresData);
  const [value, setValue] = useState(0);

  const { image, heading, description } = featuresData[value];

  return (
    <Section>
      <Container>
        <SectionHeading data-aos="fade-up">Features</SectionHeading>
        <Paragraph section data-aos="fade-up" data-aos-delay="100">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </Paragraph>
        <div className="features" data-aos="fade-in" data-aos-delay="200">
          <div className="tab-container">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setValue(index)}
                className={`feature-tab ${index === value && "active-tab"}`}
              >
                {feature.tabTitle}
              </button>
            ))}
          </div>
          <Feature image={image} heading={heading} description={description} />
        </div>
      </Container>
      <BgPattern feature data-aos="fade-in" data-aos-delay="300" />
    </Section>
  );
};
export default Features;
