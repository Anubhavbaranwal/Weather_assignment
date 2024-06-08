import React from "react";
import img from "../icon/perfect-day.svg"
import loading from "../icon/loading.svg";
const CityComponent = (props) => {
  const { updateCity, fetchWeather,activeBtn,loading } = props;

  return (
    <>
      <img className="w-36 h-36 mx-auto my-10 m-2" src={img}/>
      <span className={`${activeBtn==="bright"?"text-black":"text-white"} mx-auto my-2 text-lg font-bold`}>
        Find Weather of your city
      </span>
      <form className={`flex flex-row justify-evenly m-5 ${activeBtn==-"bright"?"border-black":"border-white"} border-solid border rounded-sm`} onSubmit={fetchWeather} >
        <input className="p-2 text-sm border-none outline-none font-mono font-bold"  onChange={(e) => updateCity(e.target.value)} placeholder="City"/>
        <button type="submit" className={`${activeBtn==="bright"?"bg-black text-white border-none":"bg-gray-200 text-black border-2 border-black"}text-sm px-2   outline-none cursor-pointer font-mono font-bold`} >
          { loading?<div class="text-center">
            <div role="status">
                <img src={loading} alt="loading" />
                <span class="sr-only">Loading...</span>
            </div>
        </div>:"Search"}
        </button>
      </form>
    </>
  );
};
export default CityComponent;