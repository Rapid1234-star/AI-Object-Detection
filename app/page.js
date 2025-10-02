import Image from "next/image";
import ObjectDetection from "../components/object-detection";

export default function Home() {
  return (
    <main className=" bg-black flex min-h-screen flex-col items-center  p-12">
      <h1 
      className="gradient-title text-4xl font-extrabold md:text-6xl lg:text-8xl lg:px8 tracking-tighter md:text-center md:px8 "
      >AI Detection</h1>
      <ObjectDetection />
    </main>
  );
}
