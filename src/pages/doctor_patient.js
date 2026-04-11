import { useState, useEffect } from "react"
import axios from "axios"
import "../styles/doctorpatients.css"

function DoctorPatients(){

const [patients,setPatients] = useState([])

const doctorId = localStorage.getItem("doctor_id")

useEffect(()=>{

const fetchPatients = async () => {

try{

const res = await axios.get(
`http://127.0.0.1:8000/api/doctor-patients/${doctorId}/`
)

setPatients(res.data)

}catch(error){

console.log(error)

}

}

fetchPatients()

},[])

return(

<div className="patients-page">

<h2>My Patients</h2>

<div className="patient-list">

{patients.map((p)=>(

<div className="patient-card" key={p.id}>

<h3>Patient ID : {p.patient}</h3>

<p><span>Date :</span> {p.date}</p>

<p><span>Time :</span> {p.time}</p>

<p><span>Problem :</span> {p.reason}</p>

<p><span>Status :</span> {p.status}</p>

<button className="view-btn">
View History
</button>

</div>

))}

</div>

</div>

)

}

export default DoctorPatients