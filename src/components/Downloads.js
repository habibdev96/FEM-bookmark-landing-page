import { useState } from "react";
import styled from "styled-components";
import {
  maxWidthLg,
  sectionSpacingMd,
  sectionSpacingSm,
} from "../abstracts/Mixins";
import { SectionHeading } from "./styledElements/Headings";
import Paragraph from "./styledElements/Paragraphs";
import { downloadsData } from "../data";
import DownloadCard from "./DownloadCard";

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}

  .downloads {
    ${sectionSpacingSm}
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10rem;

    &:nth-child(1) {
      transform: translateY(-5rem);
    }
  }
`;

const Download = () => {
  const [downloadsCards, setDownloadsCards] = useState(downloadsData);

  return (
    <section>
      <Container>
        <SectionHeading>Download the extension</SectionHeading>
        <Paragraph section>
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </Paragraph>
        <div className="downloads">
          {downloadsCards.map((card) => (
            <DownloadCard key={card.id} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Download;
