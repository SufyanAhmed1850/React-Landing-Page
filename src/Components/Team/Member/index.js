import "./member.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Member = ({ img, name, des }) => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest(".team-member-modal")) {
                setShowModal(false);
            }
        };
        const disableScroll = () => {
            document.body.style.overflow = "hidden";
        };
        const enableScroll = () => {
            document.body.style.overflow = "auto";
        };
        document.addEventListener("mousedown", handleOutsideClick);
        if (showModal) {
            disableScroll();
        }
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
            enableScroll();
        };
    }, [showModal]);

    const openTransition = {
        duration: 0.4,
        ease: [0.85, 0, 0.15, 1],
    };
    const closeTransition = {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.9],
    };
    const currentTransition = showModal ? openTransition : closeTransition;

    return (
        <>
            {showModal && (
                <motion.div
                    transition={currentTransition}
                    className="team-member-modal-bg"
                >
                    <motion.div
                        layoutId={`team-member-${name}`}
                        className="team-member-modal"
                        transition={currentTransition}
                    >
                        <div className="modal-img">
                            <motion.img
                                layoutId={`image-${name}`}
                                src={img}
                                alt="Testimonial 1"
                                transition={currentTransition}
                            />
                        </div>
                        <div className="modal-body">
                            <motion.h2
                                transition={currentTransition}
                                layoutId={`name-${name}`}
                            >
                                {name}
                            </motion.h2>
                            <motion.p
                                layoutId={`des-${des}`}
                                className="Typo-2"
                                transition={currentTransition}
                            >
                                {des}
                            </motion.p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
            <motion.div
                layoutId={`team-member-${name}`}
                transition={currentTransition}
                className="team-member"
                onClick={() => setShowModal(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <div>
                    <motion.img
                        layoutId={`image-${name}`}
                        transition={currentTransition}
                        src={img}
                        alt="Testimonial 1"
                    />
                </div>
                <motion.h4
                    transition={currentTransition}
                    layoutId={`name-${name}`}
                >
                    {name}
                </motion.h4>
                <motion.p
                    transition={currentTransition}
                    layoutId={`des-${des}`}
                    className="Typo-2"
                >
                    {des}
                </motion.p>
            </motion.div>
        </>
    );
};

export default Member;
