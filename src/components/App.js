
import React, { useState, useRef } from 'react';
/**
 * @task :add validation to email, if email is not valid, if not valid email, dont allow to submit
 * @error_message :  "Email is invalid"  if email is wrong. (must be same message) 
 * 
 * 
 */

function App() {
  const [data, setData] = useState({ fname: "", lname: "" });
  const [error, setError] = useState("");
  const fnameRef = useRef();
  const emailRef = useRef();
  /**
   * code here
   */
  const handelfrom = (event) => {

    //event.preventDefault();
    event.preventDefault();
    //console.log("ji");
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailRef.current.value.match(validRegex)) {
      setError("Email is invalid");
      return;
    }

    setData({ ...data, fname: fnameRef.current.value, lname: emailRef.current.value });
    fnameRef.current.value = "";
    emailRef.current.value = "";
    setError("");
  }

  return (
    <div className="App">
      <h1>How About Them Apples</h1>
      <form onSubmit={handelfrom}>
        <fieldset>
          <label>
            <p>First Name</p>
            <input id='fname' name="name" ref={fnameRef} />
            <br></br>
            <p>Email</p>
            <input id='lname' name="name" ref={emailRef} />
            {error && <h2 style={{ color: 'red' }}>{error}</h2>}
          </label>
        </fieldset>

        <button id='submit' type="submit">Submit</button>
      </form>
      {
        data.fname != undefined && (
          <div>
            <h1>{data.fname}</h1>
            <h2>{data.lname}</h2>
          </div>
        )
      }
    </div>
  )
}


export default App;