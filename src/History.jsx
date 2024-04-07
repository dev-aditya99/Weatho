import React, { useEffect, useState } from "react";

function History(props) {
  const [history, setHistory] = useState([]);

  const historyHandler = () => {
    if (props.weatherData.cod === 200) {
      let newHistoryObj = {
        city: props.weatherData.name,
        country: props.weatherData.sys.country,
      };
      setHistory([...history, newHistoryObj]);
    }
  };

  useEffect(() => {
    historyHandler();
  }, [props.weatherData.name]);

  return (
    <div className="col-md-4 col-12 order-md-1 order-2 d-flex align-items-start justify-content-center">
      <div className="weather-history p-3">
        <h2 className="fw-bold text-center py-4">History</h2>
        <ul>
          {props.weatherData.cod === 200 &&
            history.map((h, idx) => (
              <li
                key={idx}
                className="fw-bold mb-1"
                role="button"
                onClick={() => props.cityHandler(h.city)}
              >
                {h.city} <span className="fw-medium ms-2">{h.country}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default History;
