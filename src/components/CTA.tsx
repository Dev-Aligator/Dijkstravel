import styles from "../style";
import Button from "./Button";

interface CTAProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const CTA = ({ setOpenModal }: CTAProps) => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h2 className={styles.heading2}>Let's try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          All you need to explore city attractions and elevate your travels,
          available worldwide.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button setOpenModal={setOpenModal} styles="" />
      </div>
    </section>
  );
};

export default CTA;
