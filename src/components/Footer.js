import styled from "styled-components";
import { sectionSpacingSm, maxWidthLg } from "../abstracts/Mixins";
import logoLight from "../assets/logo-light-bookmark.svg";
import NavLink from "./styledElements/NavLink";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: var(--darkBlue);
`;

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: flex;
  align-items: center;
  justify-content: space-between;

  .footer-links,
  .footer-list,
  .footer-socials {
    display: flex;
    align-items: center;
    gap: var(--gap);
  }

  .footer-icon {
    color: var(--white);
    font-size: var(--md);
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      color: var(--softRed);
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <div className="footer-links">
          <img src={logoLight} alt="bookmark logo" className="footer-logo" />
          <ul className="footer-list">
            <li>
              <NavLink footer href="#!">
                Features
              </NavLink>
            </li>
            <li>
              <NavLink footer href="#!">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink footer href="#!">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-socials">
          <a href="#!">
            <FaFacebookSquare className="footer-icon" />
          </a>
          <a href="#!">
            <FaTwitter className="footer-icon" />
          </a>
        </div>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
