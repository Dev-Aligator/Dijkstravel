import "../../styles/Place.css";
const PlaceHero = () => {
  return (
    <section className="section hero place-component" id="home">
      <div className="container">
        <div className="hero-content">
          <h2 className="h1 hero-title">The easy way to takeover a lease</h2>

          <p className="hero-text">
            Live in New York, New Jerset and Connecticut!
          </p>
        </div>

        <div className="hero-banner"></div>

        <form action="" className="hero-form">
          <div className="input-wrapper">
            <label htmlFor="input-1" className="input-label">
              Car, model, or brand
            </label>

            <input
              type="text"
              name="car-model"
              id="input-1"
              className="input-field"
              placeholder="What car are you looking?"
            ></input>
          </div>

          <div className="input-wrapper">
            <label htmlFor="input-2" className="input-label">
              Max. monthly payment
            </label>

            <input
              type="text"
              name="monthly-pay"
              id="input-2"
              className="input-field"
              placeholder="Add an amount in $"
            ></input>
          </div>

          <div className="input-wrapper">
            <label htmlFor="input-3" className="input-label">
              Make Year
            </label>

            <input
              type="text"
              name="year"
              id="input-3"
              className="input-field"
              placeholder="Add a minimal make year"
            ></input>
          </div>

          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default PlaceHero;
