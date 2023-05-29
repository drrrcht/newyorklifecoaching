import React from "react";
import "../../App.css";

export const Block_about_second = () => {
    return (
        <div className={"wrapper_section_about_img"}>
            <div className={"wrapper_img_about"}>
                <img src={require("../../pages/about_img/IMG_8579.jpg")} alt=""/>
            </div>
            <div className={"wrapper_text_section_about"}>
                <h2>Что вы обретете в результате?</h2>
                <ul>
                    <li><p>найдете свой жизненный путь</p></li>
                    <li><p>перестанете тревожиться о будущем и сожалеть о прошлом</p></li>
                    <li><p>позволите себе без чувства вины выбирать то, что желаете вы, а не другие </p></li>
                    <li><p>почувствуете уверенность в себе, прилив энергии, ресурсы и возможности</p></li>
                    <li><p>достигать целей станет легко</p></li>
                    <li><p>начнете получать желаемое без надрыва и напряжения</p></li>
                </ul>
                <p>Если вы выбираете быть создателем своей лучшей жизни, записывайтесь на консультацию.</p>
            </div>
        </div>
    );
}