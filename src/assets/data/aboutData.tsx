import { type ReactNode } from "react";
import { FaGlobe, FaHandshake, FaMicroscope, FaStore } from "react-icons/fa";

interface ListType {
  image: ReactNode;
  label: string;
}

export interface AboutType {
  index: number;
  title_1: string;
  para?: string;
  title_2: string;
  list?: ListType[];
}

export const aboutData: AboutType[] = [
  {
    index: 1,
    title_1: "Our Vision",
    para: "To become Sri Lanka’s most trusted and advanced Tesla service ecosystem, setting a new benchmark for EV maintenance, transparency, and customer care.",
    title_2: "Our Philosophy",
    list: [
      {
        image: (
          <FaHandshake className="w-12 h-12 border-2 rounded-lg p-2 text-2xl bg-[#0a0f2d] text-white" />
        ),
        label: "Honest work",
      },
      {
        image: (
          <FaMicroscope className="w-12 h-12 border-2 rounded-lg p-2 text-2xl bg-[#0a0f2d] text-white" />
        ),
        label: "Cutting-edge diagnostics",
      },
      {
        image: (
          <FaGlobe className="w-12 h-12 border-2 rounded-lg p-2 text-2xl bg-[#0a0f2d] text-white" />
        ),
        label: "Global knowledge",
      },
      {
        image: (
          <FaStore className="w-12 h-12 border-2 rounded-lg p-2 text-2xl bg-[#0a0f2d] text-white" />
        ),
        label: "Local trust",
      },
    ],
  },
];
