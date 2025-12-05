import vision from "../images/tesla_logo.webp";
import philosophy from "../images/philosophy.webp";
import type { ReactNode } from "react";

import { FaHandshake, FaMicroscope, FaGlobe, FaStore } from "react-icons/fa";

interface ListType {
  image: ReactNode;
  label: string;
}

export interface AboutType {
  index: number;
  image: string;
  title: string;
  para?: string;
  list?: ListType[];
}

export const aboutData: AboutType[] = [
  {
    index: 1,
    image: vision,
    title: "Our Vision",
    para: "To become Sri Lanka’s most trusted and advanced Tesla service ecosystem, setting a new benchmark for EV maintenance, transparency, and customer care.",
  },
  {
    index: 2,
    image: philosophy,
    title: "Our Philosophy",
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
