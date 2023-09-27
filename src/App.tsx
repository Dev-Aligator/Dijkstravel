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
  PlaceModal,
  UserProfile,
} from "./components";
import styles from "./style";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import {
  AleartProps,
  Place,
  PlaceDetails,
  Review,
  UserFeature,
} from "./components/Interface/InterfaceCollection";
import Aleart from "./components/Aleart";
import { environmentVariable } from "./constants/environment";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: environmentVariable.baseUrl,
});

const App = () => {
  const shouldRenderComponents = false;
  const [modalOpen, setModalOpen] = useState(false);
  const [openPlaceModal, setOpenPlaceModal] = useState(false);

  const [authenticated, setAuthenticated] = useState(false);

  const [placeDetails, setPlaceDetails] = useState<
    [Place | null, PlaceDetails | null, Review[], String]
  >([null, null, [], ""]);

  const [userInfo, setUserInfo] = useState<[String, UserFeature | null]>([
    "undefine",
    null,
  ]);
  const [aleartInfo, setAleartInfo] = useState<AleartProps>({
    isAleart: 0,
  });

  useEffect(() => {
    client
      .get("/api/authenticate/", { withCredentials: true })
      .then(function () {
        setAuthenticated(true);
        getUser();
      })
      .catch(function () {
        setAuthenticated(false);
      });
  }, []);

  const getUser = () => {
    client
      .get("/api/get/user/")
      .then(function (res) {
        setUserInfo([res.data["user"]["email"], res.data["user_details"]]);
        setAleartInfo({
          isAleart: 1,
          title: "Success",
          normalText: "You're currently logged in !",
          strongText: "Start diving now",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="bg-primary-custom w-full overflow-hidden main-modal">
            <Aleart
              isAleart={aleartInfo.isAleart}
              title={aleartInfo.title}
              normalText={aleartInfo.normalText}
              strongText={aleartInfo.strongText}
              setAleartInfo={setAleartInfo}
              severity={aleartInfo.severity}
              color={aleartInfo.color}
            ></Aleart>
            {modalOpen && !authenticated && (
              <Modal
                setOpenModal={setModalOpen}
                setAuthenticated={setAuthenticated}
                authenticated={authenticated}
                client={client}
                getUserFunction={getUser}
              />
            )}
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
              <div className={`${styles.boxWidth}`}>
                <Navbar
                  setAuthenticated={setAuthenticated}
                  setOpenModal={setModalOpen}
                  authenticated={authenticated}
                  client={client}
                  userInfo={userInfo}
                />
              </div>
            </div>
            <div className={`bg-primary-custom ${styles.flexStart}`}>
              <div className={`${styles.boxWidth}`}>
                <Hero setOpenModal={setModalOpen} />
              </div>
            </div>
            <div
              className={`bg-primary-custom ${styles.paddingX} ${styles.flexStart}`}
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
                {modalOpen && !authenticated && (
                  <Modal
                    setOpenModal={setModalOpen}
                    setAuthenticated={setAuthenticated}
                    authenticated={authenticated}
                    client={client}
                    getUserFunction={getUser}
                  />
                )}

                {openPlaceModal && (
                  <PlaceModal
                    setOpenPlaceModal={setOpenPlaceModal}
                    placeDetails={placeDetails}
                    client={client}
                    userInfo={userInfo}
                  ></PlaceModal>
                )}
                <Navbar
                  client={client}
                  setOpenModal={setModalOpen}
                  authenticated={authenticated}
                  setAuthenticated={setAuthenticated}
                  userInfo={userInfo}
                />
                <PlaceGetStarted setOpenModal={setModalOpen}></PlaceGetStarted>
                <PlaceFeature
                  client={client}
                  setOpenPlaceModal={setOpenPlaceModal}
                  setPlaceDetails={setPlaceDetails}
                  userInfo={userInfo}
                ></PlaceFeature>
              </div>
            </article>
          </main>
        }
      />
      <Route
        path="/profile"
        element={
          <div className="bg-primary-profile">
            <Navbar
              setAuthenticated={setAuthenticated}
              setOpenModal={setModalOpen}
              authenticated={authenticated}
              client={client}
              userInfo={userInfo}
            />
            <UserProfile userInfo={userInfo} client={client}></UserProfile>
          </div>
        }
      ></Route>
    </Routes>
  );
};

export default App;
