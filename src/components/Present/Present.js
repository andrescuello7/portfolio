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
        init(myElement, { showCursor: true, strings: ['Backend', 'Frontend', 'Mobile'] })
    }
    return (
        <div className="carrucel">
            <div className="CarrucelText">
                <p className='mx-5 text-start aboutDescription'>
                    Hello_
                </p>
                <div className='px-5'>
                    <div className='d-flex'>
                        <p>I'm </p> <p className="px-2 text-primary" id="myElement"></p>
                    </div>
                    <div>
                        <p className='mx-0 text-start aboutDescription-2'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                </div>
                <div className="social mt-5">
                    <button className='buttonPdf' href="curriculumviate.pdf" download="curriculumviate.pdf">
                        Curriculum
                    </button>
                    <button href="https://github.com/andrescuello7" className='mx-2 buttonPdf'>
                        GitHub
                    </button>
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