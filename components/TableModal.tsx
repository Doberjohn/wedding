import Select, {SingleValue} from "react-select";
import {useState} from "react";
import {guestList} from "@/config/guests";

interface Selection {
  value: string | null;
  label: string | null;
  table: string | null;
}

interface TableModalProps {
  onClose?: () => void;
}

export const TableModal = (props: TableModalProps) => {
  const [selectedOption, setSelectedOption] = useState<SingleValue<Selection>>(null);

  return (
    <>
      <div onClick={props.onClose}
        className="overflow-y-auto overflow-x-hidden flex fixed top-0 z-5 h-[100vh] bg-black max-h-full w-full opacity-80">
      </div>
      <div className="fixed top-[40vh] z-10 p-4 w-full max-w-md max-h-full">
        <div className="relative bg-[#F6F7F5] text-[#573710] rounded-lg shadow-sm">
          <div
            className="flex items-center p-4 md:p-5 rounded-t">
            <h3 className="text-xl font-semibold text-[#573710]">
              Βρες το τραπέζι σου
            </h3>
            <button type="button" onClick={props.onClose}
                    className="end-2.5 bg-transparent hover:bg-stone-200 hover:text-stone-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-stone-600 dark:hover:text-white cursor-pointer">
              <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
              </svg>
            </button>
          </div>
          <div className="p-4 md:p-5">
            <form className="space-y-4" action="#">
              <div className='flex flex-col gap-5'>
                <Select
                  className="w-full text-left"
                  isSearchable={true}
                  options={guestList}
                  value={selectedOption}
                  onChange={(selection) => setSelectedOption(selection)}
                  isClearable={true}
                  placeholder={'Ονοματεπώνυμο'}
                />
                {!selectedOption && (
                  <div className="flex flex-col">
                    <div className='text-sm text-center'>Γράψε το ονοματεπώνυμο σου για να βρεις</div>
                    <div className='text-sm text-center'>τον αριθμό του τραπεζιού σου</div>
                  </div>
                )}
                {selectedOption && (
                  <div className="flex flex-col gap-2">
                    <div className='text-sm text-center'>Κάθεσε στο τραπέζι</div>
                    <div className='text-4xl text-center'>{selectedOption.table}</div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}