import FindDoctors from "@/public/FindDoctors.png";
import LocationIcon from "@/public/Location.png";
import ArrowIcon from "@/public/Arrow.png";
import Image from "next/image";

const Home = () => {
  return (
    <div className="relative">
      <Image
        src={FindDoctors}
        alt="Find Doctors Image"
        height={3000}
        width={3000}
        className="w-screen"
      />
      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-5">
        <div className="border border-black rounded-md px-2 py-3 w-fit flex gap-1 items-center bg-white">
          <Image
            src={LocationIcon}
            alt="Location Icon"
            height={300}
            width={300}
            className="w-[12px] h-[14px]"
          />
          <select className="outline-none text-sm text-[#7B7B7B] bg-white">
            <option>Select Location</option>
          </select>
        </div>
        <div className="border border-black rounded-md px-2 py-1 w-72 flex items-center bg-white">
          <input
            className="outline-none text-sm text-[#767676] w-full bg-white"
            type="text"
            placeholder="eg. Doctor, specialisation, clinic name"
          />
          <Image
            src={ArrowIcon}
            alt="Arrow Icon"
            height={300}
            width={300}
            className="w-[14px] h-[12px]"
          />
        </div>
      </div>
      <div className="flex justify-evenly py-4 border-b">
        <select className="bg-[#F3F3F3] py-3 rounded-md">
          <option>Expertise</option>
        </select>
        <select>
          <option>Gender</option>
        </select>
        <select>
          <option>Fees</option>
        </select>
        <select>
          <option>Languages</option>
        </select>
        <select>
          <option>All Filters</option>
        </select>
      </div>
    </div>
  );
};
export default Home;
