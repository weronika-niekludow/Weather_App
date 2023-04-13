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
                src="https://cdn-icons-png.flaticon.com/512/966/966386.png?w=740&t=st=1681402925~exp=1681403525~hmac=cd0a7542a4ad82dc2fb6e2484164b78a7a6279785b0d838fa33c7307234a728c"
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
