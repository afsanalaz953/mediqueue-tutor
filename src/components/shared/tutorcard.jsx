import { Button, Chip } from "@heroui/react";
import { BookOpen, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const TutorCard = ({allTutor}) => {
 if (!allTutor) {
        return null;
    }

    const { _id, tutorName, image, subject, location, hourlyFee, availableSlots, availableDays, timeSlot, institution, teachingMode } = allTutor;
    return (
        <div >
 <div
            className="group flex flex-col bg-white rounded-4xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="container  mx-auto overflow-hidden aspect-12/10"> 
                <Image
                    alt="Tutor Image"
                    className="mt-6 cover w-fit object-cover group-hover:scale-110 transition-transform duration-700"
                    src={image|| "/placeholder-image.jpg"}
                    width={300}
                    height={100}
                 
                />
                {/* <div className="absolute top-4 right-4"> */}
                   
                {/* </div> */}
            </div> 
            
            <div className="p-2 flex flex-col grow space-y-4">
                 <div>
                    <Chip
                        color="primary"
                        variant="solid"
                        className=" items-center font-bold shadow-lg shadow-blue-600/20"
                    >
                        {subject}
                    </Chip>
                 </div>
                <div className="space-y-2">
                    <Link href={`/tutors/${_id}`}>
                        <h3 className="text-xl font-bold leading-tight line-clamp-2 hover:text-blue-600 transition-colors">
                            {tutorName}
                        </h3>
                    </Link>
                    <p className="text-sm text-slate-500 font-medium flex items-center gap-1">
                        Total slots <span className="text-slate-900">{availableSlots}</span>
                    </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 font-bold">
                    <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {timeSlot}
                    </span>
                    <span className="flex items-center gap-1">
                        {/* <BookOpen className="w-3.5 h-3.5" /> 24 Lessons */}
                        <p>{location}</p>
                    </span>
                </div>

                <div className="pt-6 mt-auto border-t border-slate-100 flex justify-between items-center">
                    <span className="text-2xl font-black text-blue-600">${hourlyFee}</span>
                </div>
                 <Button
                        
                        className="font-bold rounded-xl px-6 w-full"
                    >
                       <Link href ={`/tutors/${_id}`}>  Book Session </Link> 
                       
                    </Button>
            </div>
        </div>






        </div>

       
    );
};

export default TutorCard;