import Image from "next/image";
import logo from "@/assets/logo.png";
import LargeNav from "./large-Nav";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 top-0 shadow-lg shadow-[rgba(196,196,196,0.2)] py-1">
      <div className="nav my-2 container text-[#838383] flex justify-between items-center">
        <figure>
          <Image src={logo} className="h-16 w-auto" alt="logo" />
        </figure>

        {/* large nav */}
        <LargeNav />
        {/* mobile nav */}
      </div>
    </div>
  );
};

export default Navbar;
