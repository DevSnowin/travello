import React from "react";
import styled from "styled-components";
import { IoMdCheckmarkCircleOutline } from "@react-icons/all-files/io/IoMdCheckmarkCircleOutline";
import { FaRegLightbulb } from "@react-icons/all-files/fa/FaRegLightbulb";
import { StaticImage } from "gatsby-plugin-image";

const Testimonials = () => {
  return (
    <TestimonialContainer>
      <TopLine>Testimonials</TopLine>
      <Description>What People are Saying</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline
              css={`
                color: #3fffa8;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Sean Michaels</h3>
            <p>
              "The greatest experience of my life! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Sit, aperiam."
            </p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb
              css={`
                color: #f9b19b;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Sarah Kin</h3>
            <p>
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              voluptatibus nostrum ut recusandae, numquam ea similique
              accusantium dolor."
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          <StaticImage
            src='../assets/images/profile-1.jpg'
            alt='profile'
            placeholder='blurred'
            style={{
              borderRadius: "10px",
              objectFit: "cover",
              maxWidth: "300px",
              height: "400px",
            }}
          />
          <StaticImage
            src='../assets/images/profile-2.jpg'
            alt='profile'
            placeholder='blurred'
            style={{
              borderRadius: "10px",
              objectFit: "cover",
              maxWidth: "300px",
              height: "400px",
            }}
          />
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialContainer>
  );
};

export default Testimonials;

const TestimonialContainer = styled.div`
  width: 100%;
  background-color: #fcfcfc;
  padding: 5rem calc((100vw - 1600px) / 2);
  height: 100%;
`;
const TopLine = styled.p`
  color: #077bf1;
  font-size: 1em;
  font-weight: bold;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`;
const Description = styled.p`
  text-align: start;
  padding-left: 2rem;
  margin-bottom: 4rem;
  font-size: clamp(1.5rem, 5vw, 2rem);
  font-weight: bold;
`;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;
const Testimonial = styled.div`
  padding-block: 0.5rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
    max-width: 35rem;
  }
`;

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;
  grid-gap: 1rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
