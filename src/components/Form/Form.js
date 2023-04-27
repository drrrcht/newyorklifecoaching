import React, {Component} from "react";
import "./css/Form.css"
import {Link} from "react-router-dom";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            second_name: '',
            email: '',
            phone_number: '',
            telegram: '',
            message: '',
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleSecondNameChange = this.handleSecondNameChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
        this.handleTelegramChange = this.handleTelegramChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.first_name);
        console.log(this.state.second_name);
        console.log(this.state.email);
        console.log(this.state.phone_number);
        console.log(this.state.telegram);
        console.log(this.state.message);
    }

    handleEmailChange(event) {
        console.log(this);
        this.setState({email: event.target.value});
    }

    handleFirstNameChange(event) {
        console.log(this);
        this.setState({first_name: event.target.value});
    }

    handleSecondNameChange(event) {
        console.log(this);
        this.setState({second_name: event.target.value});
    }

    handlePhoneNumberChange(event) {
        console.log(this);
        this.setState({phone_number: event.target.value});
    }

    handleTelegramChange(event) {
        console.log(this);
        this.setState({telegram: event.target.value});
    }

    handleMessageChange(event) {
        console.log(this);
        this.setState({message: event.target.value});
    }



    handel
    render() {
        return (
            <>
                <div className="container">
                    <div className="centered-title">Form</div>
                    <div className={"wrapper_form"}>
                        <div className="text_form">
                            <img src={require("./img/telegram.png")} alt="" className={"img_size"}/><a
                            href="https://t.me/lifecoach" className={"link_form"}>@lifecoach</a>
                        </div>
                        <div className="text_form">
                            <img src={require("./img/phone-call.png")} alt="" className={"img_size"}/><a
                            href="tel:835335335" className={"link_form"}>+7 353 353 35</a>
                        </div>
                        <div className="text_form">
                            <img src={require("./img/email.png")} alt="" className={"img_size"}/><a
                            href="mailto:lifecoach@gmail.com" className={"link_form"}>lifecoach@gmail.com</a>
                        </div>
                    </div>

                <form onSubmit={this.handleSubmit}>
                    <div className='top_label'>
                        <legend className='gfield_label'>
                        </legend>
                        <div className='ginput_complex'>
                            <span className='name_first gform-grid-col'>
                                <input required
                                    type='text'
                                    name={"first_name"}
                                    placeholder={"First name"}
                                    value={this.state.first_name}
                                    onChange={this.handleFirstNameChange}
                                />
                                    <label className='gform-field-label'>First name<span className={"red"}>*</span> (required)</label>
                            </span>
                            <span className='name_last gform-grid-col'>
                                <input required
                                    type='text'
                                    name={"second_name"}
                                    placeholder={"Second name"}
                                    value={this.state.second_name}
                                    onChange={this.handleSecondNameChange}
                                />
                                    <label className='gform-field-label'>Last name<span className={"red"}>*</span> (required)</label>
                            </span>
                        </div>

                        <div className="gfield">
                            <label className='gfield_label'>
                                Email<span className={"red"}>*</span> (required)
                            </label>
                            <div className='ginput_container'>
                                <input required
                                    name='input_3'
                                    type='email'
                                    placeholder="E-mail"
                                    value={this.state.email}
                                    onChange={this.handleEmailChange}
                                />
                            </div>
                        </div>
                        <div className="gfield">
                            <label className='gfield_label'>
                                phone number<span className={"red"}>*</span> (required)
                            </label>
                            <div className='ginput_container'>
                                <input required
                                    name='input_4'
                                    type={"number"}
                                    placeholder={"Phone number"}
                                    value={this.state.phone_number}
                                    onChange={this.handlePhoneNumberChange}
                                />
                            </div>
                        </div>
                        <div className="gfield">
                            <label className='gfield_label'>
                                Telegram
                            </label>
                            <div className='ginput_container'>
                                <input
                                    name='input_5'
                                    type='text'
                                    placeholder={"Telegram"}
                                    value={this.state.telegram}
                                    onChange={this.handleTelegramChange}
                                />
                            </div>
                        </div>
                        <div className="gfield">
                            <label className='gfield_label' htmlFor='input_2_4'>
                                Message<span className={"red"}>*</span> (required)
                            </label>
                            <div className='ginput_container'>
                                <textarea required name='input_4' id='input_2_4' className='textarea medium' aria-required="true"
                                          aria-invalid="false" rows='10' cols='50'></textarea>
                            </div>
                        </div>
                    </div>
                    <button type={"submit"} className='red-button' style={{border: "none"}}><p>SUBMIT</p></button>
                </form>
                </div>
            </>
        );
    }
}

export default Form;