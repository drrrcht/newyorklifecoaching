import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./css/Carousel.css"


function CarouselFadeExample() {
    return (
        <div className="carousel_size_carousel">
            <div className="wrapper_coaching container">
                <div className="centered-title">Сертификаты</div>
                <div claass="row">
            </div>
            </div>
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100 size_img"
                    src={require("./img/certificate1.jpg")}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 size_img"
                    src={require("./img/certificate2.jpg")}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 size_img"
                    src={require("./img/certificate3.jpg")}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 size_img"
                    src={require("./img/certificate4.jpg")}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 size_img"
                    src={require("./img/certificate5.jpg")}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 size_img"
                    src={require("./img/certificate6.jpg")}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 size_img"
                    src={require("./img/certificate7.jpg")}
                    alt="Third slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 size_img"
                    src={require("./img/certificate8.jpg")}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 size_img"
                    src={require("./img/certificate9.jpg")}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 size_img"
                    src={require("./img/certificate10.jpg")}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 size_img"
                    src={require("./img/certificate11.jpg")}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 size_img"
                    src={require("./img/certificate12.jpg")}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 size_img"
                    src={require("./img/certificate13.jpg")}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 size_img"
                    src={require("./img/certificate14.jpg")}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 size_img"
                    src={require("./img/certificate15.jpg")}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
            </div>
    );
}

export default CarouselFadeExample;