function Badge({ children, className = "" }) {
    return (
        <div className={`rounded-3xl bg-white shadow-sm p-3 text-sm ${className}`}>
            {children}
        </div>
    )
}

export default Badge
