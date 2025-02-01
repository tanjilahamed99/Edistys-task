import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import FeatureOfFinance from "./FeatureOfFinance";
import Trust from "./Trust";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <FeatureOfFinance />
      <Trust />
      <Footer />
    </div>
  );
};

export default Home;
