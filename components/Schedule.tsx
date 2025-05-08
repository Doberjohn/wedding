import {Button} from "@/components/Button";

export const Schedule = () => {

  const onCeremonyButtonClick = () => {
    window.open("https://maps.app.goo.gl/g1KkwLsCBvVQqxJ19");
  }

  const onPartyButtonClick = () => {
    window.open("https://maps.app.goo.gl/NoUUGquW2KTWYKZa6");
  }

  return (
    <div className="w-[100vw] lg:w-180 flex flex-col gap-10">
      <div className="text-3xl">
        Το πρόγραμμα
      </div>
      <div className='flex flex-col lg:flex-row items-center justify-between gap-20 md:gap-10'>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className='text-2xl'>Στέψη - 7 μ.μ.</div>
          <div>Ιερός Ναός Αγίων Νεομαρτύρων, Πτολεμαΐδα</div>
          <Button onClick={onCeremonyButtonClick}>Δες το στο χάρτη</Button>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <div className='text-2xl'>Γαμήλιο γλέντι - 9 μ.μ.</div>
          <div className=''>Ioannou Resort Hotel - Αίθουσα πισίνας</div>
          <Button onClick={onPartyButtonClick}>Δες το στο χάρτη</Button>
        </div>
      </div>
    </div>
  )
}