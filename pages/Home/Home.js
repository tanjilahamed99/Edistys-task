import Banner from "@/components/Banner/Banner";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import FeatureOfFinance from "./FeatureOfFinance";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <FeatureOfFinance />
      <Footer />
    </div>
  );
};

export default Home;
