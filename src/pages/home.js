//Components
import Present from "../components/Present/Present";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Jobs from "../components/Jobs/Jobs";
import Apps from "../components/Apps/Apps";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import UseCss from "../useForm/useCss"

const Home = () => {
    const { borderButton } = UseCss();
    return (
        <div className={borderButton}>
            <div className="animate__animated animate__fadeIn mt-2" id="home">
                <Present />
            </div>
            <div className="animate__animated animate__fadeIn mt-5" id="about">
                <About />
            </div>
            <div className="animate__animated animate__fadeIn mt-5" id="jobs">
                <Jobs />
            </div>
            <div className="animate__animated animate__fadeIn mt-5" id="jobs">
                <Apps />
            </div>
            <div className="animate__animated animate__fadeIn mt-5" id="skills">
                <Skills />
            </div>
            {/* <div className="animate__animated animate__fadeIn mt-5" id="contact">
                <Contact />
            </div> */}
            <div className="animate__animated animate__fadeIn mt-5" id="contact">
                <Footer />
            </div>
        </div>
    );
}

export default Home;
