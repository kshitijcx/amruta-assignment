import Image from "next/image";
import AmrutaLogo from "@/public/AmrutaLogo.png";

const Navbar = () => {
  return (
    <div className="w-screen bg-[#FFF7E2] flex justify-between px-4 py-2 items-center">
      <div className="flex gap-10 items-center">
        <Image
          src={AmrutaLogo}
          alt="Amruta Logo"
          width={300}
          height={300}
          className="w-[259px] h-[49px]"
        />
        <ul className="text-[#474747] font-semibold flex gap-6 text-sm">
          <li>Home</li>
          <li>Find Doctors</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className="space-x-3">
        <button className="px-4 py-2 border border-[#3A643B] rounded-md text-[#3A643B]">
          Login
        </button>
        <button className="px-4 py-2 rounded-md bg-[#3A643B] text-white">
          Sign-up
        </button>
      </div>
    </div>
  );
};
export default Navbar;
