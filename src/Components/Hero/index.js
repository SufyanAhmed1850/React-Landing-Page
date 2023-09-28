import { useEffect, useState } from "react";
import "./hero.css";
import SvgOne from "../../assets/Svg/svg-one";
import SvgTwo from "../../assets/Svg/svg-two";
import SvgThree from "../../assets/Svg/svg-three";
import SvgFour from "../../assets/Svg/svg-four";
import SvgFive from "../../assets/Svg/svg-five";
import SvgSix from "../../assets/Svg/svg-six";
import SvgSeven from "../../assets/Svg/svg-seven";
import SvgEight from "../../assets/Svg/svg-eight";
import SvgNine from "../../assets/Svg/svg-nine";
import SvgTen from "../../assets/Svg/svg-ten";

function Hero() {
    const [date, setDate] = useState("");
    useEffect(() => {
        setInterval(() => {
            const today = new Date();
            const formattedDate = today.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
            });
            setDate(formattedDate);
        }, 1);
    }, []);
    console.log("formattedDate");
    return (
        <section className="Hero">
            <div className="hero-child">
                <div className="hero-title">
                    <h1>REVOLUTIONIZE</h1>
                    <div className="hero-para">
                        <p className="Typo-1 para-1">Stunning Web Mastery.</p>
                        <p className="Typo-1 para-2">Dive In</p>
                        <p className="Typo-1 para-3">{date}</p>
                    </div>
                </div>
                <div className="hero-image">
                    <SvgOne />
                    <SvgTwo />
                    <SvgThree />
                    <SvgFour />
                    <SvgFive />
                    <SvgSix />
                    <SvgSeven />
                    <SvgEight />
                    <SvgNine />
                    <SvgTen />
                </div>
            </div>
        </section>
    );
}

export default Hero;
