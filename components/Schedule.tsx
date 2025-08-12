export const Schedule = () => {

  const onDateButtonClick = () => {
    window.open("https://calendar.google.com/calendar/u/0/r/eventedit?text=%CE%93%CE%AC%CE%BC%CE%BF%CF%82+%CE%93%CE%B9%CE%AC%CE%BD%CE%BD%CE%B7+-+%CE%A7%CF%81%CE%B9%CF%83%CF%84%CE%AF%CE%BD%CE%B1%CF%82&dates=20250823T190000/20250823T210000&location=%CE%99%CE%B5%CF%81%CF%8C%CF%82+%CE%9D%CE%B1%CF%8C%CF%82+%CE%91%CE%B3%CE%AF%CF%89%CE%BD+%CE%9D%CE%B5%CE%BF%CE%BC%CE%B1%CF%81%CF%84%CF%8D%CF%81%CF%89%CE%BD+%CE%A0%CF%84%CE%BF%CE%BB%CE%B5%CE%BC%CE%B1%CE%90%CE%B4%CE%B1%CF%82,+%CE%A0%CF%84%CE%BF%CE%BB%CE%B5%CE%BC%CE%B1%CE%90%CE%B4%CE%B1+502%2000,+%CE%95%CE%BB%CE%BB%CE%AC%CE%B4%CE%B1");
  }

  const onCeremonyButtonClick = () => {
    window.open("https://maps.app.goo.gl/g1KkwLsCBvVQqxJ19");
  }

  const onPartyButtonClick = () => {
    window.open("https://maps.app.goo.gl/NoUUGquW2KTWYKZa6");
  }

  return (
    <>
      <div className='flex flex-col lg:flex-row items-center justify-between mt-5 gap-15 md:gap-20'>
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