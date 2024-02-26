import './App.css';
import ReuseableForm from './components/ReuseableForm/ReuseableForm';
//import HookForm from './components/HookForm/HookForm'
//import StatefulForm from './components/StatefulForm/StatefulForm'



function App() {
  

  const handleSingUpSubmit = data => {
    console.log(data);
  }
  const handleUpdateProfile = data => {
console.log(data);
  }
  

  return (
    <>
      <div> 
       
      <h1>Vite + React</h1>
     
      {/* <SimpleFrom/> */}
      {/* <StatefulForm/> */}
      {/* <Refform/> */}
      {/* <HookForm/> */}
      <ReuseableForm handleSubmit={handleSingUpSubmit} formTitle={'Sign Up'}> 
         <div>
          <h2> Sing Up</h2>
          <p> Please sign up right now</p>
         </div>
      </ReuseableForm>
      <ReuseableForm handleSubmit={handleUpdateProfile} formTitle={'Profile Update'} fromBtn={'Update'}>
         <div>
          <h2>Profile Updata</h2>
          <p> Pleas Updata Your Profile </p>
         </div>
      </ReuseableForm>
      

      </div>
    </>
  )
}

export default App
