import { BsArrowUpRightSquareFill, BsFillPinMapFill } from "react-icons/bs";
import { GoClockFill } from "react-icons/go";
import { MdMedicalServices } from "react-icons/md";
import logo from "../assets/images/Logo Horizontal white@300x.png";
import Map from "./essentials/Map";

const Footer = () => {
  return (
    <footer className="bg-white/90 pt-5 px-2 py-2">
      {/* TOP BAR */}
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 bg-[#0a0f2d] pt-10 px-6 md:px-12 lg:px-20 pb-10 border-b border-dashed border-slate-400 rounded-t-xl">
        <div className="text-sm text-white flex justify-center md:justify-start">
          <img
            src={logo}
            alt="logo"
            className="h-12 w-full sm:h-14  md:h-20 lg:h-24 xl:h-28 object-contain"
          />
        </div>

        {/* Centered About Text (On large move to right) */}
        <div className="text-white text-center md:text-left pt-5">
          <p className="md:text-lg">
            Sri Lanka’s first specialist Tesla service, diagnostics, and repair
            ecosystem powered by cutting-edge tech, global expertise, and a team
            that eats, sleeps, and breathes EVs.
          </p>
        </div>
      </div>

      {/* MIDDLE BAR */}
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 bg-[#007bff] pt-10 px-6 md:px-12 lg:px-20 pb-10">
        <div className="text-white">
          <div className="flex items-center space-x-3">
            <h3 className="font-bold text-xl md:text-2xl">Find us</h3>
            <BsFillPinMapFill className="text-2xl" />
          </div>

          <div className="py-4 space-y-4">
            <p>
              <span className="font-bold">Hotline : </span> +94 XXXXXXXX
            </p>
            <p>
              <span className="font-bold">Our Office : </span> 11/3/2, Marine
              Drive, Wellawatte Colombo 06
            </p>
            <p>
              <span className="font-bold">Service Centre : </span> 75, Station
              Road, Kandana, Sri Lanka
            </p>

            <p className="flex w-fit items-center rounded-md px-2 py-1 bg-[#0a0f2d] text-[10px] font-medium mt-2">
              <GoClockFill />
              <span className="pl-2">
                We respond fast — usually within minutes.
              </span>
            </p>
          </div>
        </div>
        {/* LINKS */}

        {/* SERVICES */}
        <div className="text-white hidden md:block">
          <div className="flex items-center space-x-3">
            <h3 className="font-bold text-xl md:text-2xl">Services</h3>
            <MdMedicalServices className="text-3xl" />
          </div>

          <div className="py-4 space-y-1 text-base">
            <p>Advanced Diagnostics & Troubleshooting</p>
            <p>High Voltage System Repairs</p>
            <p>Electrical & Mechanical Repairs</p>
            <p>Preventative Maintenance</p>
            <p>Battery & Range Health Evaluation</p>
            <p>Software & Configuration Support</p>
          </div>
        </div>

        {/* FIND US */}
        <div className="text-white pl-0 hidden md:block md:pl-10 ">
          <div className="flex items-center space-x-3 ">
            <h3 className="font-bold text-xl md:text-2xl">Links</h3>
            <BsArrowUpRightSquareFill className="text-2xl" />
          </div>

          <div className="py-4 space-y-1 text-base">
            <p>Services</p>
            <p>About</p>
            <p>Our Team</p>
            <p>Why Evs?</p>
            <p>Contact</p>
          </div>
        </div>

        {/* map */}

        <div className="w-full h-[300px] rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4785.866331512332!2d79.84301888429216!3d6.924397875220569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259007abfc5c5%3A0xaf12c2edca819063!2sCity%20of%20Dreams!5e1!3m2!1sen!2slk!4v1763872264647!5m2!1sen!2slk&output=embed&iwloc=0"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full mx-auto px-4 py-6 flex justify-center bg-[#0a0f2d] border-t border-slate-200 rounded-b-xl">
        <div className="text-sm text-white text-center">
          © {new Date().getFullYear()} Pure Velocity — Powering Sri Lanka’s EV
          future.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
