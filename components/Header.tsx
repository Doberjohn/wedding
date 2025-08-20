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
      <div className='flex flex-col gap-10 items-center justify-center w-[100vw] bg-[#d7d8d4]'>
        <video
          id="my-player"
          className="video-js xl:px-70 xl:pt-5"
          controls
          preload="auto"
          poster="/gallery/video_poster_3.png"
          data-setup='{}'>
          <source src="/videos/prewedding-demo.mp4" type="video/mp4"></source>
          <p className="vjs-no-js">
            To view this video please enable JavaScript, and consider upgrading to a
            web browser that
            <a href="https://videojs.com/html5-video-support/" target="_blank">
              supports HTML5 video
            </a>
          </p>
        </video>
        <Image
          src={'/names.png'}
          alt='names'
          width={isMobile ? 350 : 550}
          height={0}
        />
        <div className='flex gap-10 items-center justify-center'>
          <Button onClick={() => setShowModal(true)}>Βρες το τραπέζι σου</Button>
        </div>
        <Schedule/>
      </div>
      {showModal && (
        <TableModal onClose={() => setShowModal(false)}/>
      )}
    </>
  )
}