import {Button} from "@/components/Button";
import {useState} from "react";
import {UploadModal} from "@/components/UploadModal";

export const Photoshare = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="text-3xl">
        Μοιράσου τις φωτογραφίες σου μαζί μας
      </div>
      <div className='w-[100vw] lg:w-250 px-5'>
        Θα θέλαμε να δημιουργήσουμε ένα όμορφο κολάζ αναμνήσεων από τον γάμο μας – και σας προσκαλούμε να είστε μέρος
        του!
        Μη διστάσετε να απαθανατίσετε ξεχωριστές στιγμές κατά τη διάρκεια της ημέρας και να τις μοιραστείτε μαζί μας,
        είτε την ίδια στιγμή είτε τις επόμενες ημέρες.
        Οι δικές σας φωτογραφίες θα γεμίσουν τη γιορτή μας με ακόμη περισσότερη χαρά και αγάπη.
        Ας κάνουμε την ημέρα του γάμου μας μια συλλογή από κοινές, πολύτιμες αναμνήσεις!
      </div>
      <Button onClick={()=> setShowModal(true)}>Ανέβασε φωτόγραφιες</Button>

      {showModal && (
        <UploadModal onClose={()=> setShowModal(false)}/>
      )}
    </>
  )
}