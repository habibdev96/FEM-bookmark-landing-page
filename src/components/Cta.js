import styled from "styled-components";
import {
  maxWidthLg,
  sectionSpacingMd,
  textStyles,
  headingStyles,
} from "../abstracts/Mixins";
import { CtaHeading } from "./styledElements/Headings";
import Paragraph from "./styledElements/Paragraphs";
import { useForm } from "react-hook-form";
import Responsive from "../abstracts/Responsive";

const Section = styled.section`
  background-color: var(--softBlue);
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingMd}
  text-align: center;

  .cta-form {
    padding-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    ${Responsive.sm`
      flex-direction: column;
    `}
  }

  .cta-input-container {
    width: 45%;
    position: relative;

    ${Responsive.md`
      width: 100%;
    `}
  }

  .cta-input {
    ${textStyles}
    outline: 0;
    border: 0;
    font-size: 1.4rem;
    padding: 1.5rem 2rem;
    width: 100%;
    border-radius: var(--mainRadius);
    box-shadow: var(--mainShadow);

    &:hover,
    &:active,
    &:focus {
      box-shadow: var(--activeShadow);
    }
  }

  .cta-submit {
    ${headingStyles}
    font-size: 1.5rem;
    display: inline-block;
    padding: 1.5rem 2rem;
    cursor: pointer;
    text-transform: uppercase;
    box-shadow: var(--mainShadow);
    border-radius: var(--mainRadius);
    transition: var(--mainTransition);
    background-color: var(--softRed);
    border: 0.2rem solid var(--softRed);
    color: var(--white);

    ${Responsive.sm`
      width: 100%;
    `}

    &:hover,
    &:focus {
      background-color: var(--white);
      color: var(--softRed);
      box-shadow: var(--activeShadow);
    }
  }

  .cta-message {
    ${textStyles}
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.3rem;
    position: absolute;
    top: 1.7rem;
    right: 2rem;
    color: var(--softRed);
    border-radius: var(--mainRadius);
  }
`;

const Cta = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);

  return (
    <Section>
      <Container>
        <Paragraph cta data-aos="fade-up">
          35,000+ already joined
        </Paragraph>
        <CtaHeading data-aos="fade-up" data-aos-delay="100">
          Stay up-to-date with what we’re doing
        </CtaHeading>
        <form
          className="cta-form"
          data-aos="fade-in"
          data-aos-delay="400"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="cta-input-container">
            <input
              type="text"
              className="cta-input"
              autoComplete="off"
              placeholder="Enter your email address"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email",
                },
              })}
            />
            {errors.email && (
              <small className="cta-message">{errors.email.message}</small>
            )}
          </div>
          <input type="submit" value="Contact Us" className="cta-submit" />
        </form>
      </Container>
    </Section>
  );
};

export default Cta;
