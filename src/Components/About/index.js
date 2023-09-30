import "./about.css";
import Round from "./../../assets/Svg/round";
import HalfRound from "./../../assets/Svg/half-round";

function About() {
    return (
        <section className="about-section">
            <div className="about">
                <div className="head">
                    <h2>Who We Are</h2>
                </div>
                <div className="body">
                    <p className="Typo-3">
                        We're a team of tech wizards in pursuit of creating
                        digital utopia. Our passion: modern award-winning
                        websites that push boundaries.
                    </p>
                    <div className="project-container">
                        <div className="project">
                            <Round />
                            <div>
                                <h3>200</h3>
                                <p className="Typo-2">Happy Clients</p>
                            </div>
                        </div>
                        <div className="project">
                            <Round />
                            <div>
                                <h3>500</h3>
                                <p className="Typo-2">Projects Completed</p>
                            </div>
                        </div>
                        <div className="project">
                            <HalfRound />
                            <div>
                                <h3>50</h3>
                                <p className="Typo-2">Caffeine Overdoses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
