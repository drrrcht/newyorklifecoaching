import React from "react";
import "./css/Reasons.css"
import Reason1 from "./img/reason1.png";

export const Reasons = () => {
    return(
        <div className="reasons container">
            <div className="container">
                    <div className="wrapper_help_promo_text">
                        <h2 className="centered-title">Вы выбираете лучшую жизнь?</h2>
                        <p>
                            Ответьте себе честно на вопрос: «Вы счастливы?» Если ответ отрицательный, пришла пора менять свою реальность.<br/>
                            Я помогу вам раскрыть предназначение и жизненный путь, потенциал и возможности. <br/>
                            Со мной вам не нужно тратить годы, чтобы найти себя и, наконец, начать жить так, как хочется. <br/>
                            В моем поле трансформация вашей реальности произойдет быстро, естественно и комфортно.<br/>
                        </p>
                    </div>
                    <h2 className="centered-title">Я могу помочь:</h2>
                    <div id="reasons">
                    <div className="reason_row">

                        <div className="reasons_block">
                            <div className="reasons_round">
                                <img src={Reason1} alt="reason"/>
                            </div>
                            <div className="reasons_descr">
                                {/* <div className="reasons_subtitle">Career, Work, Business</div> */}
                                <div className="reasons_text">
                                    Вы выйдите из состояния потерянности и увидете свой жизненный путь
                                </div>
                            </div>
                        </div>
                        <div className="reasons_block">
                            <div className="reasons_round">
                                <img src={Reason1} alt="reason"/>
                            </div>
                            <div className="reasons_descr">
                                {/* <div className="reasons_subtitle">People and Relationships</div> */}
                                <div className="reasons_text">
                                    Обретётё уверенность в себе, прилив сил, ресурсы и возможности
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reason_row">
                        <div className="reasons_block">
                            <div className="reasons_round">
                                <img src={Reason1} alt="reason"/>
                            </div>
                            <div className="reasons_descr">
                                {/* <div className="reasons_subtitle">Emotional and Physical Well-being</div> */}
                                <div className="reasons_text">
                                    Перестанете подстраиваться под других и начнёте выбирать свои желания. Двигаться к целям станет легко
                                </div>
                            </div>
                        </div>
                        <div className="reasons_block">
                            <div className="reasons_round">
                                <img src={Reason1} alt="reason"/>
                            </div>
                            <div className="reasons_descr">
                                {/* <div className="reasons_subtitle">Personal growth</div> */}
                                <div className="reasons_text">
                                    Желаемое начнёт приходить в вашу жизнь без напряжения и надрыва
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    );
}