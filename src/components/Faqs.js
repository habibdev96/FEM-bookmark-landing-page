import { useState } from "react";
import styled from "styled-components";
import {
  maxWidthSm,
  maxWidthLg,
  sectionSpacingSm,
  sectionSpacingMd,
} from "../abstracts/Mixins";
import { SectionHeading } from "./styledElements/Headings";
import Button from "./styledElements/Buttons";
import Paragraph from "./styledElements/Paragraphs";
import Faq from "./Faq";
import { faqData } from "../data";
import Responsive from "../abstracts/Responsive";

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}

  .accordion {
    ${sectionSpacingSm}
    ${maxWidthSm}
  }

  .faqs-btn-container {
    text-align: center;
  }
`;

const Faqs = () => {
  const [faq, setFaq] = useState(faqData);

  return (
    <section>
      <Container>
        <SectionHeading data-aos="fade-up">
          Frequently Asked Questions
        </SectionHeading>
        <Paragraph section data-aos="fade-up" data-aos-delay="100">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </Paragraph>
        <div className="accordion" data-aos="fade-in" data-aos-delay="300">
          {faq.map((q) => (
            <Faq key={q.id} {...q} />
          ))}
        </div>
        <div
          className="faqs-btn-container"
          data-aos="fade-in"
          data-aos-delay="300"
        >
          <Button primary href="#!">
            More Info
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Faqs;
