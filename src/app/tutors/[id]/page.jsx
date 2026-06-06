
import React from 'react';
import Image from "next/image";

import Link from "next/link";
import { Button, Chip } from "@heroui/react";
import { BookOpen, Clock } from "lucide-react";
import BookedModal from "@/components/modal"

const TutorDetailsPage = async({params}) => {
    const {id} = await params
const res = await fetch(`http://localhost:5000/tutors/${id}`,{
cache:"no-store"
})
const allTutor = await res.json()
const { tutorName, image, subject, location, hourlyFee, availableSlots, availableDays,sessionStartDate, timeSlot, institution, teachingMode} = allTutor;
//    console.log( id,"Details", tutorDetails); 


 const isSlotAvailable = availableSlots > 0;
  const today = new Date();
  today.setHours(0, 0, 0, 0); // ignore time
  const startDate = new Date(sessionStartDate);
  startDate.setHours(0, 0, 0, 0);
  const isBookingAllowed = isSlotAvailable && (today >= startDate);



    return (
        <div className="container ">
        <div className='w-200 p-2 border-0 shadow-lg  grid grid-cols-2 gap-12 rounded-2xl h-130 bg-white container my-12 mx-auto '>
             <div className='divright w-100 h-full'>
                <Image
             alt="Tutor Image"
         className=" cover w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        src={image}
            width={1500}
        height={1000}         
           />
             </div>
<div className='cardleft mt-6 space-y-4'>
 <h1 className="text-3xl font-bold leading-tight line-clamp-2 hover:text-blue-600 transition-colors">
                            {tutorName}
                        </h1>   
<h2
 
  className=" items-center font-bold  text-blue-800"
                    >
    {subject}
 </h2> 

<div className="grid grid-cols-2 items-center gap-1 text-xs text-slate-500 font-bold">
                    <span className="flex items-center gap-1 bg-blue-100 p-3 rounded-2xl">
                        <Clock className="w-3.5 h-3.5 bg-pink-100" />Time Slot: {timeSlot}
                    </span>
                    <span className="flex items-center gap-1  bg-pink-50 p-4 rounded-2xl">
                        {/* <BookOpen className="w-3.5 h-3.5" /> 24 Lessons */}
                        <p>Location: {location}</p>
                    </span>
                </div>
         <div className=" grid grid-cols-2 mt-auto border-t border-slate-100  gap-3 items-center">
                    <span className="text-sm  bg-purple-100 p-4 rounded-2xl font-black text-blue-600"> Hourly Fee: ${hourlyFee}</span>
               <p className="text-sm  bg-sky-100 p-4 rounded-2xl text-slate-500 font-medium flex items-center gap-1">
                        Available slots <span className="text-slate-900">{availableSlots}</span>
                    </p>
                </div>
                <div>
                    <p className='font-bold text-black text-lg'> Institution: </p>
                      <p className='text-slate-500 '> {institution} </p>     
                </div>
                <div>
                     <p className='font-bold text-black text-lg'> Session start day: </p>
                      <p className='text-slate-500 ' > {sessionStartDate} </p>  
                     
                </div>
                <div>
                  <p className='font-bold text-black text-lg'> Teaching Mode: </p>
                      <p className='text-slate-500 ' > {teachingMode} </p> 
                </div>
                {/* ----- */}
                <div>
 {!isSlotAvailable && (
              <p className="text-red-500 text-sm mt-2">No available slots left.</p>
            )}
            {isSlotAvailable && !isBookingAllowed && today < startDate && (
              <p className="text-red-500 text-sm mt-2">
                Booking opens on {new Date(sessionStartDate).toLocaleDateString()}.
              </p>
            )}


                <BookedModal  allTutor = {allTutor}  />       
                </div>
        </div>
             </div>
          
        </div>
    );
};

export default TutorDetailsPage;