import "./team.css";
import Testimonial1 from "../../assets/Testimonial-1.webp";
import Testimonial2 from "../../assets/Testimonial-2.webp";
import Testimonial3 from "../../assets/Testimonial-3.webp";
import Testimonial4 from "../../assets/Testimonial-4.webp";

function Team() {
    return (
        <div className="team">
            <div className="team-member">
                <div>
                    <img src={Testimonial1} alt="Testimonial 1" />
                </div>
                <h4>MAXWELL</h4>
                <p className="Typo-2">Web Architect</p>
            </div>
            <div className="team-member">
                <div>
                    <img src={Testimonial2} alt="Testimonial 1" />
                </div>
                <h4>SAMANTHA</h4>
                <p className="Typo-2">Design Guru</p>
            </div>
            <div className="team-member">
                <div>
                    <img src={Testimonial3} alt="Testimonial 1" />
                </div>
                <h4>ALEXANDER</h4>
                <p className="Typo-2">Content Wizard</p>
            </div>
            <div className="team-member">
                <div>
                    <img src={Testimonial4} alt="Testimonial 1" />
                </div>
                <h4>OLIVIA</h4>
                <p className="Typo-2">Tech Enchantress</p>
            </div>
        </div>
    );
}

export default Team;
