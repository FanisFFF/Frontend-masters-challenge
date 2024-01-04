import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route element={<Header />}> */}
          <Route path="home" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="technology" element={<Technology />} />
          <Route path="crew" element={<Crew />} />
          {/* </Route> */}

          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
      <h2>Hello</h2>
    </>
  );
}

export default App;
