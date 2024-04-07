import { useEffect, useState } from "react";
import "./App.css";
import BgVideo from "./BgVideo";
import Input from "./Input";
import WeatherArea from "./WeatherArea";
import Footer from "./Footer";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState();

  const cityHandler = (cName) => {
    setCity(cName);
  };

  const fetchWeatherAPI = async () => {
    const weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=21805bff7224936fa25d6cec016a0a4b&units=metric`;
    const response = await fetch(weatherAPI);
    const data = await response.json();
    setWeatherData(data);
    console.log(data);
  };

  useEffect(() => {
    fetchWeatherAPI();
  }, [city]);

  return (
    <>
      <BgVideo weatherData={city.length > 0 && weatherData}></BgVideo>
      <div className="main container-fluid py-4">
        <Input cityHandler={cityHandler}></Input>
        <WeatherArea
          weatherData={city.length > 0 && weatherData}
          city={city}
          cityHandler={cityHandler}
        ></WeatherArea>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
