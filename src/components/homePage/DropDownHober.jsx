import React from 'react';
import Link from "next/link"
import { usePathname } from 'next/navigation';
import Image from "next/image"
import { authClient } from "@/lib/auth-client"


const DropDownHober = () => {
    const { data: session,  isPending } = authClient.useSession();
    console.log (session, "session")
    
    const user = session?.user;
    console.log (user, "user");
    
     const pathname = usePathname();
        console.log (pathname, "pathname");
    
        const isActive = (href) =>{
           return href === pathname;
        };
    return (
        <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="m-1">
     <Image src={user.image || userAvatar  }
            // referrerPolicy='no-referrer'
          alt=" author"
          width={50}
          height={50} 
          />
    </div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-20 p-1 shadow-sm">
    <li className='text-blue-800 font-bold'><Link href={"/profile"} className={`${isActive ("/profile") ? " border-b-4 border-b-green-600" : ""}`} >Profile</Link></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
    );
};

export default DropDownHober;