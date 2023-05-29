import { Reasons } from "../components/Reasons/Reasons";
import { Coaching } from "../components/Coaching/Coaching";
import { Tab } from "../components/Tab/Tab";
import { FAQ } from "../components/FAQ/FAQ";
import CarouselFadeExample from "../components/Carousel/Carousel";
import { Photo } from "../components/Photo/Photo";
import Form from "../components/Form/Form";
import { Testimonial } from "../components/Testimonial/Testimonial";
import "../App.css";
import React from "react";

export const Main = () => {
  return (
    <>
      <Photo />
      <Reasons />
      <Coaching />
      <Tab />
      <CarouselFadeExample />
      <Form />
      <div id="testimonials_wrapper">
        <Testimonial
          name={"Наталья:"}
          text={
            "Анечка, спасибо тебе большое за нашу сессию! Энергии стало больше. На многое открылись глаза. Несколько дней пыталась разобраться в новом для меня направлении. Психовала, нервничала, сорвалась. Но после сессии все получилось! Сегодня испытала такое наслаждение от процесса! Не знаю даже, какими словами описать! 🙏💖😘"
          }
        />
        <Testimonial
          name={"Виктория:"}
          text={
            "Анечка, благодарю тебя за наш такую мощнейшую сессию🤍 Ты все увидела очень легко и точно🤗 Ощущала твою силу и энергию на протяжении всего сеанса 😍 Изменение явно чувствую. Очень многое поменяла сейчас в умозаключениях. И благодарна, что отклик был именно к тебе. Я не ошиблась в выборе🙏🏼🙏🏼🙏🏼"
          }
        />
      </div>
      <FAQ />
    </>
  );
};
