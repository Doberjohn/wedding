import Image from "next/image";
import {Button} from "@/components/Button";
import {TableModal} from "@/components/TableModal";
import {useState} from "react";

export const Header = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {/*<Image*/}
      {/*  src="/flower.webp"*/}
      {/*  alt="Flower image"*/}
      {/*  width={600}*/}
      {/*  height={400}*/}
      {/*  style={{position: "absolute", left: 0, top: 0}}*/}
      {/*/>*/}
      <div className='w-[70%] flex justify-end text-right'>
        <div className='flex flex-col gap-10 m-50 items-end'>
          <div className='text-7xl'>Γιάννης & Χριστίνα</div>
          <div className='text-3xl'>Σάββατο 23 Αυγούστου 2025</div>
          <Button onClick={()=> setShowModal(true)}>Βρες το τραπέζι σου</Button>
        </div>
      </div>
      {showModal && (
        <TableModal onClose={()=> setShowModal(false)}/>
      )}
      {/*<Image*/}
      {/*  src="/window.webp"*/}
      {/*  alt="Window image"*/}
      {/*  width={300}*/}
      {/*  height={400}*/}
      {/*  style={{position: "absolute", right: 130, top: 100}}*/}
      {/*/>*/}
    </>
  )
}