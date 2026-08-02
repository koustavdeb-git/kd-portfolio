import { useMemo } from "react";

const StarLayer = ({
    count,
    minSize,
    maxSize,
    minOpacity,
    maxOpacity,
    animate = false,
}) => {
    const stars = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            size: Math.random() * (maxSize - minSize) + minSize,
            left: Math.random() * 100,
            top: Math.random() * 100,
            opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
            delay: Math.random() * 5,
            duration: 3 + Math.random() * 4,
        }));
    }, [count, minSize, maxSize, minOpacity, maxOpacity]);

    return (
        <>
            {stars.map((star) => (
                <span
                    key={star.id}
                    className={animate ? "absolute rounded-full bg-white star" : "absolute rounded-full bg-white"}
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.left}%`,
                        top: `${star.top}%`,
                        opacity: star.opacity,
                        animationDelay: `${star.delay}s`,
                        animationDuration: `${star.duration}s`,
                        boxShadow: "0 0 6px rgba(255,255,255,.8)",
                    }}
                />
            ))}
        </>
    );
};

export default StarLayer;