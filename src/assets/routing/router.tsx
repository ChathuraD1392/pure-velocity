import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout/Layout";
import Home from "../../components/Home";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Why_Evs from "../../components/Why_Evs";
import Services from "../../components/Services";
import Our_Team from "../../components/Our_Team";

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
      { path: "services", element: <Services /> },
    ],
  },
]);
