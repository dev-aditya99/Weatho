import React from "react";
import { GiEmptyHourglass } from "react-icons/gi";

function Weather(props) {
  console.log(props.weatherData.cod);
  return (
    <div className="col-md-8 col-12 order-md-2 order-1 mb-md-0 mb-4 d-flex align-items-start justify-content-center flex-column">
      {props.weatherData.cod === 200 ? (
        <>
          <div className="weather p-4 mb-3">
            <p className="h5 fw-bolder">
              {props.weatherData.name},{" "}
              <span className="h6 fw-normal">
                {props.weatherData.sys.country}
              </span>
            </p>

            <div className="d-flex flex-sm-row flex-column">
              <p className="d-flex gap-2 fw-medium mb-2">
                Lattitude :
                <span className="fw-normal me-2">
                  {props.weatherData.coord.lat}°
                </span>
              </p>

              <p className="d-flex gap-2 fw-medium mb-2">
                Longitude :
                <span className="fw-normal">
                  {props.weatherData.coord.lon}°
                </span>
              </p>
            </div>

            <p className="fw-bolder mt-4 mb-2">
              {new Date(props.weatherData.dt * 1000).toDateString()}
            </p>
            <p className="fw-normal mb-2">
              {" "}
              <span className="fw-semibold me-2">Sunrise :</span>
              {new Date(
                props.weatherData.sys.sunrise * 1000
              ).toLocaleTimeString()}
            </p>

            <p className="fw-normal mb-2">
              {" "}
              <span className="fw-semibold me-2">Sunset :</span>
              {new Date(
                props.weatherData.sys.sunset * 1000
              ).toLocaleTimeString()}
            </p>

            <p className="fw-normal mt-4 mb-2">
              {" "}
              <span className="fw-bolder me-2">Temperature :</span>
              {props.weatherData.main.temp}°C
            </p>

            <p className="fw-normal mb-2">
              {" "}
              <span className="fw-semibold me-2">Max-Temperature :</span>
              {props.weatherData.main.temp_max}°C
            </p>

            <p className="fw-normal mb-2">
              {" "}
              <span className="fw-semibold me-2">Min-Temperature :</span>
              {props.weatherData.main.temp_min}°C
            </p>

            <p className="fw-normal mb-2">
              {" "}
              <span className="fw-semibold me-2">Feels Like Temperature :</span>
              {props.weatherData.main.feels_like}°C
            </p>
          </div>

          <div className="weather p-4 mb-3">
            <h2 className="fw-bold">Weather Condition</h2>
            <p className="mb-1">
              {props.weatherData.weather[0].main},
              {props.weatherData.weather[0].description}
            </p>

            <img
              src={`https://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
              width={"100px"}
              height={"100px"}
              className=""
            />

            <p className="mb-1">
              <span className="fw-semibold">Wind Speed :</span>{" "}
              {props.weatherData.wind.speed} km/h
            </p>

            <p className="mb-1">
              <span className="fw-semibold">Wind Gust :</span>{" "}
              {props.weatherData.wind.gust} mph
            </p>

            <p className="mb-1">
              <span className="fw-semibold">Wind Angle :</span>{" "}
              {props.weatherData.wind.deg}°
            </p>
          </div>

          <div className="weather p-4 mb-3">
            <h2 className="fw-bold">Additional Information</h2>
            <p className="mb-1">
              <span>Humidity : </span>
              {props.weatherData.main.humidity}%
            </p>

            <p className="mb-1">
              <span>Pressure : </span>
              {props.weatherData.main.pressure} hPa
            </p>

            <p className="mb-1">
              <span>Visibility : </span>
              {props.weatherData.visibility}m
            </p>

            <p className="mb-1">
              <span>Timezone : </span>
              GMT+{""}
              {-+new Date(
                props.weatherData.timezone * 1000
              ).getTimezoneOffset() / 60}
            </p>
          </div>
        </>
      ) : props.weatherData.cod === "404" ? (
        <div className="weather p-3 d-flex align-items-center justify-content-center">
          <div className="text-light ">
            <span className="h5 fw-bolder">
              City not found <GiEmptyHourglass className="h5" />
            </span>
          </div>
        </div>
      ) : (
        <div className="weather p-3 d-flex align-items-center justify-content-center">
          <div className="spinner-border text-light " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
