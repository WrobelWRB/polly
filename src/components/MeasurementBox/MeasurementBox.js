import React from 'react';
import MeasurementCircle from '../MeasurementCircle/MeasurementCircle';
import WeatherCircle from '../WeatherCircle/WeatherCircle';

import classes from './MeasurementBox.module.css';

const MeasurementBox = ({ type, label, data }) => {
  const dataArr = [];
  let box;
  switch (type) {
    case 'pollution':
      for (const key in data) {
        if (data[key].value !== null) {
          dataArr.push({
            label: key,
            value: data[key].value,
            maxValue: data[key].maxValue,
          });
        }
      }
      console.log(dataArr);
      const weatherBoxClassList = [
        classes.MeasurementBox,
        'animate__animated',
        'animate__bounceInUp',
      ];
      const circlesClassList = [classes.Circles, classes.Pollution];
      box =
        dataArr.length !== 0 ? (
          <div className={weatherBoxClassList.join(' ')}>
            <h2 className={classes.Label}>{label}</h2>
            <div className={circlesClassList.join(' ')}>
              {dataArr.map((el) => {
                return (
                  <MeasurementCircle
                    key={el.label}
                    label={el.label}
                    value={el.value}
                    maxValue={el.maxValue}
                  />
                );
              })}
            </div>
          </div>
        ) : null;
      break;
    case 'weather':
      for (const key in data) {
        if (data[key].value !== null) {
          dataArr.push({ label: key, value: data[key].value });
        }
      }
      const pollutionBoxClassList = [
        classes.MeasurementBox,
        'animate__animated',
        'animate__bounceInUp',
      ];
      box =
        dataArr.length !== 0 ? (
          <div className={pollutionBoxClassList.join(' ')}>
            <div className={classes.Label}>{label}</div>
            <div className={classes.Circles}>
              {dataArr.map((el) => {
                return (
                  <WeatherCircle
                    key={el.label}
                    label={el.label}
                    value={el.value}
                  />
                );
              })}
            </div>
          </div>
        ) : null;
      break;
    default:
      box = <p>No measurement content</p>;
  }

  return <>{box}</>;
};

export default MeasurementBox;
