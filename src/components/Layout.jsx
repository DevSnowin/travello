import React, { useState } from "react";
import styled from "styled-components";

import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import { GlobalStyle } from "./styles/GlobalStyles";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LayoutContainer>
      <GlobalStyle />
      <Header setIsOpen={setIsOpen} />
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>{children}</main>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div``;
