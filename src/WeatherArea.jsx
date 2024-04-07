import History from "./History";
import Weather from "./Weather";

function WeatherArea(props) {
  return (
    <div className="row mt-5">
      {props.city.length > 0 && (
        <History
          weatherData={props.weatherData}
          cityHandler={props.cityHandler}
        ></History>
      )}

      {props.city.length > 0 && (
        <Weather weatherData={props.weatherData}></Weather>
      )}
    </div>
  );
}
export default WeatherArea;
