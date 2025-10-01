"use client"
import Image from "next/image";
import Link from "next/link";
import { useDonation } from "./user/context/DonationContext";
import { useRequest } from "./user/context/RequestContext";
export default function Home() {
  const { count } = useDonation();
  const { counts } = useRequest();
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
              "Every time you donate blood, you are offering hope to families in need and giving someone a chance to see another tomorrow"
            </div>
            <div className="flex gap-5 mt-5">
              <Link href="/user/donor"><button className="bg-white text-red-600 rounded-full px-5 p-2">Donor</button></Link>
              <Link href="/user/requestor"><button className="bg-white text-red-600 rounded-full px-5 p-2">Requestor</button></Link>
            </div>
            <div className="card flex justify-between items-center w-[90%] px-10 mt-20 max-md:px-0 max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-3">
              <div className="whitebg bg-white w-[200px] h-[100px] rounded-xl">
                  <div className="dlexcol flex flex-col justify-center items-center h-[14vh]">
                    <div className="totalcount text-red-600 font-semibold">
                      Total Blood Donors
                    </div>
                    <div className="text-red-600 font-semibold">
                      {count}
                    </div>
                  </div>
              </div>
              <div className="whitebg bg-white w-[200px] h-[100px] rounded-xl">
                  <div className="dlexcol flex flex-col justify-center items-center h-[14vh]">
                    <div className="totalcount text-red-600 font-semibold">
                      Total Requestors
                    </div>
                    <div className="text-red-600 font-semibold">
                      {counts}
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
