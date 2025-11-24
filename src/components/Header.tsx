import video from "../assets/video/background_video.mp4";

const Header = () => {
  return (
    <section className="relative w-full min-h-[80vh] sm:min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        // loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8 text-white space-y-5 py-20 sm:py-32 top-30 sm:top-10 md:top-20">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-normal leading-tight">
          Welcome to
        </h1>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-[Belamor] font-extrabold leading-tight tracking-widest">
          <span className="text-white">PURE VELOCITY</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl max-w-3xl tracking-wide">
          <span className="text-white/90 font-semibold text-2xl">
            Sri Lanka’s first specialist Tesla service
          </span>
          , diagnostics, and repair ecosystem powered by cutting-edge tech,
          global expertise, and a team that eats, sleeps, and breathes{" "}
          <span className="text-white/90 font-semibold text-2xl">EVs.</span>
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="px-6 py-3 bg-white text-black font-semibold rounded-md shadow"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-white rounded-md"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
