import { Link } from "react-router-dom"
import "../styles/dashboard.css"
import appointmentImg from "../assets/appointment.png"
import doctor from "../assets/doctor.png"
import history from "../assets/history.png"
import billing from "../assets/billing.png"
import education from "../assets/education.png"

function PatientDashboard(){
    const patientName = localStorage.getItem("patient_name")

return(

<div className="dashboard">

<h1> {patientName}</h1>
<p>Welcome to Smart Hospital System</p>

<div className="cards">

<Link to="/appointment" className="card">
<img src={appointmentImg} alt="appointment"/>
Book Appointment
</Link>

<Link to="/doctorview" className="card">
<img src={doctor} alt="doctor"/>
View Doctors
</Link>

<Link to="/medical_history" className="card">
<img src={history} alt="history"/>
Medical History
</Link>

<Link to="/payment" className="card">
<img src={billing} alt="billing"/>
Billing
</Link>

<Link to="/health" className="card">
<img src={education} alt="education"/>
Health Education
</Link>

</div>

</div>

)

}

export default PatientDashboard