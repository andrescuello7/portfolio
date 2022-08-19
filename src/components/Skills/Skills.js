import { Card, ProgressBar } from "react-bootstrap"
import "./Skills.css"

const Skills = () => {
    return (
        <div className="about dateSkills">
            <div className="AboutTitle text-primary">
                <b className="border-bottom border-primary border-3">Skills</b>
            </div>
            <div className="Skills mt-5">
                <div className="SkillsDates">
                    <Card border="secundary p-2 m-2" className="SkillsCard">
                        <img className="SkillsImgsCuadrado" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh7HwVz9h18DrB8OeLJ1oUyWw6JPIBqfxDUEiFi_804PEIQxzvfuW5p0eQ3inRMifes4s&usqp=CAU" />
                        <b>HTML</b>
                    </Card>
                    <Card border="secundary p-2 m-2" className="SkillsCard">
                        <img className="SkillsImgsCuadrado" src="http://www.priteshgupta.com/wp-content/uploads/2011/10/CSS3-Logo.png" />
                        <b>CSS</b>
                    </Card>
                    <Card border="secundary p-2 m-2" className="SkillsCard">
                        <img className="SkillsImgsCuadrado" src="https://w1.pngwing.com/pngs/136/126/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png" />
                        <b>Javascript</b>
                    </Card>
                    <Card border="secundary p-2 m-2" className="SkillsCard">
                        <img className="SkillsImgsCuadrado" src="https://ih1.redbubble.net/image.1150190633.8412/st,small,845x845-pad,1000x1000,f8f8f8.jpg" />
                        <b>Flutter</b>
                    </Card>
                    <Card border="secundary p-2 m-2" className="SkillsCard">
                        <img className="SkillsImgsCuadrado" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png" />
                        <b className="ml-5">ReactJs</b>
                    </Card>
                </div>
                <div className="SkillsDates">
                    <Card border="secundary p-2 m-2" className="SkillsCard">
                        <img className="SkillsImgsCuadrado" src="https://www.kindpng.com/picc/m/176-1766682_dart-programming-language-hd-png-download.png" />
                        <b>Dart</b>
                    </Card>
                    <Card border="secundary p-2 m-2" className="SkillsCard">
                        <img className="SkillsImgsCuadrado" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" />
                        <b>Typescript</b>
                    </Card>
                    <Card border="secundary p-2 m-2" className="SkillsCard">
                        <img className="SkillsImgsCuadrado" src="https://victorroblesweb.es/wp-content/uploads/2017/10/go.png" />
                        <b>Go</b>
                    </Card>
                    <Card border="secundary p-2 m-2" className="SkillsCard">
                        <img className="SkillsImgsCuadrado" src="https://nodejs.org/static/images/logo-hexagon-card.png" />
                        <b>NodeJs</b>
                    </Card>
                    <Card border="secundary p-2 m-2" className="SkillsCard">
                        <img className="SkillsImgsCuadrado" src="http://lineadecodigo.com/wp-content/uploads/2014/04/mongodb.png" />
                        <b>MongoDb</b>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Skills;