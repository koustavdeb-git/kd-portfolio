import { motion } from "framer-motion";

const blobs = [
    {
        className:
            "top-[-120px] left-[-120px] h-80 w-80 bg-blue-500/20",
        duration: 18,
    },
    {
        className:
            "bottom-[-150px] right-[-120px] h-96 w-96 bg-cyan-500/20",
        duration: 22,
    },
    {
        className:
            "top-1/3 right-1/4 h-72 w-72 bg-indigo-500/15",
        duration: 20,
    },
];

const Background = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

            {/* Animated Blobs */}
            {blobs.map((blob, index) => (
                <motion.div
                    key={index}
                    className={`absolute rounded-full blur-3xl ${blob.className}`}
                    animate={{
                        x: [0, 40, -30, 0],
                        y: [0, -30, 30, 0],
                        scale: [1, 1.15, 0.95, 1],
                    }}
                    transition={{
                        duration: blob.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
                    backgroundSize: "50px 50px",
                }}
            />

            {/* Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_65%)]" />
        </div>
    );
};

export default Background;