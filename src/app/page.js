import Image from "next/image";
import Navbar from "@/components/shared/Navbar"
import Header from "@/components/shared/Header"
import FeaturedTutors from "@/components/homePage/featuredTutors"
import SearchBar from "@/components/homePage/SearchBar"
import Banner from "@/components/homePage/Banner"




export default function Home() {
  return (
    <div className="">
     HomePage
    <Banner />
     <Header />
     <SearchBar />
     <FeaturedTutors />
    </div>
  );
}
