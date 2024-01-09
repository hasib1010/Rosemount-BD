import Image from "next/image";
import banner1 from "@/assets/home-page/Lift-Slider1.jpg";
import HeroContent from "./hero-content";
import HeroFrom from "./hero-from";

const HeroSection = () => {
  return (
    <div className="overflow-hidden relative py-44">
      <Image src={banner1} alt="banner-1" className="absolute top-0 -z-20" />
      <div className="container flex justify-between">
        <HeroContent />
        <HeroFrom/>
      </div>
    </div>
  );
};

export default HeroSection;
