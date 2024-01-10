import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Terminal from "./components/Terminal";
import About from "./pages/About";
import Help from "./pages/Help";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import Skills from "./pages/Skills";
import SocMed from "./pages/SocMed";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="terminal" element={<Terminal />}>
          <Route path="socmed" element={<SocMed />} />
          <Route path="skills" element={<Skills />} />
          <Route path="docs" element={<Help />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Route>
    )
  );

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
