import { Card, Button } from "react-bootstrap"
import "./Jobs.css"

//Imagenes
import Urban from "../../img/Urban.png"
import Radio from "../../img/Radio.png"
import Firefly from "../../img/firefly.png"
import Movie from "../../img/Movies.png"
import Immedit from "../../img/Immedit.png"
import Commers from "../../img/e-commers.png"
import Evenly from "../../img/evenly.png"

const Jobs = () => {
    return (
        <div className="about">
            <div className="AboutTitle text-primary">
                <b className="border-bottom border-primary border-3">Web sites</b>
            </div>
            <div className="Jobs">
                <Card className="cardJob mt-5">
                    <a href="https://immedit.vercel.app/">
                        <Card.Img variant="top" src={Immedit} />
                    </a>
                    <Card.Body>
                        <Card.Title>Immedit</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="cardJob mt-5">
                    <a href="https://e-commers-pi.vercel.app">
                        <Card.Img variant="top" src={Commers} />
                    </a>
                    <Card.Body>
                        <Card.Title>e-commers</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="cardJob mt-5">
                    <a href="https://client-andromeda.vercel.app">
                        <Card.Img variant="top" src={Urban} />
                    </a>
                    <Card.Body>
                        <Card.Title>Urban City</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="cardJob mt-5">
                    <a href="https://admiring-stonebraker-a257df.netlify.app">
                        <Card.Img variant="top" src={Evenly} />
                    </a>
                    <Card.Body>
                        <Card.Title>Evenly</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="cardJob mt-5">
                    <a>
                        <Card.Img variant="top" src={Movie} />
                    </a>
                    <Card.Body>
                        <Card.Title>Movies Api</Card.Title>
                    </Card.Body>
                </Card>
                <Card className="cardJob mt-5">
                    <a href="https://firefly-front-flax.vercel.app/">
                        <Card.Img variant="top" src={Firefly} />
                    </a>
                    <Card.Body>
                        <Card.Title>Luciernagas</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default Jobs;