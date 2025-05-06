import Image from "next/image";

export const Header = () => {
  return (
    <>
      <Image
        src="/flower.webp"
        alt="Flower image"
        width={600}
        height={400}
        style={{position: "absolute", left: 0, top: 0}}
        unoptimized={true}
      />
      <div className='w-[70%] flex justify-end text-right'>
        <div className='flex flex-col gap-10 m-50 items-end'>
          <div className='text-7xl'>Γιάννης & Χριστίνα</div>
          <div className='text-3xl'>Σάββατο 23 Αυγούστου 2025</div>
          <button
            className="bg-transparent hover:bg-stone-700 w-50 text-brown-700 font-semibold hover:text-white py-2 px-4 border border-brown-700 hover:border-transparent rounded cursor-pointer">
            RSVP
          </button>
        </div>
      </div>
      <Image
        src="/window.webp"
        alt="Window image"
        width={300}
        height={400}
        style={{position: "absolute", right: 130, top: 100}}
        unoptimized={true}
      />
    </>
  )
}