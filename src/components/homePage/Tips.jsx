import React from 'react';
import Image from "next/image"
import { HiUsers } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


const Tips = () => {
    return (
        <div className='container mx-auto w-full bg-[#EFF6FF]'>
          
            <h2 className='text-4xl font-bold my-6 text-center'>Why Choose MediQueue?</h2>
            <p className='text-center'>The best platform for connecting students with qualified tutors</p>
        

<div className='grid md:grid-cols-2 lg:grid-cols-3  gap-4 mt-4 px-20 py-10'> 
          
             {/* card1 */}

                {/* <div className="card bg-slate-100 w-70 h-70 shadow-md border-0 rounded-2xl justify-start items-left" /> */}
                       
<div className="card bg-white w-70 h-70 shadow-md border-0 rounded-2xl justify-start items-left "> 
  
  <figure className="">
    <HiUsers className='w-15 h-15' />
  </figure>
 
 
  <div className="card-body items-center text-center">
    <h2 className="card-title ">Qualified Tutors</h2>
    <p className='line-clamp-3'>All tutors are verified with proven experience and credentials</p>
   </div>
 
  
</div>
          {/* card2 */}
        <div className="card text-left bg-white  w-70 h-70  shadow-md border-0 rounded-2xl">
<figure className="px-10 pt-10">
 <SlCalender className='w-15 h-15'  />
   </figure>  
   <div className="card-body items-center text-center">
     <h2 className="card-title">Flexible Scheduling</h2>
     <p>Book sessions at times that work best for your schedule</p>
   </div>
 </div>
           {/* card3 */}
 <div className="card bg-white w-70 h-70 shadow-md border-0 rounded-2xl items-center text-center">
  <figure className="px-10 pt-10  ">
    <FaArrowUpRightFromSquare  className='w-15 h-15'/>
   </figure>
   <div className="card-body items-center text-center">
     <h2 className="card-title">Easy Booking</h2>
    <p>Simple and seamless booking process with instant confirmation</p>
   </div>
 </div>
           {/* card4 */}

 </div> 

 </div>



    );
};

export default Tips;