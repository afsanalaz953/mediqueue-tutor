"use client"
import React from 'react';
import {TextField, Label,Input,FieldError, Select,ListBox , Button, } from "@heroui/react"
// import { auth } from "@/lib/auth"; // path to your Better Auth server instance
// import { headers } from "next/headers";


const AddTutorPage = () => {
const onSubmit = async(e) =>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const allTutor = Object.fromEntries(formData.entries())
    console.log("allTutor", allTutor);

 const res =  await fetch ('http://localhost:5000/add-tutor',{

   method : 'POST',
   headers : {
  'content-type' : 'application/json'
   
     }, 
    body: JSON.stringify(allTutor)
    })
const data = await res.json()
console.log( 'data after post',data);
 if (res.ok) {
      e.target.reset(); // Reset the form after successful submission
    }
  }


  // const tutorAddingData = {
  //   userId:user?.id,
  //   tutorId: allTutor._id,
  //   userName: user?.name,
  //  subject:allTutor.subject,
  //   slots:allTutor.totalSlots,
  //   tutorName:allTutor.tutorName,
  //   tutorImage:allTutor.imageUrl,
  //   session: allTutor.sessionStartDate,
  //   price:allTutor.price,
  //  mode:allTutor. teachingMode
  

 

  

    return (
        <div>
            <h1 className='text-2xl font-bold text-blue-800 text-center my-8'>Add Tutor </h1>
    <div className='formdata container mx-auto border-0 shadow-lg w-3xl'>
                <form onSubmit={onSubmit}
            className="p-10 space-y-8 m-10" 
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Destination Name */}
              <div className="md:col-span-2">
                <TextField name="tutorName" isRequired>
                  <Label>Tutor Name</Label>
                  <Input placeholder="Enter your tutor name" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Country */}
              <TextField name="totalSlots" type="number" isRequired>
                <Label>Total Slots</Label>
                <Input 
                type="number"
                placeholder="100" 
                className="rounded-2xl" />
                <FieldError />
              </TextField>

              {/* Subject - Updated Select Component */}
               <div> 
                <Select
                  name="subject"
                  isRequired
                  className="rounded-2xl"
                  placeholder="Select subject"
                >
                  <Label>Subject</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="Computer Science" textValue="Computer Science">
                    Computer Science
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                     
                      <ListBox.Item id="Biology" textValue="Biology">
                      Biology
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    
                      <ListBox.Item id="Economics" textValue="Economics">
                      Economics
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Mathematics" textValue="Mathematics">
                        Mathematics
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="History" textValue="History">
                      History
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Chemistry" textValue="Chemistry">
                        Chemistry
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="English Literature" textValue="English Literature">
                        English Literature
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Physics" textValue="Physics">
                        Physics
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Price */}
              <TextField name="price" type="number" isRequired>
                <Label>Price (USD)</Label>
                <Input
                  type="number"
                  placeholder="1000"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField>

              {/* Duration */}
              {/* <TextField name="duration" isRequired>
                <Label>Duration</Label>
                <Input
                  placeholder="7 Days / 6 Nights"
                  className="rounded-2xl"
                />
                <FieldError />
              </TextField> */}

              {/* Departure Date */}
              <div className="md:col-span-2">
                <TextField name="sessionStartDate" type="date" isRequired>
                  <Label>Session Start Date</Label>
                  <Input type="date" className="rounded-2xl" />
                  <FieldError />
                </TextField>
              </div>

              {/* Image URL - Removed preview */}
              <div className="md:col-span-2">
                <TextField name="imageUrl" isRequired>
                  <Label>Image URL</Label>
                  <Input
                    type="url"
                    placeholder="Enter your photo url"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>

              
         <div>
              <Select
                  name="teachingMode"
                  isRequired
                  className="rounded-2xl"
                  placeholder="Select teaching mode"
                >
                  <Label>Teaching Mode</Label>
                  <Select.Trigger className="rounded-2xl">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                  <ListBox.Item id="Online" textValue="Online">
                        Online
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="In-person" textValue="In-person">
                        In-person
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Both" textValue="Both">
                        Both
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
         </div>




          </div> 

            {/* Buttons */}

            <Button
              type="submit"
              variant="outline"
             
              className=" rounded-2xl w-full bg-cyan-500 text-white font-bold"
            >
          Add Tutor
               </Button> 
             
          </form>
            </div>
           
        </div>
    );

  };

export default AddTutorPage;