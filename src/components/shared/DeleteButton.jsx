"use client";
import { AlertDialog, Button } from "@heroui/react";


const DeleteAddingButton = ({formTutorId}) => {
    console.log(formTutorId)
const handleDeleteButton = async () =>{

const res = await fetch(`http://localhost:5000/my-tutors/${formTutorId}`,{
method: "DELETE",
headers:{
    "content-type" : "application/json"
}
})

const data = await res.json ();
console.log( "delete response", data);
window.location.reload();
}



    return (
        <AlertDialog>
            {/* <Button
                color="danger"
                variant="light"
                size="sm"
            >
                Cancel
            </Button> */}
               <Button variant="danger" type= "submit">Belete</Button>

            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Confirm Cancellation</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p className="text-slate-600">
                                Are you sure you want to cancel this enrollment? This action cannot be undone and you
                                will lose access to the course materials.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button
                                slot="close"
                                variant="tertiary"
                            >
                               keep Tutor
                            </Button>
                            <Button

                            onClick = {handleDeleteButton}
                                slot="close"
                                color="danger"
                                className="font-bold"

                            >
                            Delete Tutor
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteAddingButton;