
import React from 'react';
import { Table } from '@heroui/react';
import {Button} from "@heroui/react"
import   DeleteAddingButton from "@/components/shared/DeleteButton";
import { auth } from "@/lib/auth"; // path to your Better Auth server instance
import { headers } from "next/headers";
import Image from "next/image";
import EditModal from "@/components/EditModal"


const MyTutorPage = async() => {
const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
 });
 const user = session?.user
console.log(session, "formTutor")

const res = await fetch ("http://localhost:5000/my-tutors/")
const tutorList = await res.json()
console.log(tutorList, "tutorlist")





    return (
        <div className='container mx-auto  m-20 space-y-10'>
            <h1 className='font-bold text-3xl'>My Tutors List</h1>
   {/* ✅ Empty state check – put it here */}
      {!tutorList || tutorList.length === 0 ? (
        <div className="text-center p-10 m-6 bg-gray-100 rounded-lg shadow">
          <p className="text-gray-600 text-lg"> No tutors available yet.</p>
          <p className="text-gray-500">Click “Add Tutor” to get started.</p>
        </div>
      ) :( <div className='shadow-lg'>
              <Table className='w-min-700 bg-green-300 '>
                <Table.ScrollContainer>
                  <Table.Content aria-label="Team members" className='p-3'>
                    <Table.Header className= "rounded ">
                      <Table.Column className="text-lg font-bold">Photo</Table.Column>
                      <Table.Column   isRowHeader className="text-lg font-bold">Tutor Name</Table.Column>
                      {/* <Table.Column className="text-lg font-bold" >Student Name</Table.Column> */}
                      <Table.Column className="text-lg font-bold" >Subject</Table.Column>
                      <Table.Column className="text-lg font-bold" >Price</Table.Column>
                      <Table.Column  className="text-lg font-bold">Slots</Table.Column>
                       <Table.Column  className="text-lg font-bold">Status</Table.Column>
                      {/* <Table.Column>Registation Date</Table.Column>   */}
                      <Table.Column className="text-lg font-bold" >Session-Start-Date</Table.Column>
                      <Table.Column className="text-lg font-bold text-center"> Action</Table.Column>
                    </Table.Header>
                    <Table.Body>
                      {tutorList && tutorList.map((formTutors) => (
                        // console.log('Tutor ID:', formTutors.tutorId)
                        
                          <Table.Row key={formTutors?._id}>
                          <Table.Cell>
                            <Image
                              src={formTutors?.imageUrl || ""}
                              alt={formTutors.tutorName}
                              width={70}
                              height={70}
                              className="rounded-full object-cover"
                              unoptimized={true} 
                            />
                          </Table.Cell>
                          <Table.Cell>{formTutors.tutorName}</Table.Cell>
                          {/* <Table.Cell>{user.name}</Table.Cell> */}
                            {/* <Table.Cell>{formTutors.sessionStartDate}</Table.Cell>   */}
                          <Table.Cell>{formTutors.subject}</Table.Cell>                   
                          <Table.Cell>$ {formTutors.price}</Table.Cell>
                           <Table.Cell>{formTutors.totalSlots}</Table.Cell>
                            <Table.Cell>{formTutors.teachingMode}</Table.Cell>
                        
                          <Table.Cell> {formTutors.sessionStartDate}</Table.Cell >
                         <Table.Cell className="flex gap-3 bg-white p-8">
                         {/* <Button>  {'Edit'} </Button>  */}
                         <EditModal formTutors = {formTutors} />
                           < DeleteAddingButton  formTutorId = {formTutors._id} />
                       </Table.Cell>
                        </Table.Row>
                        
                      ))}
                    </Table.Body>
                  </Table.Content>
                </Table.ScrollContainer>
              </Table>
              


            </div> )
}
     </div>   
    );
};

export default MyTutorPage;