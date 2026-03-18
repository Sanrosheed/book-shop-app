import React from "react";
import Navbar from "../components/NavBar";
import Course from "../components/Course";
import Footer from "../components/Footer";

function Courses() {
  return (
    <div className="bg-[#f4f1e8] dark:bg-slate-900 dark:text-white">
      <Navbar />
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
