import video from "../assets/video/background_video.mp4";

const VideoBanner = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
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
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Your Banner Title
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mt-4 max-w-2xl">
          This is a subtitle or description that appears over the blurred video.
        </p>

        <button className="btn btn-primary mt-6">Call to Action</button>
      </div>
    </div>
  );
};

export default VideoBanner;
