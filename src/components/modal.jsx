"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
// import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { ToastContainer, toast } from 'react-toastify';
import { authClient } from "@/lib/auth-client"

export function BookedModal({allTutor}){
  // users session
const { data: session, isPending } = authClient.useSession();
console.log (session, "session")
const user = session?.user;
console.log (user, "session");

const handleBooking = async() =>{

   // Frontend quick checks (optional, backend will also check)
    if (allTutor.availableSlots <= 0) {
      toast.error("No available slots left.", { position: "top-center" });
      return;
    }
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const startDate = new Date(allTutor.sessionStartDate);
    startDate.setHours(0, 0, 0, 0);
    if (today < startDate) {
      toast.error(`Booking opens on ${allTutor.sessionStartDate}.`, { position: "top-center" });
      return;
    }

    
  const bookingData = {
    userId:user?.id,
    userName: user.name,
    userEmail:user.email,
    tutorId:allTutor._id,
    tutorName:allTutor.tutorName,
    tutorImage:allTutor.image,
    tutorStatus:allTutor.status
  }

  // const bookingData = { userName, userId, tutorName, tutorImage, tutorStatus, tutorId }
      
      const res = await fetch("http://localhost:5000/booking/", {
          method: "POST",
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(bookingData)
      })
      const data = await res.json();
// Show success toast
//         toast.success('Session booking successful', {
//             duration: 2000,
//             position: 'top-center',
// });
}


  const defaultName = user?.name || '';
  const defaultEmail = user?.email || '';

 
      const router = useRouter(); 
      
    const { tutorName, image, subject, location, hourlyFee, availableSlots, availableDays,sessionStartDate, timeSlot, institution, teachingMode} = allTutor;
// const EditModal = () => {
const onSubmit = async(e) =>{
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const allTutor = Object.fromEntries(formData.entries())
    console.log(allTutor);

  toast.success('Session booking successful', {
            duration: 2000,
            position: 'top-center',
});
        
// Navigation after success
        setTimeout(() => {
            router.push('/my-sessions');
        }, 2000);
}
 
    return (
        <>
    <ToastContainer />
<Modal>
    <Button className="font-bold rounded-xl px-6 w-full">Book Session</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
              
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we get back to you. The modal adapts automatically
                when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form  onSubmit={onSubmit} className="flex flex-col gap-4">
              
                  <TextField defaultValue={defaultName} className="w-full" name="name" type="text">
                    <Label>Student name</Label>
                    <Input
                     placeholder="Enter your name"
                     
                     />
                  </TextField>
                  <TextField  defaultValue={defaultEmail}  className="w-full" name="email" type="email">
                    <Label>Student Email</Label>
                    <Input 
                     
                    placeholder="Email"
                    
                    />
                  </TextField>
                  <TextField className="w-full" name="phone" type="tel">
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>
                  <TextField   defaultValue={tutorName}  className="w-full" name="name">
                    <Label>Tutor </Label>
                    <Input 
                    placeholder="Tutor" />
                  </TextField>
                  {/* <TextField className="w-full" name="message">
                    <Label>Message</Label>
                    <Input placeholder="Enter your message" />
                  </TextField> */}
                  <div className='flex gap-12'>
                <Button slot="close" variant="secondary">
                Cancel
             </Button>

              {/* <Button  type="submit" slot="close"> <Link href={'/my-tutors'}></Link> Book session
                </Button>  */}
<Link href={'/my-sessions'}>
  <Button onClick={handleBooking} type="submit" slot="close">Booked session</Button>
</Link>

                  </div>
                   
                </form>
              </Surface>
            </Modal.Body>
           
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
        
 
</>
    );
};


export default BookedModal;