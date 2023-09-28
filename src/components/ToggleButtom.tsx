import { useState } from "react";
import { Variants, motion } from "framer-motion";

const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false);

    const componentVariants: Variants = {
        off: {
            x: 0,
        },
        on: {
            x: "100%",
        },
    };

    return (
        <div className="w-full h-screen bg-[#222831] flex justify-center items-center">
            <motion.button
                animate={{ backgroundColor: isActive ? "#00ADB5" : "#393E46" }}
                className="bg-[#393E46] p-3 rounded-full w-[210px] flex justify-start items-center"
                onClick={() => setIsActive(!isActive)}
            >
                <motion.div
                    variants={componentVariants}
                    animate={isActive ? "on" : "off"}
                    transition={{
                        type: "spring",
                        damping: 30,
                        stiffness: 400,
                    }}
                    className="w-[90px] h-[90px] bg-[#EEEEEE] rounded-full flex justify-center items-center text-white font-semibold"
                ></motion.div>
            </motion.button>
        </div>
    );
};

export default ToggleButton;
