import TopBar from "./TopBar";
import Barcode from "./svgComponents/Barcode";
import Search from "./svgComponents/Search";
import Cloud from "./svgComponents/Cloud";
import Cloud2 from "./svgComponents/Cloud2";
import Cloud4 from "./svgComponents/Cloud4";
import Cloud5 from "./svgComponents/Cloud5";
import CLoud3 from "./svgComponents/CLoud3";

const Weather = () => {
  return (
    <div>
      <TopBar></TopBar>
      <div className="flex justify-between m-auto mt-3 w-[324px]">
        <Barcode></Barcode>
        <Search></Search>
      </div>
      <div className="flex justify-between w-[324px] mx-auto mt-10">
        <div className="text-black text-xlmt-4">
          <h1>New York,</h1>
          <h1>United States</h1>
          <p className="text-[#96969A] text-[15px]">Oct 29, 2014</p>
          <div className="flex items-center gap-2">
            <Cloud></Cloud>
            <p className="text-[15px] text-[#057BFF]">Cloudy</p>
          </div>
        </div>
        <div className="relative">
          <img
            src="./backg.png"
            className="w-[130px] h-[110px] object-full rounded-lg"
          ></img>
          <button className="bg-[#FF2D55] text-white  rounded w-[43px] h-[22px] absolute bottom-1 right-2">
            LIVE
          </button>
        </div>
      </div>

      <div className="bg-[#003339] flex w-[324px] h-[92px] rounded-lg gap-5 justify-center mx-auto items-center mt-10">
        <div className="flex flex-col items-center">
          <p className="text-white">12:00</p>
          <Cloud2></Cloud2>
          <p className="text-white">24</p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-white">12:00</p>
          <Cloud5></Cloud5>
          <p className="text-white">24</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-white">12:00</p>
          <Cloud4></Cloud4>
          <p className="text-white">24</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-white">12:00</p>
          <CLoud3></CLoud3>
          <p className="text-white">24</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-white">12:00</p>
          <Cloud2></Cloud2>
          <p className="text-white">24</p>
        </div>
      </div>

      <hr className="mt-10 w-[324px] mx-auto"></hr>
      <h1 className="ml-8 mt-5">Additonal Info</h1>
      <div className="flex justify-between w-[324px] mx-auto mt-5">
        <div className="space-y-2">
          <p className="text-[#96969A]">Precipitation</p>
          <p>3%</p>
        </div>
        <div className="space-y-2">
          <p className="text-[#96969A]">Humidty</p>
          <p>74%</p>
        </div>
        <div className="space-y-2">
          <p className="text-[#96969A]">Windy</p>
          <p>18 km/hr</p>
        </div>
      </div>
      <hr className="mt-11 w-[324px] mx-auto"></hr>
      <div className="flex justify-between w-[324px] mx-auto mt-6">
        <p>Temperature</p>
        <select className="outline-none border-2 p-2 border-[#003339] rounded">
          <option defaultValue={"Last Month"}>Last Month</option>
        </select>
      </div>
      <img src="./temperature.png" className="w-full mt-5"></img>
    </div>
  );
};

export default Weather;
