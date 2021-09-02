import styled from "styled-components";
import { CardHeading } from "./styledElements/Headings";
import Paragraph from "./styledElements/Paragraphs";
import cardBgPattern from "../assets/bg-dots.svg";
import Button from "./styledElements/Buttons";

const Card = styled.article`
  text-align: center;
  box-shadow: var(--cardShadow);
  display: flex;
  flex-direction: column;
  border-radius: var(--mainRadius);

  &:nth-child(2) {
    transform: translateY(4rem);
  }

  &:nth-child(3) {
    transform: translateY(8rem);
  }

  .card-img {
    width: 10rem;
    margin: 1rem 0;
  }

  .card-header,
  .card-footer {
    padding: 2rem;
  }
`;

const DownloadCard = ({ image, heading, specs }) => {
  return (
    <Card>
      <header className="card-header">
        <img src={image} alt={heading} className="card-img" />
        <CardHeading>{heading}</CardHeading>
        <Paragraph card>{specs}</Paragraph>
      </header>
      <img src={cardBgPattern} alt="" />
      <footer className="card-footer">
        <Button href="#!" primary>
          Add & Install Extension
        </Button>
      </footer>
    </Card>
  );
};

export default DownloadCard;
