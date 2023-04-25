import React from "react";
import {Testimonial} from "../components/Testimonial/Testimonial";

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