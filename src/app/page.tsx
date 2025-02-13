import About from "@/components/About";
import GameFi from "@/components/GameFi";
import Hero from "@/components/Hero"
import TheProject from "@/components/TheProject";
import TheVision from "@/components/TheVision";

export default function Home() {
  return (
    <>
     <Hero/>
      <About/>
      <TheVision/>
      <TheProject/>
      {/* <GameFi/> */}
    </>
  );
}
