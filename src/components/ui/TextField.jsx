function TextField({ value, onChange, placeholder = "", required, type, multiline = false, rows }) {
    return multiline ? (
        <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            required={required}
            rows={rows}
            className="rounded-3xl shadow-sm p-3 text-sm w-full focus:outline-none"
        />
    ) : (
        <input
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            required={required}
            type={type}
            className="rounded-3xl shadow-sm p-3 text-sm w-full focus:outline-none"
        />
    )
}

export default TextField
