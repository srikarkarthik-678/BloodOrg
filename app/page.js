"use client"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
 
  return (
    <div>
      <div className="font-title">
        <div style={{ backgroundImage: "url('/istockphoto-1476567924-612x612.jpg')" }} className="bg-center bg-cover h-[120vh] w-[100%]">
          <div className="leftsection flex flex-col justify-center items-center h-[120vh] gap-4">
            <div className="flex justify-center items-center gap-2 max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
              <div className="left text-6xl text-white font-semibold">
                Blood
              </div>
              <div className="left text-6xl text-white font-semibold">
                Donation
              </div>
            </div>

            <div className="content text-white w-[500px] max-sm:w-[300px]">
              &quot;Every time you donate blood, you are offering hope to families in need and giving someone a chance to see another tomorrow&quot;
            </div>
            <div className="flex gap-5 mt-5">
              <Link href="/user/donor"><button className="bg-white text-red-600 rounded-full px-5 p-2">Donor</button></Link>
              <Link href="/user/requestor"><button className="bg-white text-red-600 rounded-full px-5 p-2">Requestor</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
