import "./toolbox.css";
import Laptop from "../../assets/Laptop.PNG";

function Toolbox() {
    return (
        <div className="Tool-section">
            <div className="tool-head">
                <h2>Our Creative Toolbox</h2>
            </div>
            <div className="tool-body">
                <div className="img-container">
                    <img src={Laptop} alt="Laptop" />
                </div>
                <div className="tool-body-right">
                    <div className="tool">
                        <p className="Typo-3">Cutting-edge Tech</p>
                        <p className="Typo-2">
                            Employing the latest technologies to build immersive
                            web experiences.
                        </p>
                    </div>
                    <div className="tool">
                        <p className="Typo-3">User-friendly Design</p>
                        <p className="Typo-2">
                            Creating a seamless browsing experience that pleases
                            the user.
                        </p>
                    </div>
                    <div className="tool">
                        <p className="Typo-3">Top-notch Content</p>
                        <p className="Typo-2">
                            Crafting engaging stories and visuals that captivate
                            audiences.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Toolbox;
