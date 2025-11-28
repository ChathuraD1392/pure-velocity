import { useEffect, useState } from "react";
import Header from "../components/Header";
import Header_About from "./essentials/Header_About";
import Header_TeamCard from "./essentials/Header_TeamCard";
import Header_Banner from "./essentials/Header_Banner";

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
      <div className="bg-slate-200">
        <Header />
        <Header_Banner isScrolled={isScrolled} />
        <Header_About />
        <Header_TeamCard />
      </div>
    </>
  );
};

export default Home;
