import Clients from "@/Component/CLients/Clients";
import Certificates from "@/Component/page/home/Certificates/Certificates";
 
import Products from "@/Component/page/home/Products/Products";
import HeroSection from "@/Component/page/home/hero-section/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Products></Products>
      <Certificates></Certificates>
      <hr className="border-2 border-red-600 my-10 container mx-auto"></hr>
       <Clients></Clients>
    </>
  );
}
