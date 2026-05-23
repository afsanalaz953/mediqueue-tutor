import React from 'react';
import { auth } from "@/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";
import Image from "next/image";
import { Table } from '@heroui/react';
import CancelledButton from "@/components/shared/CancelledButton";
import {Button} from "@heroui/react"

const MyBookingSessionsPage = async() => {

const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
})
const user = session?.user
console.log(session)
const res = await fetch(`http://localhost:5000/booking/${user.id}`);

const bookings = await res.json();
   console.log(bookings)



    return (
        <div className='container mx-auto'>
        <h1 className='font-bold text-3xl m-10'> My Bookings List</h1>

        <div className='shadow-lg'>

 <Table className='w-min-700 bg-yellow-200 '>
  <Table.ScrollContainer>
    <Table.Content aria-label="Team members" className='p-4'>
      <Table.Header>
        <Table.Column>Photo</Table.Column>
        <Table.Column isRowHeader>Tutor Name</Table.Column>
        <Table.Column>Student Name</Table.Column>
        <Table.Column>User Email</Table.Column>
        <Table.Column>booking Id</Table.Column>
        <Table.Column>Status</Table.Column>
        <Table.Column>Action</Table.Column>
      </Table.Header>
      <Table.Body>
        {bookings && bookings.map((bookedData) => (
          <Table.Row key={bookedData._id}>
            <Table.Cell>
              <Image
                src={bookedData.tutorImage}
                alt={bookedData.tutorName}
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
            </Table.Cell>
            <Table.Cell>{bookedData.tutorName}</Table.Cell>
            <Table.Cell>{bookedData.userName}</Table.Cell>
            <Table.Cell>{bookedData._id}</Table.Cell>
            <Table.Cell>{bookedData.userEmail}</Table.Cell>
            <Table.Cell className="" >  <Button> {bookedData.status || 'Confermed'} </Button> </Table.Cell>
            <Table.Cell> <CancelledButton bookingId = {bookedData._id} /> </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Content>
  </Table.ScrollContainer>
</Table>

{/* {bookings.map(bookedData => <div key={bookedData._id}>

<h2>{bookedData.userEmail} </h2>
</div>)} */}
{/* {bookings && bookings.map(bookedData => <div key={bookedData._id}>
    <Image
    src={bookedData.tutorImage} 
    alt="tutor photo"
    width={20}
    height={20}
    className='rounded-full'
    
    
    />
   <h2>{bookedData.userEmail} </h2> */}

 </div>
        </div>
    );
};

export default MyBookingSessionsPage;