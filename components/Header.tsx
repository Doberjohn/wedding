import {Button} from "@/components/Button";
import {TableModal} from "@/components/TableModal";
import {useState} from "react";

export const Header = () => {
  const [showModal, setShowModal] =
    useState((window.location.search.includes('search')));

  return (
    <>
      <div className='w-[100%] xl:w-[70%] flex justify-center xl:justify-end text-center'>
        <div className='flex flex-col gap-10 lg:mt-30 lg:mb-10 items-center xl:items-end'>
          <div className='text-4xl md:text-7xl'>Γιάννης & Χριστίνα</div>
          <div className='text-xl text-3xl'>Σάββατο 23 Αυγούστου 2025</div>
          <Button onClick={()=> setShowModal(true)}>Βρες το τραπέζι σου</Button>
        </div>
      </div>
      {showModal && (
        <TableModal onClose={()=> setShowModal(false)}/>
      )}
    </>
  )
}