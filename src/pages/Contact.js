import React from "react";
import Form from "../components/Form/Form";

export const Contact = () => {
    return(
        <section className="container">
            <div className="row">
                <div className="fusion-title">
                    <h2 className="title-heading-left">
                        <b>Interested in working with us?</b>
                    </h2>
                </div>
                <div className="fusion-text">
                    <p>Please click the button below to fill out a short application. We will then have a 10-minute chat on the phone to see if we'd make a good fit!</p>
                </div>
                <div className='gform_wrapper gravity-theme'>
                    <div className='label'>
                        <input type='submit' id='gform_submit_button_2' className='gform_button button' value='Submit'/>
                    </div>
                </div>
                <div className="fusion-title">
                    <h2 className="title-heading-left">
                        <b>General questions about coaching?</b>
                    </h2>
                </div>
                <div className="fusion-text">
                    <p>Please check out the FAQ section.</p>
                </div>
                <div className="fusion-title">
                    <h2 className="title-heading-left" >
                        <b>Any other inquiries?</b>
                    </h2>
                </div>
                <div className="">
                    <p>Please fill out the form below. You can also email us at<strong>hello (at) NewYorkLifeCoaching.com</strong></p>
                </div>
                <div className='gform_wrapper gravity-theme'>
                    <Form/>
                </div>
            </div>
        </section>
    );
}