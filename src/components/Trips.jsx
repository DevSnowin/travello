import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { Button } from "./Button";
import { ImLocation } from "@react-icons/all-files/im/ImLocation";

const Trips = ({ headings }) => {
  const data = useStaticQuery(graphql`
    query {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                gatsbyImageData(
                  blurredOptions: { width: 100 }
                  placeholder: BLURRED
                  transformOptions: { cropFocus: CENTER }
                  aspectRatio: 0.7
                )
              }
            }
          }
        }
      }
    }
  `);

  return (
    <PlansContainer>
      <PlanHeading>{headings}</PlanHeading>
      <PlanWrapper>
        {data.allTripsJson.edges.map((item, i) => (
          <PlanCard key={i}>
            <PlanImg image={getImage(item.node.img)} alt={item.node.alt} />
            <PlanInfo>
              <TextWrap>
                <ImLocation />
                <PlanTitle>{item.node.name}</PlanTitle>
              </TextWrap>
              <Button
                to='/'
                primary='true'
                round='true'
                css={`
                  position: absolute;
                  top: 420px;
                  font-size: 14px;
                `}
              >
                {item.node.button}
              </Button>
            </PlanInfo>
          </PlanCard>
        ))}
      </PlanWrapper>
    </PlansContainer>
  );
};

export default Trips;

const PlansContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vh - 1300px) / 2);
  color: #fff;
`;
const PlanHeading = styled.h1`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-block: 5rem;
  color: #121212;
`;

const PlanWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  padding-inline: 2rem;
`;

const PlanCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`;

const PlanImg = styled(GatsbyImage)`
  height: 100%;
  max-width: 100%;
  position: absolute;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s ease-in-out;

  &:hover {
    filter: brightness(100%);
  }
`;

const PlanInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`;

const PlanTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`;
