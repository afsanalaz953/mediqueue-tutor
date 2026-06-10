import React from 'react';
import TutorCard from "@/components/shared/tutorcard"
import SearchBar from "@/components/shared/SearchBar"
import SearchStartDate from "@/components/shared/SearchStartDate"
import SearchEndDate from "@/components/shared/SearchEndDate"
import ResetFilter from "@/components/shared/ResetFilter"

    // for search tutors api call
const FullTutors = async({searchParams}) => {
     const sParams = await searchParams;
  const search = sParams?.search || "";
// for date
    const startDate = sParams?.startDate || "";
  const endDate = sParams?.endDate || "";

  

    // for all tutors api call
// const res = await fetch (`${process.env.NEXT_SERVER_URL}/tutors`);
 // Build URL with search query if present
  // const baseUrl = `${process.env.NEXT_SERVER_URL}/tutors`;
  // const url = search ? `${baseUrl}?search=${encodeURIComponent(search)}` : baseUrl;

 const params = new URLSearchParams();
  if (search) params.append("search", search);
  if (startDate) params.append("startDate", startDate);
  if (endDate) params.append("endDate", endDate);

  const queryString = params.toString();
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors${queryString ? `?${queryString}` : ""}`;

  // const res = await fetch(url);
  // const allTutors = await res.json();

// const res = await fetch ('http://localhost:5000/tutors');
// const allTutors = await res.json();
//  console.log(allTutors, "Tutors");

let allTutors = [];  // খালি array দিয়ে শুরু
try {
  const res = await fetch(url);
  if (!res.ok) {  // HTTP status 200-299 না হলে
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  allTutors = await res.json();
} catch (error) {
  console.error("Tutor fetch failed:", error);
  // allTutors ইতিমধ্যে [] আছে, তাই UI তে "কোন টিউটর পাওয়া যায়নি" দেখাবে
}



    return (
        <div>
            <h1 className='font-bold text-3xl text-center m-4'>All Tutors</h1>
            <div className='flex flex-2 gap-2'>
              <SearchBar />
              <SearchStartDate />
              <SearchEndDate />
              <ResetFilter />
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