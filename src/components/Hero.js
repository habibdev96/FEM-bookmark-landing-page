import styled from "styled-components";
import heroImg from "../assets/illustration-hero.svg";
import { HeroHeading } from "./styledElements/Headings";
import Paragraph from "./styledElements/Paragraphs";
import Button from "./styledElements/Buttons";
import { maxWidthLg, sectionSpacingMd } from "../abstracts/Mixins";
import BgPattern from "./styledElements/BgPattern";

const Header = styled.header`
  position: relative;
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  position: relative;
  z-index: 5;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: var(--gap);

  .hero-btn-container {
    display: flex;
    align-items: center;
    gap: var(--gap);
  }
`;

const Hero = () => {
  return (
    <Header>
      <Container>
        <div className="hero-info">
          <HeroHeading>A Simple Bookmark Manager</HeroHeading>
          <Paragraph hero>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </Paragraph>
          <div className="hero-btn-container">
            <Button primary href="#!">
              Get it on Chrome
            </Button>
            <Button tertiary href="#!">
              Get it on Firefox
            </Button>
          </div>
        </div>
        <img
          className="hero-img"
          src={heroImg}
          alt="illustration of the bookmark app"
        />
      </Container>
      <BgPattern hero />
    </Header>
  );
};

export default Hero;
