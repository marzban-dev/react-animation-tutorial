import { motion } from "framer-motion";
import { useState } from "react";

const AnimateComponent = () => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="w-full h-screen bg-[#222831] flex justify-center items-center">
            <motion.div
                initial={{ scale: 0 }}
                animate={{
                    scale: 1,
                    y: isActive ? -100 : 0,
                }}
                transition={{
                    duration: 1,
                    scale: {
                        type: "spring",
                        damping: 100,
                        stiffness: 600,
                        // repeat: 3,
                        // repeatDelay : 1,
                        // repeatType : "reverse"
                    },
                    y: {
                        duration: 3,
                    },
                }}
                className="w-[200px] h-[200px] bg-[#00ADB5] rounded-full flex justify-center items-center text-white font-semibold text-[30px]"
            >
                Hello
            </motion.div>

            <button
                onClick={() => setIsActive(!isActive)}
                className="flex justify-center items-center bg-[#FF2E63] rounded-[10px] px-8 py-2 text-white font-semibold fixed bottom-[100px] text-[20px]"
            >
                Active
            </button>
        </div>
    );
};

export default AnimateComponent;
