"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

const ResetFilter = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleReset = () => {
    router.push(pathname);
  };

  return (
    <button
      onClick={handleReset}
      className='flex justify-between gap-20 m-10 w-80 h-15 bg-white border border-slate-200 rounded-2xl shadow-sm focus-within:ring-4 focus-within:ring-blue-600/10 focus-within:border-blue-600 transition-all overflow-hidden items-center px-4'
    >
  Reset Filter
    </button>
  );
};

export default ResetFilter;







// import React from 'react';

// const ResetFilter = () => {
//     return (
//         <div className='flex justify-between gap-20 m-10 w-80 h-15 bg-white border border-slate-200 rounded-2xl shadow-sm focus-within:ring-4 focus-within:ring-blue-600/10 focus-within:border-blue-600 transition-all overflow-hidden items-center px-4'>
//           <h2>Reset Filter</h2>  
//         </div>
//     );
// };

// export default ResetFilter;