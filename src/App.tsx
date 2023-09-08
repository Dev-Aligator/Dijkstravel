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
  Modal,
  PlaceHero,
  PlaceFeature,
  PlaceGetStarted,
} from "./components";
import styles from "./style";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
const App = () => {
  const shouldRenderComponents = false;
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <Routes>
      <Route
        path="/Dijkstravel"
        element={
          <div className="bg-primary w-full overflow-hidden main-modal">
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar setOpenModal={setModalOpen} />
              </div>
            </div>
            <div className={`bg-primary ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero setOpenModal={setModalOpen} />
              </div>
            </div>
            <div
              className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
            >
              <div className={`${styles.boxWidth}`}>
                <Stats />
                <Business setOpenModal={setModalOpen} />
                <Billing />
                {shouldRenderComponents ? (
                  <CardDeal setOpenModal={setModalOpen} />
                ) : null}
                {shouldRenderComponents ? <Testimonials /> : null}
                {shouldRenderComponents ? <Clients /> : null}
                <CTA setOpenModal={setModalOpen} />
                <Footer />
              </div>
            </div>
          </div>
        }
      />
      <Route
        path="/Dijkstravel/places"
        element={
          <main>
            <article>
              <PlaceHero></PlaceHero>
              <PlaceFeature></PlaceFeature>
              <PlaceGetStarted></PlaceGetStarted>
            </article>
          </main>
        }
      />
    </Routes>
  );
};

export default App;
