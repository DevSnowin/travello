import React from "react";
import styled from "styled-components";
import { BiTaxi } from "@react-icons/all-files/bi/BiTaxi";
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { Link } from "gatsby";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";

const Header = ({ setIsOpen }) => {
  return (
    <HeaderContainer>
      <Brand to='/'>
        <BiTaxi size={28} />
        <h1>Travello</h1>
      </Brand>
      <NavItems>
        {menuData.map((navLink, i) => (
          <NavLink to={navLink.link} key={i}>
            {navLink.title}
          </NavLink>
        ))}
      </NavItems>
      <NavBtn>
        <Button round='true' primary='true' to='/'>
          Book a Flight
        </Button>
      </NavBtn>
      <MobileBar onClick={() => setIsOpen((prev) => !prev)} />
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
  justify-content: space-between;
  align-items: center;
`;

const Brand = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 0.5rem;
  margin: 24px;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  /* font-weight: bold; */

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`;

const MobileBar = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    font-size: 28px;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 100%);
    cursor: pointer;
  }
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
