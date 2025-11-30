import { useEffect, useState } from "react";
import Header from "../components/Header";
import Header_About from "./essentials/Header_About";
import Header_Banner from "./essentials/Header_Banner";
import Header_Services from "./essentials/Header_services";
import Header_Contact from "./essentials/Header_Contact";
import Header_TeamCard from "./essentials/Header_TeamCard";

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
        <Header_Banner isScrolled={isScrolled} />
      </div>
      <div className="bg-white">
        <Header_About />
      </div>
      <div className="bg-[#0a0f2d]">
        {/* <Header_Services /> */}
        <Header_Contact />
        <Header_TeamCard />
      </div>
    </>
  );
};

export default Home;
