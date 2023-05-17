import React from "react";
import "../../App.css";

export const Block_about_second = () => {
    return (
        <div className={"wrapper_section_about_img_left row"}>
            <div className={"wrapper_img2-about col"}>
                <img src={require("../../pages/about_img/IMG_8579.jpg")} alt=""/>
            </div>
            <div className={"wrapper_text_section_about col"}>
                <h2>Что вы получаете? </h2>
                <ul>
                    <li><p>понимание своего жизненного пути.</p></li>
                    <li><p>позволение без чувства вины выбирать то, что желаете вы, а не другие. </p></li>
                    <li><p>уверенность в себе, прилив сил, ресурсы и возможности.</p></li>
                    <li><p>двигаться к своим целям становится легко.</p></li>
                    <li><p>желаемое приходит в вашу жизнь без напряжения и надрыва.</p></li>
                </ul>
                <p>Более 7 лет я изучаю и практикую методы психологии, коучинга, изменения подсознания и смены мышления.</p>
                <p>Я сертифицированный энергопрактик международных методик Access Consciousness и ThetaHealing, коуч, таролог, специалист метода диагностики и коррекции «Матрица судьбы».</p>
                <p>Если вы выбираете изменить свою жизнь, записывайтесь на консультацию. </p>
            </div>
        </div>
    );
}