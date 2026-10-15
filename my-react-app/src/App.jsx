import Student from './Student'

function App() {

  return (
    <>
      <Student name="Qtaro Qjo" age={17} isStudent={true}/>
      <Student name="Kakyoin Noriaki" age={17} isStudent={true}/>
      <Student name="Joseph Joestar" age={69} isStudent={false} hamon={true}/>
      <Student/>
    </>
  )
}

export default App
