import { useState,useEffect } from "react"
import axios from "axios"
import "../styles/medicalhis.css";

function History(){

const [history,setHistory] = useState([])

const patientId = localStorage.getItem("patient_id")

useEffect(()=>{
fetchHistory()
},[])

const fetchHistory = async () =>{
try{

const res = await axios.get(`http://127.0.0.1:8000/api/medical-history/${patientId}/`)
setHistory(res.data)

}catch(error){
console.log(error)
}
}

return(

<div className="history-page">

<div className="history-header">
<h1>Medical History</h1>
<p>Your consultation records</p>
</div>

<div className="history-container">

{history.length === 0 ? (
<p className="no-history">No medical history found</p>
) : (

history.map((item)=>(

<div className="history-card" key={item.id}>

<div className="history-top">
<span className="doctor">{item.doctor_name}</span>
<span className="date">{item.date}</span>
</div>

<div className="history-body">

<p>
<strong>Diagnosis:</strong> {item.diagnosis}
</p>

<p>
<strong>Prescription:</strong> {item.prescription}
</p>

</div>

</div>

))

)}

</div>

</div>

)

}

export default History