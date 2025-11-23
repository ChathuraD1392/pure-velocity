import background from "../assets/images/container_background.jpg";
import background_2 from "../assets/images/background_2.jpg";
export default function Test() {
  return (
    <div className="flex flex-col md:flex-row bg-slate-900 rounded-lg overflow-hidden">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center p-8 text-white">
        <div className="mb-6">
          <span className="badge badge-info badge-lg mb-4">
            RECOGNIZED FOR EXCELLENCE
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Driving Excellence <br />
            Through Evolution <br />
            <span className="text-teal-400">and Trust.</span>
          </h1>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <span className="text-xl">&#8599;</span>
          <span className="text-gray-200">
            Represents growth, expansion, and modern business solution present
            growth, expansion.
          </span>
        </div>
        <div className="mt-10">
          <span className="text-xs text-gray-400">Scroll Down</span>
        </div>
      </div>
      {/* Right Section */}
      <div className="flex-1 bg-white flex flex-col items-center justify-center p-8">
        {/* Image placeholder */}
        <div className="w-full flex justify-center mb-6">
          <img
            src={background_2}
            alt="Business Professional"
            className="w-64 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Customer Count Card */}
        <div className="card bg-base-100 shadow-xl w-72">
          <div className="card-body flex-row items-center gap-4">
            <div className="flex -space-x-2">
              <div className="avatar">
                <div className="w-8 rounded-full ring ring-info ring-offset-base-100">
                  <img src="/avatar1.jpg" alt="Avatar 1" />
                </div>
              </div>
              {/* Add more avatars as needed */}
              <div className="avatar placeholder">
                <div className="w-8 rounded-full bg-teal-400 text-white flex items-center justify-center">
                  +
                </div>
              </div>
            </div>
            <div>
              <p className="text-3xl font-bold">30K</p>
              <span className="text-gray-500">
                Happy customer we have world-wide.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
