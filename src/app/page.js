import Image from "next/image";
import Navbar from "@/components/shared/Navbar"
import Header from "@/components/shared/Header"
import FeaturedTutors from "@/components/homePage/featuredTutors"




export default function Home() {
  return (
    <div className="">
     HomePage
    
     <Header />
     <FeaturedTutors />
    </div>
  );
}
