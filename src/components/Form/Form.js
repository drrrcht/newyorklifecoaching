import React from "react";
import "./css/Form.css"

export const Form = () => {
    return (
        <>
                <div className=''>
                    <div className='top_label'>
                        <legend className='gfield_label'>
                            Name
                                <span className="gfield_required">
                                    <span className="gfield_required_text">(Required)</span>
                                </span>
                            </legend>
                        <div className='ginput_complex'>
                            <span className='name_first gform-grid-col'>
                                <input type='text' name='input_1.3' id='input_2_1_3' value='' aria-required='true'/>
                                    <label className='gform-field-label'>First</label>
                            </span>
                            <span className='name_last gform-grid-col'>
                                <input type='text' name='input_1.6' id='input_2_1_6' value='' aria-required='true'/>
                                    <label className='gform-field-label'>Last</label>
                            </span>
                        </div>

                        <div className="gfield">
                            <label className='gfield_label'>
                            Email
                                <span className="gfield_required">
                                    <span className="gfield_required_text">(Required)</span>
                                </span>
                            </label>
                            <div className='ginput_container'>
                                <input name='input_3' id='input_2_3' type='email' value='' className='medium' aria-required="true" aria-invalid="false"/>
                            </div>
                        </div>
                        <div className="gfield">
                        <label className='gfield_label' htmlFor='input_2_4'>
                            Message
                            <span className="gfield_required">
                                <span className= "gfield_required_text">(Required)</span>
                            </span>
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