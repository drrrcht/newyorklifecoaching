import React, {Component} from "react";
import "./css/Form.css"
import { doPost } from "../../utils/requests";

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

    async handleSubmit(event) {
        event.preventDefault();

        let response = await doPost("add_contact/", {
            "first_name": this.state.first_name,
            "second_name": this.state.second_name,
            "email": this.state.email,
            "phone_number": this.state.phone_number,
            "telegram": this.state.telegram,
            "message": this.state.message,
        });

        window.alert("Мы получили Вашу заявку! Благодарим.")
        this.setState({
            first_name: "",
            second_name: "",
            email: "",
            phone_number: "",
            telegram: "",
            message: "",
        });
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
    }

    handleFirstNameChange(event) {
        this.setState({first_name: event.target.value});
    }

    handleSecondNameChange(event) {
        this.setState({second_name: event.target.value});
    }

    handlePhoneNumberChange(event) {
        this.setState({phone_number: event.target.value});
    }

    handleTelegramChange(event) {
        this.setState({telegram: event.target.value});
    }

    handleMessageChange(event) {
        this.setState({message: event.target.value});
    }


    handel
    render() {
        return (
            <>
                <div className="container">
                    <div className="centered-title">Контакная форма</div>
                    <div className={"wrapper_form"}>
                        <div className="text_form">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">
                                <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375 c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219 c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966 c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693 c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351 c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"/>
                            </svg>
                            <a href="https://t.me/anna_svet" className={"link_form"}>svetvsvet</a>
                        </div>
                        <div className="text_form">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                                <path d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 17.251208 3.6323415 19.350068 4.7109375 21.150391 L 3.1074219 27 L 9.0820312 25.431641 C 10.829354 26.425062 12.84649 27 15 27 C 21.627 27 27 21.627 27 15 C 27 8.373 21.627 3 15 3 z M 10.892578 9.4023438 C 11.087578 9.4023438 11.287937 9.4011562 11.460938 9.4101562 C 11.674938 9.4151563 11.907859 9.4308281 12.130859 9.9238281 C 12.395859 10.509828 12.972875 11.979906 13.046875 12.128906 C 13.120875 12.277906 13.173313 12.453437 13.070312 12.648438 C 12.972312 12.848437 12.921344 12.969484 12.777344 13.146484 C 12.628344 13.318484 12.465078 13.532109 12.330078 13.662109 C 12.181078 13.811109 12.027219 13.974484 12.199219 14.271484 C 12.371219 14.568484 12.968563 15.542125 13.851562 16.328125 C 14.986562 17.342125 15.944188 17.653734 16.242188 17.802734 C 16.540187 17.951734 16.712766 17.928516 16.884766 17.728516 C 17.061766 17.533516 17.628125 16.864406 17.828125 16.566406 C 18.023125 16.268406 18.222188 16.319969 18.492188 16.417969 C 18.766188 16.515969 20.227391 17.235766 20.525391 17.384766 C 20.823391 17.533766 21.01875 17.607516 21.09375 17.728516 C 21.17075 17.853516 21.170828 18.448578 20.923828 19.142578 C 20.676828 19.835578 19.463922 20.505734 18.919922 20.552734 C 18.370922 20.603734 17.858562 20.7995 15.351562 19.8125 C 12.327563 18.6215 10.420484 15.524219 10.271484 15.324219 C 10.122484 15.129219 9.0605469 13.713906 9.0605469 12.253906 C 9.0605469 10.788906 9.8286563 10.071437 10.097656 9.7734375 C 10.371656 9.4754375 10.692578 9.4023438 10.892578 9.4023438 z"/>
                            </svg>
                            <a href="tel:835335335" className={"link_form"}>+7 353 353 35</a>
                        </div>
                        <div className="text_form">
                            <img src={require("./img/email.png")} alt="" className={"img_size"}/><a
                            href="mailto:sokolnikova.energycoach@yandex.ru" className={"link_form"}>sokolnikova.energycoach@yandex.ru</a>
                        </div>
                        <div className="text_form">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">
                                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21.361,18.967l-1.868,0.026 c0,0-0.403,0.079-0.93-0.285c-0.699-0.48-1.358-1.729-1.872-1.567c-0.521,0.166-0.505,1.29-0.505,1.29s0.004,0.198-0.115,0.327 c-0.129,0.139-0.382,0.125-0.382,0.125h-0.837c0,0-1.846,0.153-3.473-1.543c-1.772-1.849-3.338-5.498-3.338-5.498 s-0.092-0.23,0.006-0.348c0.111-0.13,0.41-0.134,0.41-0.134l2-0.01c0,0,0.188,0.033,0.324,0.133 c0.111,0.082,0.174,0.236,0.174,0.236s0.323,0.819,0.752,1.561c0.836,1.446,1.224,1.763,1.508,1.608 c0.414-0.226,0.29-2.044,0.29-2.044s0.008-0.66-0.208-0.954c-0.168-0.229-0.484-0.297-0.622-0.314 c-0.113-0.015,0.071-0.277,0.311-0.395c0.36-0.176,0.996-0.186,1.747-0.179c0.585,0.006,0.754,0.042,0.982,0.098 c0.69,0.167,0.456,0.811,0.456,2.356c0,0.495-0.089,1.191,0.267,1.42c0.154,0.099,0.529,0.015,1.464-1.579 c0.445-0.756,0.778-1.644,0.778-1.644s0.073-0.158,0.186-0.226c0.116-0.07,0.272-0.048,0.272-0.048l2.105-0.013 c0,0,0.632-0.076,0.735,0.211c0.108,0.3-0.236,1.001-1.096,2.148c-1.412,1.884-1.569,1.709-0.396,2.799 c1.12,1.041,1.351,1.547,1.39,1.611C22.339,18.906,21.361,18.967,21.361,18.967z"/>
                            </svg>
                            <a href="https://vk.com/svet.v.svet" className={"link_form"}>svet.v.svet</a>
                        </div>
                        <div className="text_form">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">
                                <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"/>
                            </svg>
                            <a href="https://www.youtube.com/@anna_svet" className={"link_form"}>@anna_svet</a>
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
                                    placeholder={"Имя *"}
                                    value={this.state.first_name}
                                    onChange={this.handleFirstNameChange}
                                />
                            </span>
                            <span className='name_last gform-grid-col'>
                                <input required
                                    type='text'
                                    name={"second_name"}
                                    placeholder={"Фамилия *"}
                                    value={this.state.second_name}
                                    onChange={this.handleSecondNameChange}
                                />
                            </span>
                        </div>

                        <div className="gfield">
                            <div className='ginput_container'>
                                <input required
                                    name='input_3'
                                    type='email'
                                    placeholder="Почта *"
                                    value={this.state.email}
                                    onChange={this.handleEmailChange}
                                />
                            </div>
                        </div>
                        <div className="gfield">
                            <div className='ginput_container'>
                                <input required
                                    name='input_4'
                                    type={"number"}
                                    placeholder={"Номер телефона *"}
                                    value={this.state.phone_number}
                                    onChange={this.handlePhoneNumberChange}
                                />
                            </div>
                        </div>
                        <div className="gfield">
                            <div className='ginput_container'>
                                <input
                                    name='input_5'
                                    type='text'
                                    placeholder={"Телеграм"}
                                    value={this.state.telegram}
                                    onChange={this.handleTelegramChange}
                                />
                            </div>
                        </div>
                        <div className="gfield">
                            <div className='ginput_container'>
                                <textarea required name='input_4' placeholder="Сообщение *" id='input_2_4' className='textarea medium' aria-required="true"
                                          aria-invalid="false" rows='10' cols='50' onChange={this.handleMessageChange}></textarea>
                            </div>
                        </div>
                    </div>
                    <button type={"submit"} className='red-button' style={{border: "none"}}><p>ОТПРАВИТЬ</p></button>
                </form>
                </div>
            </>
        );
    }
}

export default Form;