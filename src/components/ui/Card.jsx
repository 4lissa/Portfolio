function Card({ imgSrc, children, className = "" }) {
    return (
        <div className={`flex flex-col p-4 gap-5 rounded-3xl shadow-lg ${className}`}>
            {imgSrc && (
                <img
                    src={imgSrc}
                    alt=""
                    className="rounded-3xl shadow-sm"
                />
            )}
            {children}
        </div>
    );
}

export default Card
