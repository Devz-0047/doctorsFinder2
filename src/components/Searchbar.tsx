import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
function Searchbar(): React.JSX.Element {
  return (
    <div className="bg-secondary h-[221px] mt-[94px] relative">
      <div className="bg-circleColor h-[92px] w-[184px] absolute rounded-b-full left-16 "></div>
      <div className="bg-circleColor h-[92px] w-[184px] absolute rounded-b-full right-16 "></div>
      <div className="bg-circleColor h-[96px] w-[184px] absolute rounded-t-full bottom-0 left-[20rem] "></div>
      <div className="bg-circleColor h-[96px] w-[184px] absolute rounded-t-full bottom-0 right-[20rem] "></div>
      <div className="flex flex-col items-center justify-between gap-6 ">
        <h2 className="mt-12 text-3xl font-medium font-poppins">
          Find expert Doctors for an In-clinic session here
        </h2>
        <form className="relative flex items-center justify-center gap-4 text-base font-inter ">
          <FaLocationDot className="absolute top-[11px] left-[10px] text-[#1C1B1F]" />
          <select className="pl-[32px] pr-[12px] py-[10px] bg-white rounded-md ">
            <option value="" disabled selected>
              <div>Select Location</div>
            </option>
            <option value="Delhi">Delhi</option>
            <option value="NCR">NCR</option>
          </select>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="eg. Doctor, specialisation, clinic name"
              className="py-[8px] bg-white rounded-l-md w-[468px] px-2 outline-none"
            ></input>
            <button className="text-[#1C1B1F] bg-white py-[12px] px-[8px]  rounded-r-md">
              <FaArrowRight />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Searchbar;
