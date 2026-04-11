import { useEffect, useState } from "react"
import axios from "axios"
import "../../styles/adminpages.css"

function ManageDoctors(){

const [doctors,setDoctors] = useState([])

useEffect(()=>{

fetchDoctors()

},[])

const fetchDoctors = async()=>{

const res = await axios.get("http://127.0.0.1:8000/api/doctors/")

setDoctors(res.data)

}

const deleteDoctor = async(id)=>{

await axios.delete(`http://127.0.0.1:8000/api/doctors/${id}/`)

alert("Doctor Removed")

fetchDoctors()

}

return(

<div className="admin-container">

<h2>Manage Doctors</h2>

<table>

<thead>

<tr>
<th>Name</th>
<th>Email</th>
<th>Specialization</th>
<th>Action</th>
</tr>

</thead>

<tbody>

{doctors.map((doc)=>(

<tr key={doc.id}>

<td>{doc.name}</td>
<td>{doc.email}</td>
<td>{doc.specialization}</td>

<td>
<button onClick={()=>deleteDoctor(doc.id)}>
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

export default ManageDoctors