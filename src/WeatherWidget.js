import React from 'react';
import Loader from './Loader';

export default function WeatherWidget(props) {
  return (
    <div className="weatherWidget">
      {props.loading && <Loader/>}
      <div className="WeatherWidget">
        {props.city.length ?
          <div>
            {props.city} {props.temperature} {props.temperature && <sup>°C</sup>}
          </div>
          : 'No data'
        }
      </div>
    </div>
  );
}