"use client";
import React from 'react';
import {DateField, Label} from "@heroui/react";
import {useState} from "react";


const SearchStartDate = () => {
    const [startDate, setStartDate] = useState(null);
    console.log (startDate, "start")
    return (
        <div>
<DateField onChange= {setStartDate } className="w-[256px]" name="date">
      <Label>Start Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
</DateField>   
        </div>
    );
};

export default SearchStartDate;