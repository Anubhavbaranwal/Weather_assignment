import React from "react";
// import { WeatherIcons } from "../App";
import sunset from "../icon/weather.png";
import sunrise from "../icon/weather.png";
import humidity from "../icon/drop.png";
import wind from "../icon/wind.png";
import pressure from "../icon/cloudy.png";
import Sunny from '../icon/sunny.svg';
import Night from '../icon/night.svg';
import Day from '../icon/day.svg';
import CloudyNight from '../icon/cloudy-night.svg';
import Cloudy from '../icon/cloudy.svg';
import PerfectDay from '../icon/perfect-day.svg';
import Rain from '../icon/rain.svg';
import RainNight from '../icon/rain-night.svg';
import Storm from '../icon/storm.svg';

export const WeatherIcons2 = {
  sunset,
  sunrise,
  humidity,
  wind,
  pressure,
};


const WeatherInfoComponent = (props) => {
  const { name, value, activeBtn } = props;
  return (
    <div className="flex m-2 justify-evenly items-center ">
      <img className=" w-14 h-14" src={WeatherIcons2[name]} />
      <span className={` ${ activeBtn === "dark" ? "text-white" : "text-black"} flex flex-col text-lg m-3`}>
        {value}
        <span className={`${activeBtn === "dark" ? "text-white" : "text-black"} text-lg capitalize`}>
          {name}
        </span>
      </span>
    </div>
  );
};

const WeatherComponent = (props) => {

  const { weather, activeBtn } = props;
  const isDay = weather?.weather[0].icon?.includes("d");
  const getTime = (timeStamp) => {
    return `${new Date(timeStamp * 1000).getHours()} : ${new Date(
      timeStamp * 1000
    ).getMinutes()}`;
  };

  const WeatherIcons = {
    "01d": <img src={Sunny} alt="Sunny" className={`${activeBtn==="dark"?" text-white fill-current ":"text-black"}w-24 h-24 m-1`}/>,
    "01n": <img src={Night} alt="Night" className={`${activeBtn==="dark"?" text-white fill-current ":"text-black"}w-24 h-24 m-1`}/>,
    "02d": <img src={Day} alt="Day" className={`${activeBtn==="dark"?" text-white fill-current ":"text-black"}w-24 h-24 m-1`}/>,
    "02n": <img src={CloudyNight} alt="Cloudy Night" className={`${activeBtn==="dark"?" text-white fill-current ":"text-black"}w-24 h-24 m-1`}/>,
    "03d": <img src={Cloudy} alt="Cloudy" className={`${activeBtn==="dark"?" text-white fill-current ":"text-black"}w-24 h-24 m-1`}/>,
    "03n": <img src={Cloudy} alt="Cloudy" className={`${activeBtn==="dark"?" text-white fill-current ":"text-black"}w-24 h-24 m-1`}/>,
    "04d": <img src={PerfectDay} alt="Perfect Day" className={`${activeBtn==="dark"?" text-white fill-current ":"text-black"}w-24 h-24 m-1`}/>,
    "04n": <img src={CloudyNight} alt="Cloudy Night" className={`${activeBtn==="dark"?" text-white fill-current ":"text-black"}w-24 h-24 m-1`}/>,
    "09d": <img src={Rain} alt="Rain" className={`${activeBtn==="dark"?" text-white fill-current ":"text-black"}w-24 h-24 m-1`}/>,
    "09n": <img src={RainNight} alt="Rain Night" className={`${activeBtn==="dark"?" text-white fill-current ":"text-black"}w-24 h-24 m-1`}/>,
    "10d": <img src={Rain} alt="Rain" className={`${activeBtn==="dark"?" text-white fill-current ":"text-black"}w-24 h-24 m-1`}/>,
    "10n": <img src={RainNight} alt="Rain Night" className={`${activeBtn==="dark"?" text-white fill-current ":"text-black"}w-24 h-24 m-1`}/>,
    "11d": <img src={Storm} alt="Storm" className={`${activeBtn==="dark"?" text-white fill-current ":"text-black"}w-24 h-24 m-1`}/>,
    "11n": <img src={Storm} alt="Storm" className={`${activeBtn==="dark"?" text-white fill-current ":"text-black"}w-24 h-24 m-1`}/>,
    "13d": <img src={Rain} alt="Rain" className={`${activeBtn==="dark"?" text-white fill-current ":"text-black"}w-24 h-24 m-1`}/>,
    "13n": <img src={Rain} alt="Rain" className={`${activeBtn==="dark"?" text-white fill-current ":"text-black"}w-24 h-24 m-1`} />,
    "50d": <img src={RainNight} alt="Rain Night" className={`${activeBtn==="dark"?" text-white fill-current ":"text-black"}w-24 h-24 m-1`} />,
    "50n": <img src={RainNight} alt="Rain Night" className={`${activeBtn==="dark"?" text-white fill-current ":"text-black"}w-24 h-24 m-1`} />,
};

  return (
    <>
      <div className="flex w-auto md:w-full m-7 flex-row justify-between items-center">
        <span className={`${ activeBtn === "bright" ? "" : "text-white"} m-5 capitalize text-sm`} >
          <span className={` text-2xl`}>{`${Math.floor(weather?.main?.temp - 273)}°C`}</span>
          {`  |  ${weather?.weather[0].description}`}
        </span>
        {WeatherIcons[weather?.weather[0]?.icon]}
      </div>

      <span className={`${activeBtn==="dark"?"text-white":"text-black"} m-3.5 auto capitalize text-2xl font-bold`}>{`${weather?.name}, ${weather?.sys?.country}`}</span>
      <span className={`${activeBtn==="dark"?"text-white":""} m-5 text-lg capitalize text-start w-9/12 font-bold`}> Weather Info </span>
      <div className="flex  justify-evenly items-center">
        <div>
          <WeatherInfoComponent name={isDay ? "sunset" : "sunrise"} value={`${getTime(weather?.sys[isDay ? "sunset" : "sunrise"])}`} activeBtn={activeBtn}/>
          <WeatherInfoComponent name="humidity" value={weather?.main?.humidity} activeBtn={activeBtn} />
        </div>
        <div>
          <WeatherInfoComponent name="wind" value={weather?.wind?.speed} activeBtn={activeBtn}/>
          <WeatherInfoComponent name="pressure" value={weather?.main?.pressure} activeBtn={activeBtn} />
        </div>
      </div>
    </>
  );
};
export default WeatherComponent;
