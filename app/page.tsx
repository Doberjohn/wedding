"use client"
import {images} from "@/config/images";
import {ImageGallery} from "react-image-grid-gallery";
import {OurHistory} from "@/components/OurHistory";
import {Header} from "@/components/Header";
import {Schedule} from "@/components/Schedule";
import {Divider} from "@/components/Divider";
import {Photoshare} from "@/components/Photoshare";
import {Countdown} from "@/components/Countdown";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[50px] items-center text-center">

        <div className="md:hidden">
          <ImageGallery imagesInfoArray={[images[0]]} gapSize={10} columnCount={3}/>
        </div>

        <Header/>
        <div className="md:hidden">
          <Divider/>
        </div>

        <div className="hidden md:block md:w-[70vw]">
          <ImageGallery imagesInfoArray={images} gapSize={10} columnCount={3}/>
        </div>

        <OurHistory/>
        <Divider/>

        <Schedule/>
        <Divider/>

        <Photoshare/>
        <Divider/>

        <Countdown/>
      </main>
      <footer className="flex items-center mb-5 justify-center">
        <div className="w-[50vw] lg:w-[100%] text-sm italic text-center">
        Η σελίδα του γάμου μας φτιάχτηκε με αγάπη από εμάς
        </div>
      </footer>
    </div>
  );
}
