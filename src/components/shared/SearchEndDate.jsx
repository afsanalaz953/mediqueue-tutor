"use client";
import React from 'react';
import {DateField, Label} from "@heroui/react";


const SearchEndDate = () => {
    return (
        <div>
<DateField className="w-[256px]" name="date">
      <Label>End Date</Label>
      <DateField.Group>
        <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
      </DateField.Group>
</DateField>   
        </div>
    );
};

export default SearchEndDate;