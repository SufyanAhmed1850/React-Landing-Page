function SvgTwo() {
    return (
        <div className="svg-two">
            <svg
                viewBox="0 0 200 200"
                fill="none"
                style={{
                    transform: "rotate(270deg)",
                    display: "block",
                }}
            >
                <path
                    d="M0 100C0 155.228 44.7715 200 100 200V0C44.7715 0 0 44.7715 0 100Z"
                    fill="rgb(26, 83, 92)"
                />
                <path
                    d="M100 100C100 155.228 144.772 200 200 200V0C144.772 0 100 44.7715 100 100Z"
                    fill="rgb(255, 107, 107)"
                />
            </svg>
        </div>
    );
}

export default SvgTwo;
