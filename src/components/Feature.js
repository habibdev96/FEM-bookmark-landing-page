import styled from "styled-components";
import { sectionSpacingSm } from "../abstracts/Mixins";
import { FeatureHeading } from "./styledElements/Headings";
import Paragraph from "./styledElements/Paragraphs";
import Button from "./styledElements/Buttons";
import Responsive from "../abstracts/Responsive";

const Article = styled.article`
  ${sectionSpacingSm}
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: var(--gap);

  ${Responsive.md`
    grid-template-columns: 1fr;
  `}

  .feature-info {
    ${Responsive.md`
      order: -1;
      text-align: center;
    `}
  }
`;

const Feature = ({ image, heading, description }) => {
  return (
    <Article>
      <img src={image} alt={heading} className="feature-img" />
      <div className="feature-info">
        <FeatureHeading>{heading}</FeatureHeading>
        <Paragraph>{description}</Paragraph>
        <Button primary href="#!">
          More Info
        </Button>
      </div>
    </Article>
  );
};

export default Feature;
