import React from "react";
import "./css/Form.css"

export const Form = () => {
    return (
        <>

            <div className="wrapper_coaching container">
                <div className="header_form">Form</div>
                <div claass="row">
                    <div className="text_form">
                        tg
                    </div>
                    <div className="text_form">
                        number
                    </div>
                    <div className="text_form">
                        сайт
                    </div>
                </div>
            </div>
                <div className=''>
                    <div className='top_label'>
                        <legend className='gfield_label'>
                            </legend>
                        <div className='ginput_complex'>
                            <span className='name_first gform-grid-col'>
                                <input type='text'/>
                                    <label className='gform-field-label'>First Name</label>
                            </span>
                            <span className='name_last gform-grid-col'>
                                <input type='text'/>
                                    <label className='gform-field-label'>Last Name</label>
                            </span>
                        </div>

                        <div className="gfield">
                            <label className='gfield_label'>
                            Email
                            </label>
                            <div className='ginput_container'>
                                <input name='input_3' type='email'/>
                            </div>
                        </div>
                        <div className="gfield">
                            <label className='gfield_label'>
                                phone number
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
                            Message
                        </label>
                        <div className='ginput_container'>
                            <textarea name='input_4' id='input_2_4' className='textarea medium' aria-required="true" aria-invalid="false" rows='10' cols='50'></textarea>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='btn_link'>
                    <p>SUBMIT</p>
                </div>
        </>
    );
}