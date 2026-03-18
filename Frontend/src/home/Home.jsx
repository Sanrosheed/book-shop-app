import React from "react";
import Navbar from "../components/NavBar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </div>
  );
}

export default Home;
