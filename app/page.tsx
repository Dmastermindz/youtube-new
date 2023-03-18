import Image from "next/image"
import {feedVideos} from "./util/data"
import { BsDot, BsThreeDotsVertical } from "react-icons/bs"

export default function Home() {
  return (
   <div className="flex flex-col px-8 py-4 gap-10 md:flex-row flex-wrap flex-1 xl:max-w-[90%]">
    {feedVideos.map(video => (
      <div className="flex grow flex-col gap-3 w-[260px]">
        <div className="">
          <Image src={video.thumbnailUrl} 
          height={180} 
          width={340} 
          alt="thumbnail" 
          className="rounded-lg"
          />
        </div>
        <div className="flex gap-3 ">
            <div className="">
              <Image 
                    src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg" 
                    height={35} 
                    width={35} 
                    alt="user_image"
                    className="rounded-full" 
                    />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <span className="font-semibold text-white max-w-{80%]">{video.title}</span>
                <div>
                  <BsThreeDotsVertical size={15}/>
                </div>
              </div>
              <div className="text-sm text-zinc-400">
                <span>{video.channelName}</span>
                <div className="flex items-center">
                  <span>{video.viewCount}</span>
                  <span><BsDot /></span>
                  <span>{video.createdAt.toDateString()}</span>
                </div>
              </div>
            </div>
        </div>
      </div>
    ))}
   </div>
  )
}
