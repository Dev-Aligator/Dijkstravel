import {
  PersonAddOutline,
  CarOutline,
  PersonOutline,
  CardOutline,
} from "react-ionicons";

const PlaceGetStarted = () => {
  return (
    <section className="section get-start place-component">
      <div className="container">
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

              <h3 className="card-title">Create a profile</h3>

              <p className="card-text">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure.
              </p>

              <a href="#" className="card-link">
                Get started
              </a>
            </div>
          </li>

          <li>
            <div className="get-start-card">
              <div className="card-icon icon-2">
                <CarOutline
                  color="hsl(204, 91%, 53%)"
                  title={""}
                  height="20px"
                  width="20px"
                ></CarOutline>
              </div>

              <h3 className="card-title">Tell us what car you want</h3>

              <p className="card-text">
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose
              </p>
            </div>
          </li>

          <li>
            <div className="get-start-card">
              <div className="card-icon icon-3">
                <PersonOutline
                  color="hsl(204, 91%, 53%)"
                  title={""}
                  height="20px"
                  width="20px"
                ></PersonOutline>
              </div>

              <h3 className="card-title">Match with seller</h3>

              <p className="card-text">
                It to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic
              </p>
            </div>
          </li>

          <li>
            <div className="get-start-card">
              <div className="card-icon icon-4">
                <CardOutline
                  color="hsl(204, 91%, 53%)"
                  title={""}
                  height="20px"
                  width="20px"
                ></CardOutline>
              </div>

              <h3 className="card-title">Make a deal</h3>

              <p className="card-text">
                There are many variations of passages of Lorem available, but
                the majority have suffered alteration
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PlaceGetStarted;
