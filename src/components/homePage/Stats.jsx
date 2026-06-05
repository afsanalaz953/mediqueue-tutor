import React from 'react';

import { FaRegStar } from "react-icons/fa";

const Stats = () => {
    return (
        <div className='container mx-auto w-full  bg-white my-10 p-10'>
<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 m-0 justify-center items-center ml-25'>
            
             {/* card1 */}
<div className="">
  <p className='font-bold text-4xl text-blue-700'>500+</p>
  <p>Tutors</p> 
</div>
          {/* card2 */}
<div className="">
  <p className='font-bold text-4xl text-blue-700'>10K+</p>
  <p>Students</p> 
</div>
          {/* card3 */}
          <div className="">
 <p className='font-bold text-4xl text-blue-700'>50K+</p>
  <p>Sessions</p>
 
</div>
          {/* card4 */}
<div className="">
 <div className='flex gap-3'>
  <p className='font-bold text-4xl text-blue-700'>4.9</p>
 <div><FaRegStar  className='w-4' /></div>
 </div>
  <p>Rating</p>
</div>

</div> 
 </div>
    );
};

export default Stats;