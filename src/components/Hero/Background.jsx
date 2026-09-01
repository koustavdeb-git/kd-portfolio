const Background = () => {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[var(--bg-primary)]" />
            <div className="absolute inset-0 soft-grid opacity-40" />
        </div>
    );
};

export default Background;