import axios from "axios";
import {useEffect, useState} from "react";
import ImageUploading, {ImageListType} from "react-images-uploading";
import {Divider} from "@/components/Divider";
import {Button} from "@/components/Button";
import {ClockLoader} from "react-spinners";

interface UploadModalProps {
  onClose?: () => void;
}

export const UploadModal = (props: UploadModalProps) => {
  const maxPhotosPerUpload = 20;
  const uploadEndpoint = 'https://api.imgbb.com/1/upload?key=fce554aec47d11487d1204fa2e64c1a3';

  const [images, setImages] = useState<ImageListType>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    }
  }, [showAlert]);


  const onChange = (imageList: ImageListType) => {
    setImages(imageList);
  };

  const uploadPhotos = async () => {
    setIsUploading(true);
    const promises = [];

    for (const image of images) {
      const formData = new FormData();
      const fileUrl = image.data_url.replace(/^data:image\/[a-z]+;base64,/, "");
      formData.append("image", fileUrl);
      const promise = axios.post(uploadEndpoint, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      promises.push(promise);
    }

    Promise.all(promises).then((res) => {
      console.log(res);
      setShowAlert(true);
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      setImages([]);
      setIsUploading(false);
    });
  }

  return (
    <>
      <div onClick={props.onClose}
           className="overflow-y-auto overflow-x-hidden flex fixed top-0 z-5 h-[100vh] bg-black max-h-full w-full opacity-80">
      </div>
      <div className={`fixed top-[${images.length === 0 ? '40' : '0'}vh] z-10 p-4 h-[100vh] w-full max-w-md max-h-full overflow-y-auto overflow-x-hidden`}>
        <div className="relative bg-[#F6F7F5] text-[#573710] rounded-lg shadow-sm">
          <div
            className="flex items-center p-4 md:p-5 rounded-t">
            <h3 className="text-xl font-semibold">
              Επίλεξε φωτόγραφιες
            </h3>
            <button type="button" onClick={props.onClose}
                    className="end-2.5 bg-transparent hover:bg-stone-200 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-stone-600 cursor-pointer">
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
                  {isUploading && (
                    <>
                      <ClockLoader color='#573710'/>
                      <div className='text-sm italic mt-5'>
                        Οι φωτογραφίες σας ανεβαίνουν...
                      </div>
                    </>
                  )}
                  {!isUploading && (
                    <>
                      {images.length < 20 && (
                        <div className='w-full flex justify-center' onClick={onImageUpload}>
                          <svg
                            className="w-16 h-16 m-3 p-3 border-1 border-dashed cursor-pointer"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01"/>
                          </svg>
                        </div>
                      )}
                      {images.length === 0 && (
                        <div className='text-sm italic mt-3'>
                          Επίλεξε μέχρι {maxPhotosPerUpload} φωτογραφίες κάθε φορά
                        </div>
                      )}
                      {images.length > 0 && images.length < 20 && (
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
                          <Button onClick={uploadPhotos}>Αποστολή</Button>
                        </>
                      )}
                    </>
                  )}
                </div>
              )}
            </ImageUploading>
          </div>
        </div>
      </div>
      {showAlert && (
        <div
          className="fixed bottom-0 z-10 bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
          role="alert">
          <div className="flex">
            <div className="py-1 content-center">
              <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 20 20">
                <path
                  d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/>
              </svg>
            </div>
            <div>
              <p className="font-bold">Οι φωτογραφίες σου ανέβηκαν!</p>
              <p className="text-sm mt-2">Σε ευχαριστούμε που μοιράστηκες τις όμορφες αναμνήσεις σου μαζί μας!</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}