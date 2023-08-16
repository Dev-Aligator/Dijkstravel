import { card } from "../assets";
import Button from "./Button";
import styles, { layout } from "../style";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <AnimationOnScroll animateIn="animate__backInLeft">
          <h2 className={styles.heading2}>
            Find a better card deal <br className="sm:block hidden" />
            in few easy steps.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
            aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
          </p>
          <Button styles="mt-10" />
        </AnimationOnScroll>
      </div>
      <div className={layout.sectionImg}>
        <AnimationOnScroll animateIn="animate__backInRight">
          <img src={card} alt="card" className="w-[100%] h-[100%]" />
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default CardDeal;
