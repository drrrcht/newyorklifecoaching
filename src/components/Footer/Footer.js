import React from "react";
import "./css/Footer.css"

export const Footer = () => {
    return(
        <footer>
            <div className="footer_main_wrapper">
                <div className="footer_wrapper_first">
                    <div className="footer_wrapper_item">
                        <div className="footer_logo"><a href="#"><img src="" alt=""/></a></div>
                        <div className="footer_text_item">Our Blog</div>
                        <div className="footer_text_item">Contact Us</div>
                        <div className="footer_icons_wrapper">
                            <div className="footer_reb_box_item"></div>
                            <div className="footer_reb_box_item"></div>
                            <div className="footer_reb_box_item"></div>
                        </div>
                    </div>
                    <div className="footer_wrapper_item">
                        <div className="footer_head">Hire a Coach</div>
                        <div className="footer_text_item">About Annie</div>
                        <div className="footer_text_item">Coaching Services</div>
                        <div className="footer_text_item">Apply for Coaching</div>
                    </div>
                    <div className="footer_wrapper_item">
                        <div className="footer_head">Become a Coach</div>
                        <div className="footer_text_item">About NYLCI Institute</div>
                        <div className="footer_text_item">Certification Program</div>
                        <div className="footer_text_item">FAQ</div>
                    </div>
                </div>
                <div className="footer_wrapper_second"></div>
                <div className="footer_wrapper_third footer_text_item">2023 New York Life Coaching. All Rights Reserved.
                    Privacy Policy
                </div>
            </div>
        </footer>
    );
}