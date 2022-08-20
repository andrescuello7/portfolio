//Import react
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { init } from 'ityped'
import "./Present.css"
import UseCss from "../../useForm/useCss"

//Img for present
import perfil from "../../assets/icon_dev.png"

const Present = () => {
    useEffect(() => {
        componentDidMount()
    }, [])
    const componentDidMount = () => {
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: false, strings: ['Mobile', 'Web'] })
    }
    const {
        btnBorder,
        borderButton,
        setClickme,
        clickme } = UseCss();
    return (
        <div className="carrucel">
            <div className="CarrucelText">
                <div>
                    <div>
                        I'm Andres Cuello
                    </div>
                    <div>
                        Full Stack <i className="text-primary" id="myElement"></i>
                    </div>
                </div>
                <div className="social">
                    <Button variant='outline-primary' className='buttonPdf' href="curriculum.pdf" download="curriculum.pdf">
                        <b>
                            Curriculum PDF
                        </b>
                    </Button>
                    <a href="https://github.com/andrescuello7" className='mx-2'>
                        <span className="fab fa-github icon-favicon"></span>
                    </a>
                    <a href="https://www.linkedin.com/in/andres-cuello-a9a1b11bb/">
                        <span className="fab fa-linkedin icon-favicon"></span>
                    </a>
                </div>
            </div>
            <div className="CarrucelWidth">
                <img
                    className="carrucelImage"
                    src={perfil}
                />
            </div>
        </div>
    );
}

export default Present;