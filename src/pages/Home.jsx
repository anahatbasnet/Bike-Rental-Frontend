import React from "react";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const userName = location.state?.userName?.email.split("@")[0] || "Guest";

  return (
    <div>
      <div className="screensize max-w-7xl ml-32 mr-32 space-y-8">
        <h2 className="font-mono text-xl text-green-600 ">Welcome, {userName}</h2>
        <Carousel />
        <Cards />
      </div>
    </div>
  );
}
