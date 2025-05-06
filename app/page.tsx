"use client"
import {ImageGallery} from "react-image-grid-gallery";
import {OurHistory} from "@/components/OurHistory";
import {Header} from "@/components/Header";

export default function Home() {

  const imagesArray = [
    {
      id: "photo1",
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "https://bcdn-2738.sayido.app/2gNtB3djFTh4JJ5aoFOS41khvKQ2/images/0e8bcba5-5fa3-1368-1610-1a2d40c8792d_coupleinthepark39BD65P.jpg?width=600&height=auto",
    },
    {
      id: "photo2",
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "https://bcdn-2738.sayido.app/QYs2OJz2UJSVU29IarT2JCT7Spj2/images/a97449c7-dd02-2dab-af91-7649f2e9e2bf_seabeachsandcouplelovesummer_t20_Xzoo3b.jpg?width=600&height=auto",
    },
    {
      id: "photo3",
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "https://bcdn-2738.sayido.app/QYs2OJz2UJSVU29IarT2JCT7Spj2/images/b9dc6a44-347f-3f59-95d4-114aeab92e53_hikingthroughthewoodsholdinghands_t20_9GxX6B1.jpg?width=600&height=auto",
    },
    {
      id: "photo4",
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "https://bcdn-2738.sayido.app/QYs2OJz2UJSVU29IarT2JCT7Spj2/images/b05c1635-cb04-66e5-d34b-ba3c5fefd5b4_sunsunsetcouplelovegirlboysweetbeautiful_t20_YQBov1.jpg?width=600&height=auto",
    },
    {
      id: "photo5",
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "https://bcdn-2738.sayido.app/QYs2OJz2UJSVU29IarT2JCT7Spj2/images/d74c8796-e84a-7aee-55b8-6ede84339821_attractiveyoungcouplesittingbyacampfireandtent_t20_o149oP.jpg?width=600&height=auto",
    },
    {
      id: "photo6",
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "https://bcdn-2738.sayido.app/QYs2OJz2UJSVU29IarT2JCT7Spj2/images/d0fbabcd-4dbe-454c-4475-7f922f38de60_youngcoupleinlove_t20_nL2J1K.jpg?width=600&height=auto",
    }
  ];

  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center text-center">
        <Header/>
        <div className="w-[70%]">
          <ImageGallery imagesInfoArray={imagesArray} gapSize={10} columnCount={3}/>
        </div>
        <OurHistory/>
        <hr className="border-brown-200 w-150"/>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <div className="text-sm italic">
          Η σελίδα του γάμου μας φτιάχτηκε από εμάς
        </div>
      </footer>
    </div>
  );
}
