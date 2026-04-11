import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../styles/medicalhis.css";

function Register() {

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [phone,setPhone]=useState("")
const [password,setPassword]=useState("")

const navigate = useNavigate()

const handleRegister = async(e)=>{
e.preventDefault()

try{

await axios.post("http://127.0.0.1:8000/api/patients/",{
name:name,
email:email,
phone:phone,
password:password
})

alert("Registration Successful")

navigate("/login")

}catch(error){
console.log(error)
}

}

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>Patient Registration</h2>

        <form onSubmit={handleRegister}>

          <input 
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
          />

          <input 
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          />

          <input 
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          required
          />

          <input 
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          />

          <button type="submit">Register</button>

        </form>

        <p>
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Register;