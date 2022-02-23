import './App.css';
import React, { useEffect, useState } from 'react';



const App = function () {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const queryWeather = () => {

    fetch('https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json')
      .then((response) => response.json())
      .then((weather) => {

        setData(weather[0].timeSeries[0].areas[0]);
        setLoading(false);
      });
  };
  useEffect(() => {

    queryWeather();
  }, []);
  let weatherInfo;
  if (loading) {

    weatherInfo = <p>loading</p>;
  } else {
    weatherInfo = (
      <p>
        {data.area.name}の明日の天気 {data.weathers[0]}
      </p>
    );
  }
  return (
    <>
      <h1>天気</h1>
      {weatherInfo}

      
    </>
  );
};

export default App;
