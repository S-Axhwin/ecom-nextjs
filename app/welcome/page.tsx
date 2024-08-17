"use client"
import baseUrl from "@/baseUrl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";
import { useRouter } from 'next/navigation'


const page =  () => {
   const router = useRouter();
   const [formData, setFormData] = useState({}) as any;
   const handleInputs = (e:any) => {
      const {name, value} = e.target;
      setFormData({...formData, [name]:value} as any);
   }

  const onSubmit = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData);
    const res = await axios.post("/api/name", formData)
    console.log(res);
    router.push("/")
  }
  return (
    <div className="h-screen w-full grid place-items-center ">
        <div className="flex justify-center flex-col gap-3 w-full relative h-[50%] lg:w-[20%] border-2 p-5 rounded-lg">
        <div className="flex justify-center text-4xl font-bold text-yellow-400">Welcome</div>
        <div >

            <form onSubmit={onSubmit} className="flex gap-2 flex-col">
                <Input type="text" value={formData?.name || ""} name="name" placeholder="Enter your name" onChange={handleInputs} />
                <Input type="text" name="for" placeholder="Your here for" onChange={handleInputs} />
                <Button type="submit" >Submit</Button>
            </form>

        </div>
        </div>
    </div>
  )
}

export default page
