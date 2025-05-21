"use client"
import {images} from "@/config/images";
import {ImageGallery} from "react-image-grid-gallery";
import {OurHistory} from "@/components/OurHistory";
import {Header} from "@/components/Header";
import {Divider} from "@/components/Divider";
import {Photoshare} from "@/components/Photoshare";
import {Countdown} from "@/components/Countdown";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[50px] items-center text-center">

        <Header/>
        <div className="md:hidden">
          <Divider/>
        </div>

        <div className="hidden md:block md:w-[70vw]">
          <ImageGallery imagesInfoArray={images} gapSize={10} columnCount={3}/>
        </div>

        <OurHistory/>
        <Divider/>

        <Photoshare/>
        <Divider/>

        <Countdown/>
      </main>
    </div>
  );
}
