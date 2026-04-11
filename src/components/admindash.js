import { Link } from "react-router-dom"
import "../styles/admin.css"

function AdminDashboard(){

return(

<div className="admin-page">

<h1>Admin Dashboard</h1>

<div className="admin-grid">

<Link to="/admin-doctor" className="admin-card">
Manage Doctors
</Link>

<Link to="/admin-patient" className="admin-card">
Manage Patients
</Link>


</div>

</div>

)

}

export default AdminDashboard