import { useState, useEffect } from "react"
import axios from "axios"
import "../styles/doctorview.css"
import { useNavigate } from "react-router-dom"

function Doctors(){

const [doctors,setDoctors] = useState([])
const navigate = useNavigate()

useEffect(()=>{
fetchDoctors()
},[])

const fetchDoctors = async () =>{
try{

const res = await axios.get("http://127.0.0.1:8000/api/doctors/")
setDoctors(res.data)

}catch(error){
console.log(error)
}
}

const handleSubmit = (doctorId) => {

navigate("/appointment",{
state:{doctorId:doctorId}
})

}

return(

<div className="doctors-page">

<div className="header">
<h1>Meet Our Doctors</h1>
<p>Professional specialists ready to help you</p>
</div>

<div className="doctor-grid">

{doctors.map((doc)=>(
<div className="doctor-card" key={doc.id}>

<div className="doctor-image">
<img src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png" alt="doctor"/>
</div>

<h3>{doc.name}</h3>

<p className="special">{doc.specialization}</p>

<br/>

<button 
className="book-btn" 
onClick={()=>handleSubmit(doc.id)}
>
Book Appointment
</button>

</div>
))}

</div>

</div>

)

}

export default Doctors