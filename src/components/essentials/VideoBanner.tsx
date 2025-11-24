import video from "../../assets/video/background_video.mp4";

const VideoBanner = () => {
  return (
    <div className="">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={video} // <-- replace with your video path
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Blur overlay */}
        <div className="absolute inset-0 bg-[#0a0f2d]/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 space-y-8">
          <h4 className="text-2xl md:text-2xl font-bold text-white">
            Welcome to
          </h4>
          <h1 className="text-xl md:text-8xl font-bold text-white drop-shadow-lg font-[Belamor] tracking-widest">
            PURE VELOCITY
          </h1>
          <div className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl">
            <span>
              Sri Lanka’s first specialist Tesla service, diagnostics, and
              repair ecosystem - powered by cutting-edge tech, global expertise,
              and a team that eats, sleeps, and breathes EVs.
            </span>
          </div>

          <button className="btn font-bold bg-[#007bff] pl-24 pr-24 pt-6 pb-6 mt-6 border-0 text-lg hover:outline hover:bg-transparent hover:text-white">
            Contact us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
