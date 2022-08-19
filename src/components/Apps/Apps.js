import { Card, Carousel } from "react-bootstrap"
import "./Apps.css"

//Imagenes
import App1 from "../../img/app1.png"
import App2 from "../../img/app2.png"
import App3 from "../../img/app3.png"

const Apps = () => {
    return (
        <div className="about">
            <div className="AppsTitle text-primary">
                <b className="border-bottom border-primary border-3">My App</b>
            </div>
            <div className="row d-flex justify-content-evenly mt-5">
                <div className="col-md-4 col-sm-10 mt-2">
                    <Carousel>
                        <Carousel.Item className="w-100 d-flex justify-content-center">
                            <img
                                className="AppImg"
                                src={App1}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="w-100 d-flex justify-content-center">
                            <img
                                className="AppImg"
                                src={App3}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item className="w-100 d-flex justify-content-center">
                            <img
                                className="AppImg"
                                src={App2}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="AboutText col-md-9 col-sm-10">
                    <div className="mt-2">
                        <h2 className="d-flex ">
                            <div>Firefly App</div>
                        </h2>
                        <div>
                            This is my application firefly, it occurred to me when I proposed the firefly website, so I was looking for the solution to the problem of being able to find a way to organize ourselves every time we meet on Saturdays.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Apps;