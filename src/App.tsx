import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";
import styles from "./style";

const App = () => {
  const shouldRenderComponents = false;
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          {shouldRenderComponents ? <CardDeal /> : null}
          {shouldRenderComponents ? <Testimonials /> : null}
          {shouldRenderComponents ? <Clients /> : null}
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
