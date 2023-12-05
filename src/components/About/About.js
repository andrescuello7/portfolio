//Components for about
import { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { init } from 'ityped'
import "./About.css"

const About = () => {
    useEffect(() => {
        componentDidMount()
    }, [])
    const componentDidMount = () => {
        const Element = document.querySelector('#Element')
        init(Element, { showCursor: false, strings: [`'m Andres Cuello`] })
    }
    return (
        <div className="about">
            <div className="AboutTitle text-primary">
                <b className="border-bottom border-primary border-3">About</b>
            </div>
            <div className="AboutDate">
                <div className="m-2">
                    <img
                        className="AboutImg"
                        src="https://a-static.besthdwallpaper.com/computador-de-casa-papel-pintado-2560x1440-16849_51.jpg"
                        alt="First slide"
                    />
                </div>
                <div className="AboutText m-2">
                    <div>
                        <h2 className="d-flex">
                            <div>I</div>
                            <div id="Element"></div>
                        </h2>
                        <div>Backend Developer handling in Typescript - NestJS, Python - FastApi, Java - Spring Boot I am a committed and passionate person in the development process, I am interested in continuing to be part of projects that pose a challenge from an MVP, maintenance or migration of another project.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;