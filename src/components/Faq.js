import { useState } from "react";
import styled from "styled-components";
import { FaqHeading } from "./styledElements/Headings";
import Paragraph from "./styledElements/Paragraphs";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

const Article = styled.article`
  &:nth-child(4) {
    border-bottom: 0.1rem solid var(--grayishBlue);
  }

  .faq-question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2.5rem 0;
    cursor: pointer;
    border-top: 0.1rem solid var(--grayishBlue);
  }

  .active-heading {
    color: var(--softRed);
  }

  .faq-icon {
    font-size: 3rem;

    &--up {
      color: var(--softBlue);
    }

    &--down {
      color: var(--softRed);
    }
  }
`;

const Faq = ({ question, answer }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Article>
      <header className="faq-question" onClick={() => setShowInfo(!showInfo)}>
        <FaqHeading className={showInfo && "active-heading"}>
          {question}
        </FaqHeading>
        {showInfo ? (
          <RiArrowDownSLine className="faq-icon faq-icon--down" />
        ) : (
          <RiArrowUpSLine className="faq-icon faq-icon--up" />
        )}
      </header>
      {showInfo && <Paragraph faq>{answer}</Paragraph>}
    </Article>
  );
};

export default Faq;
