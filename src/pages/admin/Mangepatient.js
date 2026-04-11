import { useEffect,useState } from "react"
import axios from "axios"
import "../../styles/adminpages.css"

function ManagePatients(){

const [patients,setPatients] = useState([])

useEffect(()=>{

fetchPatients()

},[])

const fetchPatients = async()=>{

const res = await axios.get("http://127.0.0.1:8000/api/patients/")

setPatients(res.data)

}

const deletePatient = async(id)=>{

await axios.delete(`http://127.0.0.1:8000/api/patients/${id}/`)

alert("Patient Removed")

fetchPatients()

}

return(

<div className="admin-container">

<h2>Manage Patients</h2>

<table>

<thead>

<tr>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{patients.map((p)=>(

<tr key={p.id}>

<td>{p.name}</td>
<td>{p.email}</td>
<td>{p.phone}</td>

<td>
<button onClick={()=>deletePatient(p.id)}>
Delete
</button>
</td>

</tr>

))}

</tbody>

</table>

</div>

)

}

export default ManagePatients