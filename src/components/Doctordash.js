import { Link } from "react-router-dom"
import "../styles/doctordash.css"

import appointment from "../assets/appointment.png"
import patient from "../assets/patient.png"
import history from "../assets/history.png"

function DoctorDashboard(){

const doctorName = localStorage.getItem("doctor_name")

return(

<div className="doctor-dashboard">

<h1> {doctorName}</h1>
<p>Welcome to Doctor Control Panel</p>

<div className="doctor-cards">

<Link to="/doctor-appointment" className="doctor-card">
<img src={appointment} alt="appointments"/>
<span>View Appointments</span>
</Link>
<Link to="/doctor-patients" className="doctor-card">
<img src={patient} alt="patients"/>
<span>My Patients</span>
</Link>

<Link to="/Addmedical" className="doctor-card">
<img src={history} alt="medical history"/>
<span>Add Medical Record</span>
</Link>

</div>

</div>

)

}

export default DoctorDashboard