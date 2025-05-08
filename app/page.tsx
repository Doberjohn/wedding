"use client"
// import {ImageGallery} from "react-image-grid-gallery";
import {OurHistory} from "@/components/OurHistory";
import {Header} from "@/components/Header";
import {Schedule} from "@/components/Schedule";
import {Divider} from "@/components/Divider";
// import {Photoshare} from "@/components/Photoshare";
// import {Countdown} from "@/components/Countdown";
// import {images} from "@/config/images";

export default function Home() {
  return (
    <div
      className="grid items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[50px] row-start-2 items-center text-center">
        <Header/>

        {/*<div className="w-[70%]">*/}
        {/*  <ImageGallery imagesInfoArray={images} gapSize={10} columnCount={3}/>*/}
        {/*</div>*/}

        <OurHistory/>
        <Divider/>

        <Schedule/>
        <Divider/>

        {/*<Photoshare/>*/}
        {/*<Divider/>*/}

        {/*<Countdown/>*/}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div className="w-[60vw] lg:w-[100%] text-sm italic text-center">
          Η σελίδα του γάμου μας φτιάχτηκε με αγάπη από εμάς
        </div>
      </footer>
    </div>
  );
}
