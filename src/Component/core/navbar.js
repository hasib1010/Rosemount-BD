import Image from "next/image";
import logo from "@/assets/logo.png";
import LargeNav from "./large-Nav";

const Navbar = () => {
  return (
    <div className="bg-white sticky top-0 shadow-lg shadow-[rgba(196,196,196,0.2)]">
      <div className="nav my-5 container text-[#838383] flex justify-between items-center">
        <figure>
          <Image src={logo} height={90} width={180} alt="logo" />
        </figure>

        {/* large nav */}
        <LargeNav />
        {/* mobile nav */}
      </div>
    </div>
  );
};

export default Navbar;
