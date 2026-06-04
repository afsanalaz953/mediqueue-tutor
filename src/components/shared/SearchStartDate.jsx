
"use client";

import React, { useState, useEffect, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar } from 'lucide-react';
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const CustomCalendarIcon = forwardRef(({ onClick, value }, ref) => {
  return (
    <button
      type="button"
      onClick={onClick}
      ref={ref}
      className="focus:outline-none"
    >
      <Calendar className="text-gray-500 w-5 h-5" />
    </button>
  );
});
CustomCalendarIcon.displayName = 'CustomCalendarIcon';

const SearchStartDate = () => {
      const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

//   const [startDate, setStartDate] = useState();
//  const handleDateSelect = (date) => {
//      console.log("Selected date:", date);
//   };

  const startDateParam = searchParams.get("startDate");
  const initialDate = startDateParam ? new Date(startDateParam) : null;
  const [startDate, setStartDate] = useState(initialDate);
   useEffect(() => {
    const newStartDate = searchParams.get("startDate");
    setStartDate(newStartDate ? new Date(newStartDate) : null);
  }, [searchParams]);

  const handleDateChange = (date) => {
    setStartDate(date);
    // /////
     const params = new URLSearchParams(searchParams.toString());
    if (date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      params.set("startDate", `${year}-${month}-${day}`);
    } else {
      params.delete("startDate");
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex justify-between gap-20 m-10 w-80 h-15 bg-white border border-slate-200 rounded-2xl shadow-sm focus-within:ring-4 focus-within:ring-blue-600/10 focus-within:border-blue-600 transition-all overflow-hidden items-center px-4">
      <div>Start Date</div>
      <DatePicker
        selected={startDate}
        // onSelect={handleDateSelect}
        onChange={handleDateChange}
        customInput={<CustomCalendarIcon />}
        popperPlacement="bottom-end"
      />
    </div>
  );
};

export default SearchStartDate;








