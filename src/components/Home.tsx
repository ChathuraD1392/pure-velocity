import { useEffect, useState } from "react";
import Header from "../components/Header";
import Header_About from "./essentials/HeaderComponents/Header_About";
import Header_Banner from "./essentials/HeaderComponents/Header_Banner";
import Header_Contact from "./essentials/HeaderComponents/Header_Contact";
import Header_TeamCard from "./essentials/HeaderComponents/Header_TeamCard";
import Header_Services from "./essentials/HeaderComponents/Header_Services";

const Home = () => {
  const [isScrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    console.log(window.scrollY);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [window.scrollY]);
  return (
    <>
      <div className="bg-[#0a0f2d]">
        <Header />
        <Header_Banner />
      </div>
      <div className="bg-white">
        <Header_About />
      </div>
      <div className="bg-[#0a0f2d]/80">
        <Header_Services />
        <Header_Contact />
        <Header_TeamCard />
      </div>
    </>
  );
};

export default Home;
