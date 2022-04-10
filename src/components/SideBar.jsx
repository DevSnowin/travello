import React from "react";
import styled from "styled-components";
import { FaTimes } from "@react-icons/all-files/fa/FaTimes";
import { Link } from "gatsby";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";

const SideBar = ({ isOpen, setIsOpen }) => {
  return (
    <SideBarContainer isOpen={isOpen}>
      <CloseBtn onClick={() => setIsOpen((prev) => !prev)} />
      <SideBarItems>
        {menuData.map((navLink, i) => (
          <SideBarLink to={navLink.link} key={i}>
            {navLink.title}
          </SideBarLink>
        ))}
        <Button
          primary='true'
          round='true'
          big='true'
          css={`
            font-weight: bold;
          `}
        >
          Book a Flight
        </Button>
      </SideBarItems>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.div`
  background-color: #121212;
  width: 100%;
  height: 100vh;
  position: absolute;
  inset: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseBtn = styled(FaTimes)`
  position: absolute;
  top: 4%;
  right: 4%;
  font-size: 28px;
  color: #fff;
  cursor: pointer;
`;

const SideBarItems = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const SideBarLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.4em;
  font-weight: bold;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`;
