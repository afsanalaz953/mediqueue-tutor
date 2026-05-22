import React from 'react';
import TutorCard from "@/components/shared/tutorcard"


const FeatureTutors = async() => {
const res = await fetch(`${process.env.NEXT_SERVER_URL}/featured`)
cache:"no-store"

const topTutors = await res.json()
   console.log( "topTutors", topTutors); 




   



    return (
        <div className='container mx-auto bg-slate-100 p-10'>
            <div className =' text-3xl font-bold text-center m-10'>Top Featured Tutors</div>
              <div className='grid  md:grid-cols-2  lg:grid-cols-3 gap-6'>
                {topTutors.map ((featureTutors, ind) => {
                return <TutorCard allTutor = {featureTutors} key = {ind}/>
              })}
                
                </div>
           
        </div>
    );
};

export default FeatureTutors;