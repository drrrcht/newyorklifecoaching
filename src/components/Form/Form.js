import React from "react";
import "./css/Form.css"
import {Link} from "react-router-dom";

export const Form = () => {
    return (
        <>

            <div className="wrapper_form container">
                <div className="centered-title">Form</div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "flex-end"}}>
                    <div className="text_form">
                        <img src={require("./img/telegram.png")} alt="" className={"img_size"}/><a href="https://t.me/lifecoach" className={"link_form"}>@lifecoach</a>
                    </div>
                    <div className="text_form">
                        <img src={require("./img/phone-call.png")} alt="" className={"img_size"}/><a href="tel:835335335" className={"link_form"}>+7 353 353 35</a>
                    </div>
                    <div className="text_form">
                        <img src={require("./img/email.png")} alt="" className={"img_size"}/><a href="mailto:lifecoach@gmail.com" className={"link_form"}>lifecoach@gmail.com</a>
                    </div>
                </div>
            </div>
            <form id={"form1"}>
                <div className='top_label'>
                    <legend className='gfield_label'>
                    </legend>
                    <div className='ginput_complex'>
                            <span className='name_first gform-grid-col'>
                                <input type='text' name={"first_name"}/>
                                    <label className='gform-field-label'>First Name<span className={"red"}>*</span> (required)</label>
                            </span>
                        <span className='name_last gform-grid-col'>
                                <input type='text' name={"second_name"}/>
                                    <label className='gform-field-label'>Last Name<span className={"red"}>*</span> (required)</label>
                            </span>
                    </div>

                    <div className="gfield">
                        <label className='gfield_label'>
                            Email<span className={"red"}>*</span> (required)
                        </label>
                        <div className='ginput_container'>
                            <input name='input_3' type='email'/>
                        </div>
                    </div>
                    <div className="gfield">
                        <label className='gfield_label'>
                            phone number<span className={"red"}>*</span> (required)
                        </label>
                        <div className='ginput_container'>
                            <input name='input_4' type={"number"}/>
                        </div>
                    </div>
                    <div className="gfield">
                        <label className='gfield_label'>
                            Telegram
                        </label>
                        <div className='ginput_container'>
                            <input name='input_5' type='text'/>
                        </div>
                    </div>
                    <div className="gfield">
                        <label className='gfield_label' htmlFor='input_2_4'>
                            Message<span className={"red"}>*</span> (required)
                        </label>
                        <div className='ginput_container'>
                            <textarea name='input_4' id='input_2_4' className='textarea medium' aria-required="true" aria-invalid="false" rows='10' cols='50'></textarea>
                        </div>
                    </div>
                </div>
                <buttn type={"submit"} className='red-button' style={{border: "none"}}><p>SUBMIT</p></buttn>
            </form>
        </>
    );
}