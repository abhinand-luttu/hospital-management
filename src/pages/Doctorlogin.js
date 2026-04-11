import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "../styles/doctorlogin.css"

function DoctorLogin(){

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const navigate = useNavigate()

const handleLogin = async(e) => {

e.preventDefault()

try{

const res = await axios.post(
"http://127.0.0.1:8000/api/doctor-login/",
{
email:email,
password:password
}
)

if(res.data.status === "success"){

localStorage.setItem("doctor_id",res.data.doctor_id)
localStorage.setItem("doctor_name",res.data.name)

alert("Login Successful")

navigate("/Doctordash")

}else{

alert("Invalid Email or Password")

}

}catch(error){

console.log(error)
alert("Server error")

}

}

return(

<div className="doctor-login-container">

<div className="login-card">

<h1>Doctor Portal</h1>
<p>Login to your medical dashboard</p>

<form onSubmit={handleLogin}>

<input
type="email"
placeholder="Doctor Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
required
/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
required
/>

<button type="submit">
Login
</button>

</form>

</div>

</div>

)

}

export default DoctorLogin