function Button({ children, onClick, type, href, download, className = "" }) {
    if (href) {
        return (
            <a
                href={href}
                download={download}
                className={`rounded-xl bg-white shadow-sm p-3 text-sm transition-transform duration-150 ease-out hover:scale-105 active:scale-95 ${className}`}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={`rounded-xl bg-white shadow-sm p-3 text-sm transition-transform duration-150 ease-out hover:scale-105 active:scale-95 ${className}`}
        >
            {children}
        </button>
    );
}

export default Button
