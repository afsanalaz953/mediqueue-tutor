"use client";

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { ToastContainer, toast } from 'react-toastify';
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export function BookedModal({ allTutor }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // ← মডাল ওপেন/ক্লোজ কন্ট্রোল
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const [isLoading, setIsLoading] = useState(false);

  const handleBooking = async (e) => {
    e.preventDefault();
    if (isLoading) return;

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

    setIsLoading(true);
    const bookingData = {
      userId: user?.id,
      userName: user?.name,
      userEmail: user?.email,
      tutorId: allTutor._id,
      tutorName: allTutor.tutorName,
      tutorImage: allTutor.image,
      tutorStatus: allTutor.status,
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(bookingData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Booking failed");

      toast.success('Session booking successful!', { duration: 2000, position: 'top-center' });
      setIsOpen(false); // মডাল বন্ধ করুন
      setTimeout(() => {
        router.push('/my-sessions');
        router.refresh();
      }, 1500);
    } catch (error) {
      console.error("Booking error:", error);
      toast.error(error.message || "Network error.", { position: "top-center" });
    } finally {
      setIsLoading(false);
    }
  };
 const defaultName = user?.name || '';
  const defaultEmail = user?.email || '';
  const { tutorName } = allTutor;

  return (
    <div>
      {/* ট্রিগার বাটন – এটাতেই ক্লিক করলে মডাল খুলবে */}
     
{/* new modal */}
 <Modal>
   <Button className="w-full" onPress={() => setIsOpen(true)}>
        Booked session
      </Button>
      {/* <Button variant="secondary"> Update</Button> */}
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
           
              </Modal.Icon>
              <Modal.Heading>Book Tutor</Modal.Heading>
               <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we get back to you. The modal adapts automatically
                 when the keyboard appears on mobile.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                 <form onSubmit={handleBooking}
                           className="flex flex-col gap-4"                        
                         >
                       
                            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> */}
                             {/* Destination Name */}
                             {/* <div className="md:col-span-2">  */}
                               <TextField defaultValue = {defaultName} className="w-full" name="name" isRequired>
                                 <Label>Student Name</Label>
                                 <Input   placeholder="Enter your name" className="rounded-2xl" />
                                
                               </TextField>
                           
               
                             {/* Country */}
                             <TextField defaultValue = {defaultEmail} className="w-full"  name="email" type="email" isRequired>
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
              <div className='flex gap-12'>
              <Button slot="close" variant="secondary">
                Cancel
             </Button>

            {/* <Button onSubmit={onSubmit} type="submit" slot="close"> <Link href={'/my-tutors'}></Link> Book session
               </Button>  */}
 <Link href={'/my-sessions'}> 
  <Button  type="submit" slot="close">Booked session</Button>
  </Link> 
                  </div>                   
                </form>
              </Surface>
            </Modal.Body>
            {/* <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Send Message</Button>
            </Modal.Footer> */}
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal> 


 
 </div>

  
  );
}


export default BookedModal;


    //  {/* HeroUI মডাল – ModalContent ছাড়াই
    // //  <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} placement="center">
    // //     <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">
    // //       {/* <h3 className="text-lg font-semibold mb-4">Book a Session</h3> */}
    // //       <form onSubmit={handleBooking} className="flex flex-col gap-4">
    // //         <TextField
    // //           defaultValue={user?.name || ''}
    // //           label="Student name"
    // //           isRequired
    // //         />
    // //         <TextField
    // //           defaultValue={user?.email || ''}
    // //           label="Student Email"
    // //           type="email"
    // //           isRequired
    // //         />
    // //         <TextField label="Phone" type="tel" isRequired />
    // //         <TextField
    // //           defaultValue={allTutor.tutorName}
    // //           label="Tutor"
    // //           isReadOnly
    // //         />
    // //         <div className="flex gap-4 justify-end mt-2">
    // //           <Button type="button" variant="light" onPress={() => setIsOpen(false)}>
    // //             Cancel
    // //           </Button>
    // //           <Button type="submit" isLoading={isLoading} color="primary">
    // //             Confirm Booking
    // //           </Button>
    // //         </div>
    // //       </form>
    // //     </div>
    //   // </Modal>  









// "use client";

// import { useRouter } from 'next/navigation';
// import React, { useState } from 'react';
// import Link from 'next/link'
// // import {Envelope} from "@gravity-ui/icons";
// import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
// import { ToastContainer, toast } from 'react-toastify';
// import { authClient } from "@/lib/auth-client"
// import { FaGalacticSenate } from 'react-icons/fa6';


// export function BookedModal({allTutor}){
//   const router = useRouter(); 

//   // users session
// const { data: session, isPending } = authClient.useSession();
// console.log (session, "session")
// const user = session?.user;
// // console.log (user, "session");
// // newly added
//  const [isLoading, setIsLoading] = useState(false);

// const handleBooking = async(e) =>{
//  e.preventDefault(); // ফর্মের ডিফল্ট সাবমিট বন্ধ
//     if (isLoading) return;

//    // Frontend quick checks (optional, backend will also check)
//     if (allTutor.availableSlots <= 0) {
//       toast.error("No available slots left.", { position: "top-center" });
//       return;
//     }
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
//     const startDate = new Date(allTutor.sessionStartDate);
//     startDate.setHours(0, 0, 0, 0);
//     if (today < startDate) {
//       toast.error(`Booking opens on ${allTutor.sessionStartDate}.`, { position: "top-center" });
//       return;
//     }
// setIsLoading(true);

    
//   const bookingData = {
//     userId:user?.id,
//     userName: user.name,
//     userEmail:user.email,
//     tutorId:allTutor._id,
//     tutorName:allTutor.tutorName,
//     tutorImage:allTutor.image,
//     tutorStatus:allTutor.status
//   }

