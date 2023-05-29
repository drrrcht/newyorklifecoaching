import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Main } from "./pages/Main";
import { Testimonials } from "./pages/Testimonials";
import { Contact } from "./pages/Contact";
import NaviBar from "./components/NaviBar/NaviBar";
import { Blog_page } from "./components/Blog_page/Blog_page";
import { Footer } from "./components/Footer/Footer";
import { Services } from "./pages/Services";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <NaviBar />
        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/services"} element={<Services />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/testimonials"} element={<Testimonials />} />
          <Route path={"/blog"} element={<Blog />} />
          <Route path={"/blog/:id"} element={<Blog_page purpose="blog" />} />
          <Route
            path={"/service/:id"}
            element={<Blog_page purpose="service" />}
          />
          <Route path={"/contact"} element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
