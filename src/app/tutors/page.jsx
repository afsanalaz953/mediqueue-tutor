import React from 'react';
import TutorCard from "@/components/shared/tutorcard"
import SearchBar from "@/components/shared/SearchBar"
import SearchStartDate from "@/components/shared/SearchStartDate"
import SearchEndDate from "@/components/shared/SearchEndDate"

    // for search tutors api call
const FullTutors = async({searchParams}) => {
     const sParams = await searchParams;
  const search = sParams?.search || "";

  

    // for all tutors api call
// const res = await fetch (`${process.env.NEXT_SERVER_URL}/tutors`);
 // Build URL with search query if present
  const baseUrl = `${process.env.NEXT_SERVER_URL}/tutors`;
  const url = search ? `${baseUrl}?search=${encodeURIComponent(search)}` : baseUrl;

  const res = await fetch(url);
  const allTutors = await res.json();

// const res = await fetch ('http://localhost:5000/tutors');
// const allTutors = await res.json();
//  console.log(allTutors, "Tutors");



    return (
        <div>
            <h1 className='font-bold text-3xl text-center m-4'>All Tutors</h1>
            <div className='flex flex-2 gap-6'>
              <SearchBar />
              <SearchStartDate />
              <SearchEndDate />
            </div>
          
            <div className='container mx-auto grid grid-cols-3 gap-6'>
                
           {allTutors?.map(allTutor =>  < TutorCard key = {allTutor?._id} allTutor = {allTutor} />
           
    //        key = {allTutor?._id}>
    // <h2  >  {allTutor.tutorName} </h2>

          
        //    < TutorCard key = {allTutor?._id} allTutor = {allTutor} />

    
              
       
        )};
      </div>    

        </div> 
    );
};

export default FullTutors;