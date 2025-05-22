import {Button} from "@/components/Button";
import {TableModal} from "@/components/TableModal";
import {useEffect, useState} from "react";
import Image from "next/image";
import {Schedule} from "@/components/Schedule";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(true);


  useEffect(() => {
    setShowModal(window.location.search.includes('search'));
    setIsMobile(window.matchMedia("(max-width: 600px)").matches);
  }, []);

  return (
    <>
      <div>
        <div className='flex items-center justify-center w-[100vw] bg-right bg-[url(/banner.jpg)] h-70 bg-cover md:h-200 md:bg-initial'>
          <div className='hidden md:block'>
            <Image
              src={'/invitation.png'}
              alt='invitation'
              width={450}
              height={0}
            />
          </div>
        </div>
        <div className='flex flex-col gap-10 items-center justify-center w-[100vw] py-15 bg-[#d7d8d4]'>
          <Image
            src={'/names.png'}
            alt='names'
            width={isMobile ? 350: 550}
            height={0}
          />
          <div className='flex gap-10 items-center justify-center'>
            <Button onClick={()=> setShowModal(true)}>Βρες το τραπέζι σου</Button>
          </div>
          <Schedule/>
        </div>
      </div>
      {showModal && (
        <TableModal onClose={()=> setShowModal(false)}/>
      )}
    </>
  )
}