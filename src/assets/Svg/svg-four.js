function SvgFour() {
    return (
        <div className="svg-four">
            <svg
                viewBox="0 0 200 200"
                fill="none"
                style={{
                    transform: "rotate(0deg)",
                    display: "block",
                }}
            >
                <path
                    d="M200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0C155.228 0 200 44.7715 200 100Z"
                    fill="rgb(26, 83, 92)"
                />
                <circle
                    cx={24}
                    cy={24}
                    r={24}
                    transform="matrix(1 0 0 -1 76 124)"
                    fill="rgb(255, 107, 107)"
                />
            </svg>
        </div>
    );
}

export default SvgFour;
