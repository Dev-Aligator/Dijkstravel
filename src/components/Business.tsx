import { motion } from "framer-motion";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

interface FeatureCardProps {
  icon: string;
  title: string;
  content: string;
  index: number;
  delay: number;
}
const FeatureCard = ({
  icon,
  title,
  content,
  index,
  delay,
}: FeatureCardProps) => {
  const animationVariants = {
    hidden: {
      opacity: 0,
      x: -20, // Initial position outside the left edge
    },
    visible: {
      opacity: 1,
      x: 0, // Final position
      transition: {
        duration: 0.8,
        ease: "easeIn", // Ease-in animation
        delay: delay * index, // Calculate the delay based on index
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={animationVariants}
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
      >
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </motion.div>
  );
};

interface BusinessProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const Business = ({ setOpenModal }: BusinessProps) => {
  return (
    <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
      <section id="features" className={layout.section}>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            You explore the city, <br className="sm:block hidden" />
            we'll guide your journey.{" "}
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Unlock an enriched city experience with tailored suggestions,
            letting you uncover hidden gems and maximize your visit. Amidst
            countless choices available.
          </p>
          <Button setOpenModal={setOpenModal} styles="mt-10" />
        </div>
        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              {...feature}
              index={index}
              delay={0.5}
            />
          ))}
        </div>
      </section>
    </AnimationOnScroll>
  );
};

export default Business;
