import Carousel from 'react-bootstrap/Carousel';
import "./css/Carousel.css"

function CarouselFadeExample() {
    return (
        <div className={"container size_carousel"}>
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100 size_img"
                    src={require("./img/img_1.png")}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 size_img"
                    src={require("./img/img_2.png")}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 size_img"
                    src={require("./img/img_blog_item.jpg")}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
            </div>
    );
}

export default CarouselFadeExample;