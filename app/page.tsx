import GetInvolved from "@/components/Homepage/GetInvolved";
import HeroSection from "@/components/Homepage/HeroSection";
import Introduction from "@/components/Homepage/Introduction";
import Mission from "@/components/Homepage/Mission";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between mt-14">
     <HeroSection/>
     <Introduction/>
     {/* <Mission/> */}
     <GetInvolved/>
    </main>
  );
}
