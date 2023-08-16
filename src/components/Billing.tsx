import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const Billing = () => {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <img
            src={bill}
            alt="billing"
            className="w-[100%] h-[100%] relative z-[5]"
          />
          <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
        </AnimationOnScroll>
      </div>
      <div className={layout.sectionInfo}>
        <AnimationOnScroll animateIn="animate__fadeInRight">
          <h2 className={styles.heading2}>
            Easily manage your <br className="sm:block hidden" /> travel plans
            on-the-go.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Access our app anywhere, anytime. Explore recommendations,
            personalize your itinerary, and make the most of your journey. Your
            ultimate travel companion.
          </p>
          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
            <img
              src={apple}
              alt="app-store"
              className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"
            />
            <img
              src={google}
              alt="google-play"
              className="w-[128px] h-[42px] object-contain cursor-pointer"
            />
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default Billing;
