import {
  PersonAddOutline,
  ImageOutline,
  DocumentTextOutline,
  AirplaneOutline,
} from "react-ionicons";
import { motion, AnimatePresence } from "framer-motion";

interface PlaceGetStartedProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const PlaceGetStarted = ({ setOpenModal }: PlaceGetStartedProps) => {
  return (
    <section className="section get-start place-component">
      <AnimatePresence>
        <motion.div
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            type: "ease-in",
          }}
          className="container"
        >
          <h2 className="h2 section-title">Get started with 4 simple steps</h2>

          <ul className="get-start-list">
            <li>
              <div className="get-start-card">
                <div className="card-icon icon-1">
                  <PersonAddOutline
                    color="hsl(204, 91%, 53%)"
                    title={""}
                    height="20px"
                    width="20px"
                  ></PersonAddOutline>
                </div>

                <h3 className="card-title">Create Your Profile Account</h3>

                <p className="card-text">
                  Sign up quickly to unlock a world of incredible travel
                  experiences tailored just for you.
                  <a
                    className="card-link"
                    onClick={() => {
                      setOpenModal(true);
                    }}
                  >
                    Get started
                  </a>
                </p>
              </div>
            </li>

            <li>
              <div className="get-start-card">
                <div className="card-icon icon-2">
                  <ImageOutline
                    color="hsl(204, 91%, 53%)"
                    title={""}
                    height="20px"
                    width="20px"
                  ></ImageOutline>
                </div>

                <h3 className="card-title">Tell Us Your Ideal Destination</h3>

                <p className="card-text">
                  Share your desired destination and travel interests to help us
                  curate the perfect experience for you.
                </p>
              </div>
            </li>

            <li>
              <div className="get-start-card">
                <div className="card-icon icon-3">
                  <DocumentTextOutline
                    color="hsl(204, 91%, 53%)"
                    title={""}
                    height="20px"
                    width="20px"
                  ></DocumentTextOutline>
                </div>

                <h3 className="card-title">List Your Previous Locations</h3>

                <p className="card-text">
                  Tell us about the places you've explored and the remarkable
                  moments you've cherished.
                </p>
              </div>
            </li>

            <li>
              <div className="get-start-card">
                <div className="card-icon icon-4">
                  <AirplaneOutline
                    color="hsl(204, 91%, 53%)"
                    title={""}
                    height="20px"
                    width="20px"
                  ></AirplaneOutline>
                </div>

                <h3 className="card-title">
                  Dive In and Share Your Travel Reviews
                </h3>

                <p className="card-text">
                  Start your travel journey by exploring our recommended
                  destinations and experiences.
                </p>
              </div>
            </li>
          </ul>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default PlaceGetStarted;
