import { useEffect, useState } from "react"
import axios from "axios"
import "../styles/doctorappointments.css"

function DoctorAppointment(){

const [appointments,setAppointments] = useState([])

const doctorId = localStorage.getItem("doctor_id")

useEffect(()=>{
fetchAppointments()
},[])

const fetchAppointments = async () => {

try{

const res = await axios.get(
`http://127.0.0.1:8000/api/doctor-appointments/${doctorId}/`
)

console.log(res.data)   // DEBUG

setAppointments(res.data)

}catch(error){

console.log(error)

}

}

return(

<div className="appointment-page">

<h1>My Appointments</h1>

{appointments.length === 0 ? (

<p>No appointments found</p>

):( 

<div className="appointment-grid">

{appointments.map((app)=>(

<div className="appointment-card" key={app.id}>

<h3>Patient ID : {app.patient}</h3>

<p>Date : {app.date}</p>

<p>Time : {app.time}</p>

<p>Status : {app.status}</p>

</div>

))}

</div>

)}

</div>

)

}

export default DoctorAppointment;