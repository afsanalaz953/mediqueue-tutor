"use client";


import { AlertDialog, Button } from "@heroui/react";

const CancelledBookingButton = ({bookingId}) => {
const handleCancelBooking = async () =>{

const res = await fetch(`http://localhost:5000/booking/${bookingId}`,{
method: "DELETE",
headers:{
    "content-type" : "application/json"
}
})

const data = await res.json();
console.log(data);
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
               <Button variant="danger" type= "submit">Cancel</Button>

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
                                Keep Booking
                            </Button>
                            <Button
                            onClick = { handleCancelBooking }
                                slot="close"
                                color="danger"
                                className="font-bold"

                            >
                                Yes, Cancel
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default CancelledBookingButton;