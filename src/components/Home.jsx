import { useNavigate } from "react-router";
import TopBar from "./TopBar";
import Close from "./svgComponents/Close";
import Location from "./svgComponents/Location";
const Home = () => {
  const nav = useNavigate();
  return (
    <div
      className="bg-[url('./backg.png')] h-screen bg-bottom bg-no-repeat bg-cover
    "
    >
      <TopBar></TopBar>
      <div className="flex justify-between w-[350px] mx-auto mt-[58px]">
        <Close></Close>
        <button
          onClick={() => nav("/weather")}
          className="bg-[#FF2D55] text-white p-1 rounded w-[53px] h-[28px]"
        >
          LIVE
        </button>
      </div>

      <div className="flex gap-4 w-[187px] h-[40px] mt-[140px] items-center ml-[30px]">
        <Location></Location>
        <span className="text-white">CURRENT LOCATION</span>
      </div>

      <div className="text-white text-4xl ml-[30px] mt-4">
        <h1>New York,</h1>
        <h1>United States</h1>
      </div>
    </div>
  );
};

export default Home;
