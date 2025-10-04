import AboutUs from "../components/sections/AboutUs";
import Services from "../components/sections/Services";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

function Main() {
    return (
        <div id="main" className="max-w-7xl mx-auto mt-20 pb-20 pt-16 md:pt-20">
            <AboutUs />
            <Services />
            <Projects />
            <Contact />
        </div>
    );
}

export default Main;
