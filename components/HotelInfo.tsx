export const HotelInfo = () => {

  const onKostisButtonClick = () => {
    window.open("https://maps.app.goo.gl/Ahm1CwzEsR2LiCiT8");
  }

  const onVillaButtonClick = () => {
    window.open("https://maps.app.goo.gl/4nkCiDxNdAAG1QGP6");
  }

  const onApt1ButtonClick = () => {
    window.open("https://maps.app.goo.gl/fxUhJ91prJdPsT71A");
  }

  const onApt2ButtonClick = () => {
    window.open("https://maps.app.goo.gl/4nkCiDxNdAAG1QGP6");
  }

  const onApt3ButtonClick = () => {
    window.open("https://maps.app.goo.gl/4nkCiDxNdAAG1QGP6");
  }

  return (
    <>
      <div className="text-3xl">
        Πληροφορίες διαμονής
      </div>
      <div className='w-[100vw] lg:w-250 px-5'>
        Σε αυτή την ενότητα θα βρείτε τα καταλύματα που έχουμε διαθέσει για τη διαμονή σας, μαζί με τις διευθύνσεις
        τους. Εδώ θα βρείτε επίσης οδηγίες για το πώς να φτάσετε σε κάθε ένα από αυτά.
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-between mt-5 gap-15 md:gap-20'>
        <div className="flex flex-col items-center justify-center gap-5 p-3 border rounded-xl cursor-pointer"
             onClick={onKostisButtonClick}>
          <div className='text-2xl'>Hotel Kostis</div>
          <div>
            <p>Φιλίππου 6,</p>
            <p>Πτολεμαΐδα</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 p-3 border rounded-xl cursor-pointer"
             onClick={onVillaButtonClick}>
          <div className='text-2xl'>Villa in Ptolemaida</div>
          <div>
            <p>Προάστιο,</p>
            <p>Πτολεμαΐδα</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-between mt-5 gap-15 md:gap-20'>
        <div className="flex flex-col items-center justify-center gap-5 p-3 border rounded-xl cursor-pointer"
             onClick={onApt1ButtonClick}>
          <div className='text-2xl'>Διαμέρισμα Α</div>
          <div>
            <p>Πτολεμαίων 24,</p>
            <p>Πτολεμαΐδα</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 p-3 border rounded-xl cursor-pointer"
             onClick={onApt2ButtonClick}>
          <div className='text-2xl'>Διαμέρισμα Β</div>
          <div>
            <p>Οδός 2,</p>
            <p>Πτολεμαΐδα</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 p-3 border rounded-xl cursor-pointer"
             onClick={onApt3ButtonClick}>
          <div className='text-2xl'>Διαμέρισμα Γ</div>
          <div>
            <p>Οδός 3,</p>
            <p>Πτολεμαΐδα</p>
          </div>
        </div>
      </div>
    </>
  )
}