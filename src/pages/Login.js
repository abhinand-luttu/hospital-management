import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../styles/auth.css";

function PatientLogin() {

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const handleLogin = async(e) =>{
e.preventDefault()

try{

const res = await axios.post("http://127.0.0.1:8000/api/patient-login/",{
email:email,
password:password
})

if(res.data.status === "success"){
  localStorage.setItem("patient_id",res.data.patient_id)
localStorage.setItem("patient_name",res.data.name)
navigate("/patientdash")
}else{
alert("Invalid Email or Password")
}

}catch(error){
console.log(error)
}

}

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>Patient Login</h2>

        <form onSubmit={handleLogin}>

          <input 
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          />

          <input 
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          />

          <button type="submit">Login</button>

        </form>

        <p>
          Don't have an account?
          <Link to="/register"> Register</Link>
        </p>

      </div>
    </div>
  );
}

export default PatientLogin;