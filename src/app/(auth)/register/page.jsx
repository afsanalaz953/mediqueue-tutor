"use client"
import React from 'react';
import Link from "next/link";
import {useForm} from "react-hook-form";
import {authClient} from "@/lib/auth-client"
import { DiPhotoshop } from 'react-icons/di';
import { useRouter } from 'next/navigation';
import {Button} from "@heroui/react";

const RegisterPage = () => {
const { register, handleSubmit,formState: { errors }} = useForm();
   const router = useRouter();
    const handleRegisterFunc = async(data) => {
    console.log(data, "data");
    const {name, email, password, image} = data;
    

    const {data:res, error} = await authClient.signUp.email({
    name: name, // required
    email: email, // required
    image: image,
    password: password, // required
    callbackURL: "/login",
  
});
console.log (res, error);

if (error) {
    alert(error.message)
}
 if (res) {
    alert("Signup Successful")
    router.push("/login");
 }   
    };




    return (
        <div className='bg-slate-200  container mx-auto my-10'>
            
            <div className='bg-white rounded-xl w-150 container mx-auto p-10 my-6 flex gap-4 flex-col justify-center items-center'>
                <h2 className='font-bold text-2xl'> Register</h2>

<form onSubmit={handleSubmit(handleRegisterFunc)} className='space-y-6 mt-4'>
                    <fieldset className="fieldset">
  <legend className="fieldset-legend">Name</legend>
  <input type="text" className="input w-100 border-2" placeholder="Enter Your Name" {...register("name", {
    required: "name is required",
  })} />
{errors.name && <p> {errors.name.message} </p>} 
</fieldset>

 <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input type="text" className="input" placeholder="Enter Your Email" {...register("email",{
    required: "Email is required",
  })} />
{errors.email && <p> {errors.email.message} </p>}
</fieldset>

 <fieldset className="fieldset">
  <legend className="fieldset-legend">Photo URL</legend>
  <input type="text" className="input" placeholder="Photo url" {...register("image",{
    required: "Photo url is required",
  })} />
{errors.image && <p> {errors.image.message} </p>}
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend"> Password </legend>
  <input type="password" className="input" placeholder="Enter your Password" {...register("password", { required: "password is require" })} />
   {errors.password && <p> {errors.password.message} </p>}
</fieldset>
<br />
    <Button type="submit"  className='w-full' >  Register </Button>
{/* <button type="submit"  className='btn w-full'> </button> */}
<p className='text-sm'> Already have an account</p>
<span className='text-sm font-bold text-blue-700'><Link href= "/login"> sign in </Link></span>
                </form>

            </div>
           
        </div>
    );
};

export default RegisterPage;