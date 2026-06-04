"use client";
import React from 'react';
import {DateField, Label} from "@heroui/react";
import {useState} from "react";


const SearchEndDate = () => {
    const [endDate, setEndDate] = useState(null);
    console.log (endDate, "end" )
    return (
        <div>
<DateField onChange= {setEndDate }  className="w-[256px]" name="date">
      <Label>End Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
</DateField>   
        </div>
    );
};

export default SearchEndDate;