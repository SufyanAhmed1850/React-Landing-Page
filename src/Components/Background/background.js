import Team from "../Team";
import Toolbox from "../Toolbox";
import "./background.css";

function Background() {
    return (
        <section className="Bg">
            <div style={{ padding: "7rem 0 6rem 0" }}>{<Team />}</div>
            <div style={{ padding: "7rem 0" }}>{<Toolbox />}</div>
        </section>
    );
}

export default Background;
