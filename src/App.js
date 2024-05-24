import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import LoginEmployee from './components/LoginEmployee';
import LoginEmployeer from './components/LoginEmployeer';
import RegisterEmployee from './components/RegisterEmployee';
import RegisterEmployeer from './components/RegisterEmployeer';
import Applicants from './components/Applicants';


function App() {
  const [loginEmployee, setLoginEmployee] = useState(false);
  const [loginEmployeer, setLoginEmployeer] = useState(false);
  const [registerEmployee, setRegisterEmployee] = useState(false);
  const [registerEmployeer, setRegisterEmployeer] = useState(false);
  const [applicant, setApplicants] = useState(false);


  const getContent = () => {
    if (!loginEmployee && !loginEmployeer && !registerEmployee && !registerEmployeer) {
      return <Home
        setLoginEmployee={setLoginEmployee}
        setLoginEmployeer={setLoginEmployeer}
        setRegisterEmployee={setRegisterEmployee}
        setRegisterEmployeer={setRegisterEmployeer}
      />

    } else if (loginEmployee) {
      return <LoginEmployee setLoginEmployee={setLoginEmployee} setApplicants={setApplicants} />

    } else if (loginEmployeer) {
      return <LoginEmployeer setLoginEmployeer={setLoginEmployeer} />

    } else if (registerEmployee) {
      return <RegisterEmployee setRegisterEmployee={setRegisterEmployee} />

    } else if (registerEmployeer) {
      return <RegisterEmployeer setRegisterEmployeer={setRegisterEmployeer} />

    }else if(applicant) {
      return <Applicants />
    }


  }

  return (

    <div className="App">
      {getContent()}


    </div>
  );
}

export default App;

{/*       {
        !user.length > 0
        ? <LoginEmployeer setUser={setUser} />
        : <Applicants user={user} setUser={setUser} />
      } */}
