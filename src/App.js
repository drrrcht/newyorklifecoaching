import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import {About} from "./pages/About";
import {Blog} from "./pages/Blog";
import {Services} from "./pages/Services";
import {Testimonials} from "./pages/Testimonials";
import {Contact} from "./pages/Contact";
import NaviBar from "./components/NaviBar/NaviBar";
import {Blog_page} from "./components/Blog_page/Blog_page";
import {Footer} from "./components/Footer/Footer";

function App() {
        return (
            <>
                <Router>
                    <NaviBar/>
                    <Routes>
                        <Route path={"/"} element={<Services/>}/>
                        <Route path={"/about"} element={<About/>}/>
                        <Route path={"/testimonials"} element={<Testimonials/>}/>
                        <Route path={"/blog"} element={<Blog/>}/>
                        <Route path={"/blog/blog_page"} element={<Blog_page/>}/>
                        <Route path={"/contact"} element={<Contact/>}/>
                    </Routes>
                    <Footer/>
                </Router>
            </>
        );

}

export default App;


