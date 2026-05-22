import React from 'react';
import TutorCard from "@/components/shared/tutorcard"



const FullTutors = async() => {
const res = await fetch (`${process.env.NEXT_SERVER_URL}/tutors`);

// const res = await fetch ('http://localhost:5000/tutors');
const allTutors = await res.json();
 console.log(allTutors, "Tutors");



    return (
        <div>
            <h1>All Tutors</h1>
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