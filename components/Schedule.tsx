export const Schedule = () => {

  const onCeremonyButtonClick = () => {
    window.open("https://maps.app.goo.gl/g1KkwLsCBvVQqxJ19");
  }

  const onPartyButtonClick = () => {
    window.open("https://maps.app.goo.gl/NoUUGquW2KTWYKZa6");
  }

  return (
    <>
      <div className='flex flex-col lg:flex-row items-center justify-between my-5 gap-15 md:gap-20'>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className='text-2xl'>Στέψη | 7 μ.μ.</div>
          <div className='underline cursor-pointer' onClick={onCeremonyButtonClick}>
            Ιερός Ναός Αγίων Νεομαρτύρων, <br/> Πτολεμαΐδα
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className='text-2xl'>Γαμήλιο γλέντι | 9 μ.μ.</div>
          <div className='underline cursor-pointer' onClick={onPartyButtonClick}>
            Ioannou Resort Hotel, <br/> Αίθουσα πισίνας
          </div>
        </div>
      </div>
    </>
  )
}