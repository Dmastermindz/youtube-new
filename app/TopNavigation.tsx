'use client';

import Image from 'next/image'
import {BsYoutube, BsMicFill, BsBell, BsCameraVideo} from 'react-icons/bs'
import {HiOutlineMenu} from 'react-icons/hi'
import {HiSearch} from 'react-icons/hi'
import {useState} from "react"


const TopNavigation = () => {
        const [search, setSearch] = useState("")

    return (
        <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-6">
                <HiOutlineMenu size={30} />
                <div className="flex items-center gap-1.5">
                    <BsYoutube size={30} className="text-red-500"/>
                    <span className="text-xl">YouTube</span>
                </div>
                
            </div>
            <div className="hidden md:flex gap-2 min-w-[300px] lg:w-[620px]">
                <div className="flex w-full">
                    <input  
                    placeholder="Search" 
                    value={search} 
                    onChange={(event) => setSearch(event.target.value)} 
                    className="w-full px-4 py-2 text-zinc-200 focus:bg-black rounded-tl-full rounded-bl-full focus:outline-none focus:ring-[1px] focus:ring-sky-500 bg-zinc-900 border-[1px] border-zinc-700 placeholder:text-zinc-500" 
                    />
                    <div className="bg-zinc-700 rounded-tr-full rounded-br-full px-5 py-3">
                    <HiSearch  size={20} />
                    </div>
                </div>
                <div className="flex items-center bg-zinc-800 p-4 rounded-full hover:bg-zinc-700 cursor-pointer">
                    <BsMicFill />
                </div>
            </div>
            <div className="flex items-center gap-3 ">
                <div className="flex items-center  p-3 rounded-full hover:bg-zinc-700 cursor-pointer">
                    <BsCameraVideo size={20}/>
                </div>
                <div className="flex items-center  p-3 rounded-full hover:bg-zinc-700 cursor-pointer">
                    <BsBell size={20}/>
                </div>
                <div className="cursor-pointer">
                    <Image 
                    src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg" 
                    height={35} 
                    width={35} 
                    alt="user_image"
                    className="rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default TopNavigation;