import AboutUs from "@/components/Homepage/AboutUs";
import GetInvolved from "@/components/Homepage/GetInvolved";
import HeroSection from "@/components/Homepage/HeroSection";
import Introduction from "@/components/Homepage/Introduction";
import Mission from "@/components/Homepage/Mission";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between mt-14">
     <HeroSection/>
     <AboutUs/>
     <Mission/>
    
     {/* <Introduction/>  */}
    
     {/* <GetInvolved/> */}
 
    </main>
  );
}
