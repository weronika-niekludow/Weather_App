import hot from "./assets/hot.jpg";
import cold from "./assets/cold.jpg";

function App() {
  return (
    <div className="app" style={{ backgroundImage: `url(${cold})` }}>
      <div className="overlay">
        <div className="container">
          <div className="sectionInputs">
            <input type="text" name="city" placeholder="Enter City..." />{" "}
            <button> F </button>
          </div>
          <div className="sectionTemperature">
            <div className="icon">
              <h3>London,GB</h3>
              <img
                src="https://pl.seaicons.com/wp-content/uploads/2022/07/Weather-Clouds-icon.png"
                alt="weatherIcon"
              />
              <h3>Cloudy</h3>
              <div className="temperature">
                <h1> 15 C</h1>
              </div>
            </div>
            {/* bottom description */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
