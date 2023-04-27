import React from "react";
import {Testimonial} from "../components/Testimonial/Testimonial";
import {Footer} from "../components/Footer/Footer";

export const Testimonials = () => {
    return(
        <>
            <div className="faq_header">
                <p>Testimonials</p>
            </div>
            <div className={"container wrapper_testimonials"} >
                <Testimonial/>
                <Testimonial/>
                <Testimonial/>
                <Testimonial/>
                <Testimonial/>
                <Testimonial/>
            </div>
        </>
    );
}