import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "../styles/adminlogin.css"

function AdminLogin(){

const [username,setUsername] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const handleSubmit = async(e)=>{

e.preventDefault()

try{

const res = await axios.post("http://127.0.0.1:8000/api/admin-login/",{

username,
password

})

if(res.data.status === "success"){

alert("Login Successful")

navigate("/admindash")

}else{

alert("Invalid Username or Password")

}

}catch(error){

console.log(error)

}

}

return(

<div className="admin-login-page">

<div className="admin-login-card">

<h2>Admin Login</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
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

export default AdminLogin