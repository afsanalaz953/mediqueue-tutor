 "use client"
import React from 'react';
import {TextField, Label,Input,FieldError, Select,ListBox , Button, } from "@heroui/react"

import { ToastContainer, toast } from 'react-toastify';
import { authClient } from '@/lib/auth-client';

const AddTutorPage = () => {
const onSubmit = async(e) =>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    // const allTutor = Object.fromEntries(formData.entries())
    const formValues = Object.fromEntries(formData.entries());

    console.log(formValues, "formvalues")

    // ক্লায়েন্ট সাইডে সেশন থেকে ইউজার আইডি নেওয়া (headers() ছাড়া)
       const { data: session } = await authClient.getSession();
    const userId = session?.user?.id;

     // ইউজার আইডি পেলোডে যুক্ত করা (কোনো কনফ্লিক্ট নেই)
    const allTutor = {
      ...formValues,
      userId:userId,
    };
    console.log("allTutor with userId", allTutor);

// // for getting user id of single session
//     const session = await auth.api.getSession({
//          headers: await headers(), // you need to pass the headers object.
//      });
//      const user = session?.user?.id;
//     console.log(session)
   
//     // ইউজার আইডি পেলোডে যুক্ত করুন
//     const allTutor = {
//         ...formValues,
//         userId: userId,   // 👈 এই লাইন যোগ করুন
//     };

const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`, {
           method: 'POST',
        headers: {
            'content-type': 'application/json'
           },
           body: JSON.stringify(allTutor)
        })

const data = await res.json();
 console.log( 'data after post', data);
   



// // Only clientside verification for add-tutor
// const {data:tokenData} = await authClient.token()
//  console.log(tokenData, "tokendata")

//  const res =  await fetch (`${process.env.NEXT_PUBLIC_SERVER_URL}/add-tutor`,{

//    method : 'POST',
//    headers : {
//   'content-type' : 'application/json',
//    authorization: `Bearer ${tokenData?.token}`
   
//      }, 
//     body: JSON.stringify(allTutor)
//     })
// const data = await res.json()
// console.log( 'data after post',data);

toast.success('Tutor added, see my-tutor-list ', {
                duration: 3000,
                position: 'top-center',
    }); 

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
        <div className="p-5 max-w-7xl mx-auto">
            <h1 className='text-2xl font-bold text-blue-800 text-center my-2'>Add Tutor </h1>
    <div className='formdata  border-0 shadow-lg w-3xl'>
                <form onSubmit={onSubmit}
            className="p-10 space-y-4 w-3xl " 
          >
             <ToastContainer />
            <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
              {/* Destination Name */}
              <div className="md:col-span-2 ">
                <TextField name="tutorName" isRequired>
                  <Label>Tutor Name</Label>
                  <Input placeholder="Enter your tutor name" className="rounded-2xl " />
                  <FieldError />
                </TextField>
              </div>

            


              {/* Country */}
              <TextField name="availableSlots" type="number" isRequired>
                <Label>Total Slots</Label>
                <Input 
                type="number"
                placeholder="100" 
                className="rounded-2xl w-full text-center" />
                <FieldError />
              </TextField>
              <br />
              <br />

              {/* Subject - Updated Select Component */}
               <div> 
                <Select
                name="subject"
                  isRequired
                  placeholder="Select subject"
                  className="w-full text-center"
                  >
                  {/* <Label>Subject</Label>  */}
                   <Select.Trigger className="rounded-full flex w-full text-center "> 
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
              <br />
              <br />


              {/* Price */}
              <TextField name="hourlyFee" type="number" isRequired>
                <Label>hourlyFee (USD)</Label>
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
                <TextField name="image" isRequired>
                  <Label>Image</Label>
                  <Input
                    type="url"
                    placeholder="Enter your photo url"
                    className="rounded-2xl"
                  />
                  <FieldError />
                </TextField>
              </div>

           {/* status */}
              <div>
                 <Select
                  name="status"
                  isRequired
                  className="rounded-2xl"
                  placeholder="Select Status"
                >
                  {/* <Label>Status</Label>  */}
                  <Select.Trigger className="rounded-2xl flex">
                    <Select.Value />
                    <Select.Indicator /> 
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                  <ListBox.Item id="active" textValue="active">
                        active
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      {/* <ListBox.Item id="In-person" textValue="In-person">
                        In-person
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Both" textValue="Both">
                        Both
                        <ListBox.ItemIndicator />
                      </ListBox.Item> */}
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div> 
              <br />
              <br />    

              {/* teaching mode */}
         <div>
              <Select
                  name="teachingMode"
                  isRequired
                  className="rounded-2xl"
                  placeholder="Select teaching mode"
                >
                  {/* <Label>Teaching Mode</Label> */}
                  <Select.Trigger className="rounded-2xl flex">
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
         <br />
         <br />



{/* put timeslot */}
<div>
  <Select
                  name="timeSlot"
                  isRequired
                  className="rounded-2xl"
                  placeholder="Select timeSlot"
                >
                  {/* <Label>Teaching Mode</Label> */}
                  <Select.Trigger className="rounded-2xl flex">
                    <Select.Value />
                    <Select.Indicator /> 
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                  <ListBox.Item id="4:00 PM - 8:00 PML" textValue="4:00 PM - 8:00 PM">
                       4:00 PM - 8:00 PM
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="2:00 PM - 6:00 PM" textValue="2:00 PM - 6:00 PM">
                   2:00 PM - 6:00 PM
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="10:00 AM - 2:00 PM" textValue="10:00 AM - 2:00 PM">
                  10:00 AM - 2:00 PM
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="3:00 PM - 7:00 PM" textValue="3:00 PM - 7:00 PM">
                   3:00 PM - 7:00 PM
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      
                    </ListBox>
                  </Select.Popover>
                </Select>
</div>
<br />

         {/* Location */}
<div>
 <Select
                  name="location"
                  isRequired
                  className="rounded-2xl"
                  placeholder="Select location"
                >
                  {/* <Label>Teaching Mode</Label> */}
                  <Select.Trigger className="rounded-2xl flex">
                    <Select.Value />
                    <Select.Indicator /> 
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                  <ListBox.Item id="Miami,FL" textValue="Miami, FL">
                        Miami, FL
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="chicago" textValue="Chicago, IL">
                       Chicago, IL
                        <ListBox.ItemIndicator />
                      </ListBox.Item>
                      <ListBox.Item id="Baltimore" textValue="Baltimore, MD">
                      Baltimore, MD
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