//   // const bookingData = { userName, userId, tutorName, tutorImage, tutorStatus, tutorId }
     
//       const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
//           method: "POST",
//           headers: {
//               'content-type': 'application/json'
//           },
//           body: JSON.stringify(bookingData)
//       })
//       const data = await res.json();
//       console.log(data, "single tutor data")

// if (!res.ok) {
//         // ব্যাকএন্ড থেকে পাঠানো এরর মেসেজ দেখান
//         toast.error(data.message || "Booking failed. Please try again.", { position: "top-center" });
//         return;
// }
//  // সফল বুকিং
//     //   toast.success('Session booking successful!', { duration: 2000, position: 'top-center' });
//     //   onOpenChange(false); // মডাল বন্ধ করুন
//     //   setTimeout(() => {
//     //     router.push('/my-sessions'); // রিডাইরেক্ট
//     //     router.refresh();
//     //   }, 1500);
//     // } catch (error) {
//     //   console.error("Booking error:", error);
//     //   toast.error("Network error. Please check your connection.", { position: "top-center" });
//     // } finally {
//     //   setIsLoading(false);
//     // }

// const onSubmit = async(e) =>{
// //     e.preventDefault()
// //     const formData = new FormData(e.currentTarget)
// //    const allTutor = Object.fromEntries(formData.entries())
// //    console.log(allTutor, "single tutor booked");

//   toast.success('Session booking successful', {
//             duration: 2000,
//            position: 'top-center',
//  });
        
// //  Navigation after success
//      setTimeout(() => {
//            //  router.push('/my-sessions');
//   router.refresh();
//         }, 2000);

// // // // window.location.reload();

  
// };


//    const defaultName = user?.name || '';
//    const defaultEmail = user?.email || '';
//    const { tutorName } = allTutor;
 
    
      
// //    const { tutorName, image, subject, location, hourlyFee, availableSlots, availableDays,sessionStartDate, timeSlot, institution, teachingMode} = allTutor;
// // const EditModal = () => {
// // const onSubmit = async(e) =>{
// //     e.preventDefault()
// //     const formData = new FormData(e.currentTarget)
// //    const allTutor = Object.fromEntries(formData.entries())
// //    console.log(allTutor, "single tutor booked");

// //  toast.success('Session booking successful', {
// //             duration: 2000,
// //             position: 'top-center',
// //  });
        
// // // // // Navigation after success
// //      setTimeout(() => {
// //            //  router.push('/my-sessions');
// //  router.refresh();
// //         }, 2000);

// // // // window.location.reload();
//     // };
 
//     return (
//         <>
   
// <Modal >
//     <Button className="font-bold rounded-xl px-6 w-full">Book Session</Button>
//       <Modal.Backdrop>
//         <Modal.Container placement="auto">
//           <Modal.Dialog className="sm:max-w-md">
//             <Modal.CloseTrigger />
//             <Modal.Header>
//               <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
              
//               </Modal.Icon>
//               <Modal.Heading>Contact Us</Modal.Heading>
//               <p className="mt-1.5 text-sm leading-5 text-muted">
//                 Fill out the form below and we get back to you. The modal adapts automatically
//                 when the keyboard appears on mobile.
//               </p>
//             </Modal.Header>
//             <Modal.Body className="p-6">
//               <Surface variant="default">
//                 <form  onSubmit={handleBooking} className="flex flex-col gap-4">
              
//                   <TextField defaultValue={defaultName} className="w-full" name="name" type="text">
//                     <Label>Student name</Label>
//                     <Input
//                      placeholder="Enter your name"
                     
//                      />
//                   </TextField>
//                   <TextField  defaultValue={defaultEmail}  className="w-full" name="email" type="email">
//                     <Label>Student Email</Label>
//                     <Input 
                     
//                     placeholder="Email"
                    
//                     />
//                   </TextField>
//                   <TextField className="w-full" name="phone" type="tel">
//                     <Label>Phone</Label>
//                     <Input placeholder="Enter your phone number" />
//                   </TextField>
//                   <TextField   defaultValue={tutorName}  className="w-full" name="name">
//                     <Label>Tutor </Label>
//                     <Input 
//                     placeholder="Tutor" />
//                   </TextField>
//                   {/* <TextField className="w-full" name="message">
//                     <Label>Message</Label>
//                     <Input placeholder="Enter your message" />
//                   </TextField> */}
//                   <div className='flex gap-12'>
//                 <Button slot="close" variant="secondary">
//                 Cancel
//              </Button>

//              {/* <Button onSubmit={onSubmit} type="submit" slot="close"> <Link href={'/my-tutors'}></Link> Book session
//                 </Button>  */}
// <Link href={'/my-sessions'}> 
//   <Button onSubmit={onSubmit} type="submit" slot="close">Booked session</Button>
//  </Link> 

//                   </div>
//                  </form>
//               </Surface>
//             </Modal.Body>
           
//           </Modal.Dialog>
//         </Modal.Container>
//       </Modal.Backdrop>
//     </Modal>
        
 
// </>
//     );
//   }
// }


// export default BookedModal;