function SvgFive() {
    return (
        <div className="svg-five">
            <svg
                viewBox="0 0 200 200"
                fill="none"
                style={{
                    transform: "rotate(180deg)",
                    display: "block",
                }}
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M200 200V0C89.543 0 0 89.5431 0 200H200Z"
                    fill="rgb(26, 83, 92)"
                />
            </svg>
        </div>
    );
}

export default SvgFive;
