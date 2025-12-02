import { useEffect, useState } from "react";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import type { Service } from "../assets/data/services";
import Header_Service_Card from "./essentials/HeaderComponents/Header_Service_Card";

interface Props {
  services: Service[];
}

const CardCarousel = ({ services }: Props) => {
  const [index, setIndex] = useState(0);

  // Show 3 items at a time
  //const visibleCount = 3;

  // Next Slide
  const next = () => {
    setIndex((prev) => (prev + 1) % services.length);
  };

  // Previous Slide
  const prev = () => {
    setIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  // Autoplay every 3 seconds
  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, []);

  // Get visible 3 cards in circular manner
  const visibleCards = [
    services[index],
    services[(index + 1) % services.length],
    services[(index + 2) % services.length],
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto py-6">
      {/* Cards Wrapper */}
      <div className="flex justify-center gap-6 transition-transform duration-500">
        {visibleCards.map((service) => (
          <div key={service.id} className="w-full md:w-1/3 ">
            <Header_Service_Card service={service} />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="btn btn-circle absolute left-0 top-1/2 -translate-y-1/2 bg-[#0a0f2d] text-white"
      >
        <BsArrowLeft size={22} />
      </button>

      <button
        onClick={next}
        className="btn btn-circle absolute right-0 top-1/2 -translate-y-1/2 bg-[#0a0f2d] text-white"
      >
        <BsArrowRight size={22} />
      </button>
    </div>
  );
};

export default CardCarousel;
