import { useState, useEffect } from "react"
import axios from "axios"
import "../styles/addmedical.css"

function AddMedicalRecord(){

const [patients,setPatients] = useState([])
const [patient,setPatient] = useState("")
const [diagnosis,setDiagnosis] = useState("")
const [prescription,setPrescription] = useState("")


const doctorId = localStorage.getItem("doctor_id")

useEffect(()=>{

const fetchPatients = async () => {

try{

const res = await axios.get("http://127.0.0.1:8000/api/patients/")

setPatients(res.data)

}catch(error){

console.log(error)

}

}

fetchPatients()

},[])

const handleSubmit = async(e)=>{

e.preventDefault()

try{

await axios.post("http://127.0.0.1:8000/api/medical-history/",{

patient:patient,
doctor:doctorId,
diagnosis:diagnosis,
prescription:prescription

})

alert("Medical Record Added")

setPatient("")
setDiagnosis("")
setPrescription("")


}catch(error){

console.log(error)

alert("Error saving record")

}

}

return(

<div className="medical-page">

<div className="medical-card">

<h2>Add Medical Record</h2>

<form onSubmit={handleSubmit}>

<select
value={patient}
onChange={(e)=>setPatient(e.target.value)}
required
>

<option value="">Select Patient</option>

{patients.map((p)=>(

<option key={p.id} value={p.id}>
{p.name}
</option>

))}

</select>

<input
type="text"
placeholder="Diagnosis"
value={diagnosis}
onChange={(e)=>setDiagnosis(e.target.value)}
required
/>

<textarea
placeholder="Prescription"
value={prescription}
onChange={(e)=>setPrescription(e.target.value)}
required
/>



<button type="submit">
Save Medical Record
</button>

</form>

</div>

</div>

)

}

export default AddMedicalRecord