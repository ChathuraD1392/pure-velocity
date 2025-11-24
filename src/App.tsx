import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Our_Team from "./components/Our_Team";
import Services from "./components/Services";
import Why_Evs from "./components/Why_Evs";

function App() {
  const router = createBrowserRouter([
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

  return <RouterProvider router={router} />;
}

export default App;
