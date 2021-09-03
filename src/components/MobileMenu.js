import styled from "styled-components";
import NavLink from "./styledElements/NavLink";
import Button from "./styledElements/Buttons";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";

const Aside = styled.aside`
  background-color: hsla(229, 31%, 21%, 0.9);
  z-index: 4000;
  margin: 1rem auto 0 auto;
  position: fixed;
  height: 100vh;
  width: 100vw;

  @media (min-width: 770px) {
    display: none;
  }

  .menu-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 5rem;
    gap: var(--gap);
  }

  .menu-links {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    padding-top: 10rem;
    gap: var(--gap);
  }

  .menu-socials {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--gap);
  }

  .menu-icon {
    color: var(--white);
    font-size: var(--md);
    transition: var(--mainTransition);

    &:hover,
    &:focus {
      color: var(--softRed);
    }
  }
`;

const MobileMenu = ({ isActive }) => {
  if (isActive) {
    return (
      <Aside>
        <div className="menu-content">
          <ul className="menu-links">
            <li>
              <NavLink mobile href="#!">
                Features
              </NavLink>
            </li>
            <li>
              <NavLink mobile href="#!">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink mobile href="#!">
                Contact
              </NavLink>
            </li>
            <Button mobile href="#!">
              Login
            </Button>
          </ul>
          <div className="menu-socials">
            <a href="#!">
              <FaFacebookSquare className="menu-icon" />
            </a>
            <a href="#!">
              <FaTwitter className="menu-icon" />
            </a>
          </div>
        </div>
      </Aside>
    );
  } else {
    return null;
  }
};

export default MobileMenu;
