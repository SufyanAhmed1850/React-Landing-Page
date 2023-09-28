function SvgNine() {
    return (
        <div className="svg-nine">
            <svg
                viewBox="0 0 200 200"
                fill="none"
                style={{
                    transform: "rotate(270deg)",
                    display: "block",
                }}
            >
                <rect width={100} height={100} fill="rgb(26, 83, 92)" />
                <rect
                    x={100}
                    y={100}
                    width={100}
                    height={100}
                    fill="rgb(255, 107, 107)"
                />
            </svg>
        </div>
    );
}

export default SvgNine;
