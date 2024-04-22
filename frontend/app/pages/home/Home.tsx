import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center font-main p-10">
      <Navbar />
      <HomeFolder authorVisible callback={() => {}}>
        <span className=" whitespace-nowrap">Join the</span>
        <span className=" whitespace-nowrap">journey</span>
      </HomeFolder>
      <HomeFolder callback={() => {}}>
        <Image src="/illustrations/desk.svg" alt="Folder" width={120} height={150} />
      </HomeFolder>
    </div>
  )
}

function HomeFolder({ children, authorVisible, callback } : { children: React.ReactNode, authorVisible?: boolean, callback : () => void }) {
  return (
    <div className="self-center flex flex-col p-5 py-5 mt-20 border-white rounded-2xl bg-folder-filled bg-contain bg-no-repeat bg-center">
      <h2 className="self-center flex flex-col my-5 uppercase text-6xl font-bold">
        { children }
      </h2>
      <div className="flex items-center justify-between gap-5">
        <div className={`${authorVisible ? '' : 'hidden'} flex flex-col`}>
          <span className="text-gray text-xs">Made by</span>
          <span className="whitespace-nowrap text-sm">Francesco Macaluso</span>
        </div>
        <button className="self-end flex items-center p-1 px-2 gap-3 border-2 border-accent rounded-2xl"
          onClick={callback}
        >
          <span className="whitespace-nowrap">Check Out</span>
          <div className="">
            <Image src="/arrow.svg" alt="Folder" width={16} height={16} />
          </div>
        </button>
      </div>
    </div>
  )
}