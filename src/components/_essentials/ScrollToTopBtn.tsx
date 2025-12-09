import { useEffect, useState } from "react";
import { IoIosArrowRoundUp } from "react-icons/io";

const ScrollToTopBtn = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 280);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-2 rounded-full shadow-lg 
        transition-all duration-300 border text-black
        bg-white
       
        ${
          visible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75 pointer-events-none"
        }
      `}
    >
      <IoIosArrowRoundUp size={24} />
    </button>
  );
};

export default ScrollToTopBtn;
