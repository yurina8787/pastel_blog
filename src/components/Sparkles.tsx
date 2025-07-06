const Sparkles = () => {
    return (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            {Array.from({ length: 30 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute bg-white rounded-full animate-sparkle"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${Math.random() * 3 + 1}px`,
                        height: `${Math.random() * 3 + 1}px`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${Math.random() * 3 + 2}s`,
                    }}
                />
            ))}
        </div>
    );
};

export default Sparkles;
