import { motion } from "framer-motion";

const blobs = [
    {
        size: 550,
        top: "-10%",
        left: "15%",
        color: "rgba(59,130,246,0.35)", // Blue
        duration: 18,
    },
    {
        size: 700,
        top: "25%",
        right: "-15%",
        color: "rgba(99,102,241,0.28)", // Indigo
        duration: 22,
    },
    {
        size: 500,
        bottom: "-10%",
        left: "35%",
        color: "rgba(6,182,212,0.25)", // Cyan
        duration: 20,
    },
];

const Nebula = () => {
    return (
        <>
            {blobs.map((blob, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full blur-[140px]"
                    style={{
                        width: blob.size,
                        height: blob.size,
                        background: blob.color,
                        top: blob.top,
                        left: blob.left,
                        right: blob.right,
                        bottom: blob.bottom,
                    }}
                    animate={{
                        x: [0, 40, -20, 0],
                        y: [0, -30, 20, 0],
                        scale: [1, 1.08, 0.95, 1],
                    }}
                    transition={{
                        duration: blob.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </>
    );
};

export default Nebula;