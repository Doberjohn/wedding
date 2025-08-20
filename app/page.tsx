"use client"
import {images} from "@/config/images";
import {ImageGallery} from "react-image-grid-gallery";
import {OurHistory} from "@/components/OurHistory";
import {Header} from "@/components/Header";
import {Divider} from "@/components/Divider";
import {Photoshare} from "@/components/Photoshare";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[50px] items-center text-center">
        <Header/>
        <div className="md:hidden">
          <Divider/>
        </div>


        <OurHistory/>
        <Divider/>

        <div className="hidden md:block md:w-[60vw]">
          <div className="text-3xl mb-10">
            Οι πιο όμορφες στιγμές μας
          </div>
          <ImageGallery imagesInfoArray={images} gapSize={15} columnCount={4}/>
        </div>

        <Divider/>

        <Photoshare/>
        <Divider/>
      </main>
    </div>
  );
}
