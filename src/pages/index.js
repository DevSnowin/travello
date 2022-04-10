import React from "react";
import "@fontsource/ibm-plex-sans";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Trips from "../components/Trips";
import Stats from "../components/Stats";
import Email from "../components/Email";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Trips headings='Our Favorite Destination' />
      <Testimonials />
      <Stats />
      <Email />
    </Layout>
  );
};

export default IndexPage;
