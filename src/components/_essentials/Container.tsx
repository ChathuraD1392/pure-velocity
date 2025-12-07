import background from "../assets/images/background_2.jpg";

const Container = () => {
  return (
    <div
      className="relative w-full h-96 bg-cover bg-center rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {/* Color overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content above overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h1 className="text-4xl font-bold mb-2">Welcome to My Section</h1>
        <p className="text-lg opacity-90 mb-4">
          This is text placed over an image with a color overlay.
        </p>

        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  );
};

export default Container;
