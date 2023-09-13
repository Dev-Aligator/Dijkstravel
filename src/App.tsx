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
  PlaceFeature,
  PlaceGetStarted,
} from "./components";
import styles from "./style";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const shouldRenderComponents = false;
  const [modalOpen, setModalOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-primary w-full overflow-hidden main-modal">
            {modalOpen && (
              <Modal
                setOpenModal={setModalOpen}
                setAuthenticated={setAuthenticated}
                authenticated={authenticated}
              />
            )}
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar
                  setOpenModal={setModalOpen}
                  authenticated={authenticated}
                  setAuthenticated={setAuthenticated}
                />
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
        path="/places"
        element={
          <main>
            <article>
              <Navbar
                setOpenModal={setModalOpen}
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
              />
              <PlaceGetStarted></PlaceGetStarted>
              <PlaceFeature></PlaceFeature>
            </article>
          </main>
        }
      />
    </Routes>
  );
};

export default App;
