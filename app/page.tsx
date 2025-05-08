"use client"
import {ImageGallery} from "react-image-grid-gallery";
import {OurHistory} from "@/components/OurHistory";
import {Header} from "@/components/Header";
import {Schedule} from "@/components/Schedule";
import {Divider} from "@/components/Divider";
import {Photoshare} from "@/components/Photoshare";
import {Countdown} from "@/components/Countdown";

export default function Home() {

  const imagesArray = [
    {
      id: "couple_photo_3",
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "/couple_photo_1.webp",
    },
    {
      id: "couple_photo_3",
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "couple_photo_2.webp",
    },
    {
      id: "couple_photo_3",
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "couple_photo_3.webp",
    },
    {
      id: "couple_photo_4",
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "couple_photo_4.webp",
    },
    {
      id: "couple_photo_5",
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "couple_photo_5.webp",
    },
    {
      id: "couple_photo_6",
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "couple_photo_6.webp",
    }
  ];

  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[50px] row-start-2 items-center text-center">
        <Header/>

        <div className="w-[70%]">
          <ImageGallery imagesInfoArray={imagesArray} gapSize={10} columnCount={3}/>
        </div>

        <OurHistory/>
        <Divider/>

        <Schedule/>
        <Divider/>

        <Photoshare/>
        <Divider/>

        <Countdown/>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div className="text-sm italic">
          Η σελίδα του γάμου μας φτιάχτηκε με αγάπη από εμάς
        </div>
      </footer>
    </div>
  );
}
