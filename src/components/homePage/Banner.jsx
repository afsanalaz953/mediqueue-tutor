"use client";

import { Button } from "@heroui/react";
import { ArrowRight, Star, Play} from "lucide-react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Link from "next/link"
import { PiFlagBannerBold } from "react-icons/pi";

const Banner = () => {

    return (
        <section className="relative overflow-hidden pt-4 pb-4 md:pt-4 md:pb-4  from-blue-50 via-slate-50 to-slate-50">

            <Swiper
                navigation
                pagination={true} modules={[Pagination, Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-[100]">
                        {/* <div className="grid grid-cols-1  lg:grid-cols-2   gap-16 items-center">
                           
                            </div> */}

                            <div className="relative group">
                                <div className="absolute -inset-1 bg-linear-to-r from-primary to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                                <div className="relative h-[800] w-full  bg-white p-2 rounded-[2.5rem] shadow-2xl overflow-hidden aspect-video lg:aspect-square">
                                    <Image
                                        src="https://img.magnific.com/free-photo/schoolchildren-reading-library_1098-4048.jpg?semt=ais_hybrid&w=740&q=80"
                                        alt="learning"
                                        fill
                                        className="rounded-[2rem] object-cover transform transition duration-700 group-hover:scale-105"
                                    />
                                    
                                    <div className="absolute top-55 left-8 right-8 bg-white/70 backdrop-blur-md p-2 rounded-2xl border border-white/30 shadow-2xl">
                                        <div className="flex items-center gap-4">
                                          <div className="flex flex-col  space-x-6">
                                            <h1 className="font-bold text-3xl">Having a solid foundation in your academics is key to success after graduation. </h1> 
                                            <p className="text-center">With all of the other aspects of your college application that you are becoming familiar with for the first time, 
                                                <br />your academics should become the component with which you find security.
                                                <br />This is especially true if academics are not your greatest strength;</p>    
{/* <Button  
 href="/tutors"
 className=" primary h-14 px-4 mx-auto text-lg font-bold 
 rounded-full shadow-2xl shadow-blue-600/30 group" >
 
  Explore Tutors <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />   
</Button> */}
<Link  className="mx-auto "  href="/tutors">
  <Button className="primary h-14 px-4 mx-auto text-lg font-bold rounded-full shadow-2xl shadow-blue-600/30 group">
    Explore Tutors <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
  </Button>
</Link>
                                            </div> 
                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  
                </SwiperSlide>
                {/* slide2 start */}

                <SwiperSlide>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="">
                            

                            <div className="relative group">
                                <div className="absolute -inset-1 bg-linear-to-r from-primary to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                                <div className="relative  h-[800] w-full  bg-white p-2 rounded-[2.5rem] shadow-2xl overflow-hidden aspect-video lg:aspect-square">
                                    <Image
                                        src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/TeacherTeaching_Hero.max-1200x676.format-webp.webp"
                                        alt="Learning"
                                        fill
                                        className="w-full rounded-[2rem] object-cover transform transition duration-700 group-hover:scale-105"
                                    />
                                     <div className="absolute top-55 left-8 right-8 bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-white/30 shadow-2xl">
                                          <h1 className="font-bold text-3xl">Having a solid foundation in your academics is key to success after graduation. </h1> 
                                            <p className="text-center">With all of the other aspects of your college application that you are becoming familiar with for the first time, 
                                                <br />your academics should become the component with which you find security.
                                                <br />This is especially true if academics are not your greatest strength;</p>    
 <Link  className="mx-auto ml-100 mt-6" href="/tutors">
  <Button className="primary h-14  text-lg font-bold rounded-full shadow-2xl shadow-blue-600/30 group">
    Explore Tutors <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
  </Button>
</Link>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div> 
                </SwiperSlide>
                {/* // slide3 start  */}
                <SwiperSlide>
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-[100]">
                        {/* <div className="grid grid-cols-1  lg:grid-cols-2   gap-16 items-center">                       
                            </div> */}

                            <div className="relative group">
                                <div className="absolute -inset-1 bg-linear-to-r from-primary to-blue-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                                <div className="relative  h-[800] w-full   bg-white p-2 rounded-[2.5rem] shadow-2xl overflow-hidden aspect-video lg:aspect-square">
                                    <Image
                                        src="https://keystoneacademic-res.cloudinary.com/image/upload/v1733333377/Online_learning_zycldn.png"
                                        alt="learning"
                                        fill
                                        className="rounded-[2rem] object-cover transform transition duration-700 group-hover:scale-105"
                                    />
                                    
                                    <div className="absolute top-55 left-8 right-8 bg-white/70 backdrop-blur-md p-2 rounded-2xl border border-white/30 shadow-2xl">
                                        <div className="flex items-center gap-4">
                                          <div className="flex flex-col  space-x-6">
                                            <h1 className="font-bold text-3xl">Having a solid foundation in your academics is key to success after graduation. </h1> 
                                            <p className="text-center">With all of the other aspects of your college application that you are becoming familiar with for the first time, 
                                                <br />your academics should become the component with which you find security.
                                                <br />This is especially true if academics are not your greatest strength;</p>    
 <Link className="mx-auto " href="/tutors">
  <Button className="primary h-14 text-center text-lg font-bold rounded-full shadow-2xl shadow-blue-600/30 group">
    Explore Tutors <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
  </Button>
</Link>
                                            </div> 
                                          
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Banner;