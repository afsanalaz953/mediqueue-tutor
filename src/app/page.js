import Image from "next/image";
import Navbar from "@/components/shared/Navbar"
import Header from "@/components/shared/Header"
import FeaturedTutors from "@/components/homePage/featuredTutors"
import Tips from "@/components/homePage/Tips"
import Banner from "@/components/homePage/Banner"
import Stats from "@/components/homePage/Stats"




export default function Home() {
  return (
    <div className="">
   
    <Banner />
     <FeaturedTutors />
     <Tips />
     <Stats />
    </div>
  );
}
