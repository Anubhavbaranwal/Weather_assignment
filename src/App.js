import axios from "axios";
import { useState } from "react";
import CityComponent from "./Components/Citycard";
import WeatherComponent from "./Components/Weathercard";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const API_KEY = "d22ec9a6920fda0673d67ae9929d2572";

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const [activeBtn, setactiveBtn] = useState("dark");
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setLoading(false);
      updateWeather(response?.data);
    } catch (error) {
      setLoading(false);
      toast.error("City not found", { position: "top-center" });
    }
  };

  return (
    <div className={`flex flex-col justify-center w-screen h-screen align-middle ${ activeBtn === "bright" ? "bg-white" : "bg-black"
      }`}>
      <ToastContainer />
      <div>

        {/* buttons for light and dark mode */}
        <div className="min-w-60 mt-10  max-md:mt-10">
          <button className={`w-28 font-ProductSans duration-300 ease-in-out pr-2 h-12 rounded-full  text-white bg-red-500 relative left-5  ${activeBtn === "bright" ? "font-bold" : "opacity-60 " }`} onClick={() => setactiveBtn("bright")} >  light
          </button>
          <button className={`w-28 font-ProductSans duration-300 ease-in-out h-12 rounded-full text-white bg-red-500 relative right-5 ${activeBtn === "dark" ? "font-bold" : "opacity-60"}`} onClick={() => setactiveBtn("dark")}>
            dark
          </button>
        </div>
      </div>

      {/* Weather card */}
      <div className={`flex flex-col items-center w-auto sm:w-96 p-5 m-auto rounded shadow-lg ${
          activeBtn === "bright" ? "bg-white border-gray-400" : "bg-black border-zinc-900"} font-mono justify-center border shadow-slate-400`} >
        <span className={`${activeBtn === "bright" ? "text-black" : "text-white" } my-5 text-lg font-bold`} >
          React Weather App
        </span>
        {city && weather ? ( <WeatherComponent weather={weather} city={city} activeBtn={activeBtn}/>) : (
          <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} activeBtn={activeBtn} loading={loading}/> )}
      </div>
    </div>
  );
}

export default App;
