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
  }
`;

const Downloads = () => {
  const [downloadsCards, setDownloadsCards] = useState(downloadsData);

  return (
    <section>
      <Container>
        <SectionHeading data-aos="fade-up">
          Download the extension
        </SectionHeading>
        <Paragraph section data-aos="fade-up" data-aos-delay="100">
          We’ve got more browsers in the pipeline. Please do let us know if
          you’ve got a favourite you’d like us to prioritize.
        </Paragraph>
        <div className="downloads" data-aos="fade-in" data-aos-delay="300">
          {downloadsCards.map((card) => (
            <DownloadCard key={card.id} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Downloads;
