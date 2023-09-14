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
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://aligator.pythonanywhere.com",
});

const App = () => {
  const shouldRenderComponents = false;
  const [modalOpen, setModalOpen] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    client
      .get("/api/authenticate/", { withCredentials: true })
      .then(function () {
        setAuthenticated(true);
      })
      .catch(function () {
        setAuthenticated(false);
      });
  }, []);

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
                client={client}
              />
            )}
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar
                  setAuthenticated={setAuthenticated}
                  setOpenModal={setModalOpen}
                  authenticated={authenticated}
                  client={client}
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
              <div className="main-modal">
                {modalOpen && (
                  <Modal
                    setOpenModal={setModalOpen}
                    setAuthenticated={setAuthenticated}
                    authenticated={authenticated}
                    client={client}
                  />
                )}
                <Navbar
                  client={client}
                  setOpenModal={setModalOpen}
                  authenticated={authenticated}
                  setAuthenticated={setAuthenticated}
                />
                <PlaceGetStarted setOpenModal={setModalOpen}></PlaceGetStarted>
                <PlaceFeature></PlaceFeature>
              </div>
            </article>
          </main>
        }
      />
    </Routes>
  );
};

export default App;
