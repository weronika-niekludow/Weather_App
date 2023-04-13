import hot from "./assets/hot.jpg";
import cold from "./assets/cold.jpg";
import Descriptions from "./assets/components/Descriptions";

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${cold})` }}>
      <div className="overlay">
        <div className="container">
          <div className="section sectionInputs">
            <input type="text" name="city" placeholder="Enter City..." />{" "}
            <button> °F </button>
          </div>
          <div className="section sectionTemperature">
            <div className="icon">
              <h3>London,GB</h3>

              <img
                className="image"
                src="https://pl.seaicons.com/wp-content/uploads/2022/07/Weather-Clouds-icon.png"
                alt="weatherIcon"
              />
              <h3>Cloudy</h3>
            </div>
            <div className="temperature">
              <h1> 15 °C</h1>
            </div>
          </div>
          <Descriptions />
        </div>
      </div>
    </div>
  );
}

export default App;
