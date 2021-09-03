import styled from "styled-components";
import logo from "../assets/logo-bookmark.svg";
import NavLink from "./styledElements/NavLink";
import Button from "./styledElements/Buttons";
import { maxWidthLg, sectionSpacingSm } from "../abstracts/Mixins";
import Responsive from "../abstracts/Responsive";

const Container = styled.div`
  ${maxWidthLg}
  ${sectionSpacingSm}
  display: flex;
  align-items: center;
  justify-content: space-between;

  .nav-logo {
    width: 20rem;
  }

  .nav-list {
    display: flex;
    align-items: center;
    gap: var(--gap);

    ${Responsive.md`
      display: none;
    `}
  }
`;

const Navbar = () => {
  return (
    <nav>
      <Container>
        <img src={logo} alt="bookmark logo" className="nav-logo" />
        <ul className="nav-list">
          <li>
            <NavLink href="#!">Features</NavLink>
          </li>
          <li>
            <NavLink href="#!">Pricing</NavLink>
          </li>
          <li>
            <NavLink href="#!">Contact</NavLink>
          </li>
          <Button secondary href="#!">
            Login
          </Button>
        </ul>
      </Container>
    </nav>
  );
};

export default Navbar;
