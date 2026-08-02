import StarLayer from "./StarLayer";

const Stars = () => {
    return (
        <>
            {/* Far stars */}
            <StarLayer
                count={600}
                minSize={0.4}
                maxSize={1.2}
                minOpacity={0.15}
                maxOpacity={0.4}
            />

            {/* Medium stars */}
            <StarLayer
                count={180}
                minSize={1.2}
                maxSize={2.2}
                minOpacity={0.35}
                maxOpacity={0.7}
            />

            {/* Bright stars */}
            <StarLayer
                count={40}
                minSize={2.5}
                maxSize={4}
                minOpacity={0.8}
                maxOpacity={1}
                animate
            />
        </>
    );
};

export default Stars;