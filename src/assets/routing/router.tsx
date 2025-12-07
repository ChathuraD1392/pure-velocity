import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Home from "../../components/Home/Home";
import Our_Team from "../../components/Our_Team/Our_Team";
import Services from "../../components/Services/Services";
import Why_Evs from "../../components/WhyEvs/Why_Evs";
import HomeServices from "../../Layout/HomeServices";
import Diagnostics from "../../components/Services/Diagnostics";
import Evaluation from "../../components/Services/Evaluation";
import HighVoltage from "../../components/Services/HighVoltage";
import Maintenance from "../../components/Services/Maintenance";
import Repairs from "../../components/Services/Repairs";
import Support from "../../components/Services/Support";
import TroubleShooting from "../../components/Services/TroubleShooting";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "our-team", element: <Our_Team /> },
      { path: "why-evs", element: <Why_Evs /> },
      {
        path: "services",
        element: <HomeServices />,
        children: [
          { index: true, element: <Services /> },
          { path: "high-voltage", element: <HighVoltage /> },
          { path: "trouble-shooting", element: <TroubleShooting /> },
          { path: "repairs", element: <Repairs /> },
          { path: "maintenance", element: <Maintenance /> },
          { path: "evaluation", element: <Evaluation /> },
          { path: "support", element: <Support /> },
          { path: "remote-diagnostic", element: <Diagnostics /> },
        ],
      },
    ],
  },
]);
