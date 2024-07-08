import GetInvolved from "@/components/Homepage/GetInvolved";
import HeroSection from "@/components/Homepage/HeroSection";
import Introduction from "@/components/Homepage/Introduction";
import Mission from "@/components/Homepage/Mission";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between mt-14">
     <HeroSection/>
     <div className="bg-gradient-to-bl from-green-100 from-1 via-white via-80 to-0.2 to-green-100">
     <Introduction/>
     {/* <Mission/> */}
     <GetInvolved/>
     </div>
    </main>
  );
}
