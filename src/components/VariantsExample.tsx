import { Variants, motion } from "framer-motion";
import { useState } from "react";

const VariantsExample = () => {
    const [position, setPosition] = useState(0);

    const componentVariants: Variants = {
        hide: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: 1,
            x: position,
            opacity: 1,
        },
    };

    return (
        <div className="w-full h-screen bg-[#222831] flex justify-center items-center">
            <motion.div
                variants={componentVariants}
                initial="hide"
                animate="show"
                className="w-[200px] h-[200px] bg-[#00ADB5] rounded-full flex justify-center items-center text-white font-semibold text-[30px]"
            >
                Hello
            </motion.div>

            <button
                onClick={() => setPosition(Math.round(Math.random() * 200))}
                className="flex justify-center items-center bg-[#25d337] rounded-[10px] px-8 py-2 text-white font-semibold fixed bottom-[100px] text-[20px]"
            >
                Change Position
            </button>
        </div>
    );
};

export default VariantsExample;
