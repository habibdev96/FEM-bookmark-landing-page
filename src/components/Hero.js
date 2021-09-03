import styled from "styled-components";
import heroImg from "../assets/illustration-hero.svg";
import { HeroHeading } from "./styledElements/Headings";
import Paragraph from "./styledElements/Paragraphs";
import Button from "./styledElements/Buttons";
import { maxWidthLg, sectionSpacingMd } from "../abstracts/Mixins";
import BgPattern from "./styledElements/BgPattern";
import Responsive from "../abstracts/Responsive";

const Header = styled.header`
  position: relative;
  overflow: hidden;
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

  ${Responsive.md`
    grid-template-columns: 1fr;
    text-align: center;
  `}

  .hero-btn-container {
    display: flex;
    align-items: center;
    gap: var(--gap);

    ${Responsive.lg`
      gap: 2rem;
    `}

    ${Responsive.md`
      justify-content: center;
    `}
  }

  .hero-img {
    ${Responsive.md`
      order: -1;
    `}
  }
`;

const Hero = () => {
  return (
    <Header>
      <Container>
        <div className="hero-info">
          <HeroHeading data-aos="fade-up">
            A Simple Bookmark Manager
          </HeroHeading>
          <Paragraph data-aos="fade-up" data-aos-delay="100">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </Paragraph>
          <div
            className="hero-btn-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
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
          data-aos="zoom-in"
        />
      </Container>
      <BgPattern hero data-aos="fade-in" data-aos-delay="300" />
    </Header>
  );
};

export default Hero;
