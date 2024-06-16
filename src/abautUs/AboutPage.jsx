import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Why_choose from "../home/pages/Why_choose";
import Team from "./Team";


const AboutPage = () => {
  return (
    <div>
        <Navbar/>
        <Why_choose/>
        <Team />
        <Footer />
    </div>
  );
};

export default AboutPage;
