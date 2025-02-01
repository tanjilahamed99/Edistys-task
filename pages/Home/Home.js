import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import FeatureOfFinance from "./FeatureOfFinance";
import Trust from "./Trust";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <FeatureOfFinance />
      <Trust />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
