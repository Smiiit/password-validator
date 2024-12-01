import { useState } from "react";
import PasswordValidater from "./components/PasswordValidater";


function App() {

  const [ password, setPassword ] = useState('');   // to print the passsowrd valye into the console and for that we use this usestate hook+

  return (
    <div className="container">
      <div className="text-center fw-bold col-md-6 mx-auto ">
        
        <h3 className="text-center my-5 fw-bold fs-1 "> Password Validator</h3>

            <div className="form-group mb-1">
              <input 
                type="password" 
                className="from-control shadow-none" 
                placeholder="Enter Your Pasword for Validation" 
                style={ {width: '100%'}}
                onChange={e => setPassword(e.target.value)} 
              />
            </div>
            
            <div style={ {width: '100%'}}>
            <PasswordValidater password = {password}/>
            </div>
            
      
      </div>
    </div>
  );
}

export default App;
