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
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <Paragraph section>
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </Paragraph>
        <div className="accordion">
          {faq.map((q) => (
            <Faq key={q.id} {...q} />
          ))}
        </div>
        <div className="faqs-btn-container">
          <Button primary>More Info</Button>
        </div>
      </Container>
    </section>
  );
};

export default Faqs;
