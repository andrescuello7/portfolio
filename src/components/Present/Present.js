//Import react
import { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { init } from 'ityped'
import "./Present.css"
import UseCss from "../../useForm/useCss"

//Img for present
import perfil from "../../img/perfil.jpg"

const Present = () => {
    useEffect(() => {
        componentDidMount()
    }, [])
    const componentDidMount = () => {
        const myElement = document.querySelector('#myElement')
        init(myElement, { showCursor: true, strings: ['Backend', 'Frontend', 'Mobile'] })
    }
    return (
        <div className="carrucel">
            <div className="CarrucelText">
                <p className='mx-2 text-start aboutDescription'>
                    Hello_
                </p>
                <div className='px-2'>
                    <div className='d-flex'>
                        <p>I'm </p> <p className="px-2 text-primary" id="myElement"></p>
                    </div>
                    <div>
                        <p className='mx-0 text-start aboutDescription-2'>Passionate about web development. I spend my free time learning about technology and organization.</p>
                    </div>
                </div>
                <div className="social mt-5 mx-2">
                    <a className='buttonPdf' href="curriculumviate.pdf" download="curriculumviate.pdf">
                        Curriculum
                    </a>
                    <a href="https://github.com/andrescuello7" target='_' className='mx-2 buttonPdf'>
                        GitHub
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
