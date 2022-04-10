import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GlobalStyle } from "../components/styles/GlobalStyles";

const ErrorPage = () => {
  return (
    <>
      <GlobalStyle />
      <ErrorContainer>
        <ErrorContent>
          <StaticImage src='../assets/images/error-404.svg' alt='error-image' />
          <BackBtn to='/'>Go home</BackBtn>
        </ErrorContent>
      </ErrorContainer>
    </>
  );
};

export default ErrorPage;

const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh;
  font-family: "IBM Plex Sans", sans-serif;
  color: #121212;
  display: grid;
  place-items: center;
`;

const ErrorContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackBtn = styled(Link)`
  font-size: 1.2em;
  font-weight: bold;
  text-decoration: none;
  color: #121212;

  &:hover {
    color: #f26a2e;
    transition: all 0.4s ease-out;
  }
`;
