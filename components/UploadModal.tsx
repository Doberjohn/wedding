import {useState} from "react";
import ImageUploading, {ImageListType} from "react-images-uploading";
import {Divider} from "@/components/Divider";
import {Button} from "@/components/Button";

interface UploadModalProps {
  onClose?: () => void;
}

export const UploadModal = (props: UploadModalProps) => {
  const [images, setImages] = useState<ImageListType>([]);
  const maxPhotosPerUpload = 20;

  const onChange = (imageList: ImageListType) => {
    console.log(imageList);
    setImages(imageList);
  };

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full text-white">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-stone-500 rounded-lg shadow-sm">
          <div
            className="flex items-center p-4 md:p-5 rounded-t">
            <h3 className="text-xl font-semibold text-white dark:text-white">
              Επίλεξε φωτόγραφιες
            </h3>
            <button type="button" onClick={props.onClose}
                    className="end-2.5 text-white bg-transparent hover:bg-stone-200 hover:text-white rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-stone-600 dark:hover:text-white cursor-pointer">
              <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <ImageUploading
              multiple={true}
              value={images}
              onChange={onChange}
              maxNumber={maxPhotosPerUpload}
              dataURLKey="data_url"
            >
              {({
                  imageList,
                  onImageUpload,
                  onImageRemove,
                }) => (
                <div className="flex flex-col items-center justify-center">
                  <svg onClick={onImageUpload} className="w-16 h-16 m-3 p-3 border-1 border-dashed text-white cursor-pointer" aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01"/>
                  </svg>
                  {images.length === 0 && (
                    <div className='text-sm italic mt-3'>
                      Επίλεξτε μέχρι {maxPhotosPerUpload} φωτογραφίες κάθε φορά
                    </div>
                  )}
                  {images.length > 0 && (
                    <Divider/>
                  )}
                  <div className='flex flex-row flex-wrap gap-5 w-70'>
                    {imageList.map((image, index) => (
                      <div key={index}>
                        <img src={image['data_url']} className='w-20' alt=''/>
                        <div className='mt-1'>
                          <button onClick={() => onImageRemove(index)}>Διαγραφή</button>
                        </div>
                      </div>
                    ))}
                  </div>
                  {images.length > 0 && (
                    <>
                      <Divider/>
                      <Button>Αποστολή</Button>
                    </>
                  )}
                </div>
              )}
            </ImageUploading>
          </div>
        </div>
      </div>
    </div>
  )
}