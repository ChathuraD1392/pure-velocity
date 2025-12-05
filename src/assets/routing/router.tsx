import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Home from "../../components/Home";
import Our_Team from "../../components/Our_Team";
import Services from "../../components/Services";
import Why_Evs from "../../components/Why_Evs";
import HomeServices from "../../Layout/HomeServices";
import HighVoltage from "../../components/essentials/ServiceComponents/HighVoltage";
import TroubleShooting from "../../components/essentials/ServiceComponents/TroubleShooting";
import Repairs from "../../components/essentials/ServiceComponents/Repairs";
import Maintenance from "../../components/essentials/ServiceComponents/Maintenance";
import Evaluation from "../../components/essentials/ServiceComponents/Evaluation";
import Support from "../../components/essentials/ServiceComponents/Support";
import Diagnostics from "../../components/essentials/ServiceComponents/Diagnostics";

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
