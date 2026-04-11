import { useState, useEffect } from "react"
import axios from "axios"
import "../styles/appointment.css"
import { useLocation } from "react-router-dom"

function Appointment(){

const location = useLocation()

const [doctors,setDoctors] = useState([])
const [doctor,setDoctor] = useState(location.state?.doctorId || "")
const [date,setDate] = useState("")
const [time,setTime] = useState("")
const [reason,setReason] = useState("")

const patientId = localStorage.getItem("patient_id")

useEffect(()=>{

const fetchDoctors = async () => {

try{

const res = await axios.get("http://127.0.0.1:8000/api/doctors/")
setDoctors(res.data)

}catch(error){

console.error("Error fetching doctors:",error)

}

}

fetchDoctors()

},[])

const handleSubmit = async(e)=>{

e.preventDefault()

try{

await axios.post("http://127.0.0.1:8000/api/appointments/",{

patient:patientId,
doctor:doctor,
date:date,
time:time,
reason:reason

})

alert("✅ Appointment Booked Successfully")

setDoctor("")
setDate("")
setTime("")
setReason("")

}catch(error){

// show backend message (like slots full)
if(error.response && error.response.data.message){
alert(error.response.data.message)
}else{
alert("❌ Failed to book appointment")
}

}

}

return(

<div className="appointment-page">

<div className="appointment-card">

<h2>Book Appointment</h2>

<form onSubmit={handleSubmit}>

<select
value={doctor}
onChange={(e)=>setDoctor(e.target.value)}
required
>

<option value="">Select Doctor</option>

{doctors.map((doc)=>(

<option key={doc.id} value={doc.id}>
{doc.name} - {doc.specialization}
</option>

))}

</select>

<input
type="date"
value={date}
onChange={(e)=>setDate(e.target.value)}
required
/>

<input
type="time"
value={time}
onChange={(e)=>setTime(e.target.value)}
required
/>

<textarea
placeholder="Describe your problem"
value={reason}
onChange={(e)=>setReason(e.target.value)}
/>

<button type="submit">
Book Appointment
</button>

</form>

</div>

</div>

)

}

export default Appointment