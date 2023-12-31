import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import { HiLocationMarker } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

interface HeroProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero = ({ setOpenModal }: HeroProps) => {
  const animationVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        bounce: 0.2,
      },
    },
  };

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">AI</span>-Powered{" "}
            <span className="text-white">Tourist</span> Recommendation System
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <AnimatePresence>
            <motion.div
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                The Next <br className="sm:block hidden" />{" "}
                <span className="text-gradient">Generation</span>{" "}
              </h1>
            </motion.div>
          </AnimatePresence>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted setOpenModal={setOpenModal} />
          </div>
        </div>
        <AnimatePresence>
          <motion.h1
            className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full"
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
          >
            Tour Guide.
          </motion.h1>
        </AnimatePresence>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our experts personalize recommendations based on your preferences,
          considering historical value, popularity, and accessibility.
        </p>
        <motion.div
          className="flexCenterSearch search-bar animate__animated animate__wobble"
          initial="hidden"
          animate="visible"
          variants={animationVariants}
        >
          <HiLocationMarker color="#4066ff" size={25} />
          <input type="text" />
          <button className="searchButton">Search</button>
        </motion.div>
      </div>
      <motion.div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        initial={{ x: "7rem", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 2,
          type: "ease-in",
        }}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </motion.div>
      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted setOpenModal={setOpenModal} />
      </div>
    </section>
  );
};

export default Hero;
