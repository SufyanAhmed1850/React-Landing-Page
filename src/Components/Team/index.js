import "./team.css";
import Member1 from "../../assets/Testimonial-1.webp";
import Member2 from "../../assets/Testimonial-2.webp";
import Member3 from "../../assets/Testimonial-3.webp";
import Member4 from "../../assets/Testimonial-4.webp";
import Member from "./Member/index";

const teamMembers = [
    {
        name: "MAXWELL",
        des: "Web Architect",
        img: Member1,
        bio: "Maxwell is a seasoned Web Architect with a passion for creating robust and scalable web solutions. With a keen eye for detail and a wealth of experience, he leads our development team to deliver cutting-edge websites and applications.",
        skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
        linkedin: "https://www.linkedin.com/in/maxwell/",
    },
    {
        name: "SAMANTHA",
        des: "Design Guru",
        img: Member2,
        bio: "Samantha is our Design Guru, bringing creativity and innovation to every project. Her eye-catching designs and intuitive user interfaces ensure that our products not only look great but also provide an exceptional user experience.",
        skills: [
            "UI/UX Design",
            "Adobe Creative Suite",
            "Figma",
            "Prototyping",
        ],
        linkedin: "https://www.linkedin.com/in/samantha/",
    },
    {
        name: "ALEXANDER",
        des: "Content Wizard",
        img: Member3,
        bio: "Alexander is the Content Wizard of our team, weaving words that captivate and engage our audience. His storytelling prowess and SEO expertise contribute to our content strategy, ensuring that our message resonates across digital platforms.",
        skills: ["Content Strategy", "Copywriting", "SEO", "Content Marketing"],
        linkedin: "https://www.linkedin.com/in/alexander/",
    },
    {
        name: "OLIVIA",
        des: "Tech Enchantress",
        img: Member4,
        bio: "Olivia, our Tech Enchantress, is passionate about exploring and implementing the latest technological wonders. With a focus on enchanting user experiences, she combines tech innovation with creativity to bring magic to our digital projects.",
        skills: ["Python", "Machine Learning", "IoT", "Blockchain"],
        linkedin: "https://www.linkedin.com/in/olivia/",
    },
];

function Team() {
    return (
        <div className="team">
            {teamMembers.map(({ name, des, img }, ind) => (
                <Member key={ind} name={name} des={des} img={img} />
            ))}
        </div>
    );
}

export default Team;
