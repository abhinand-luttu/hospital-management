import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientDashboard from "./components/patientdash";
import Appointment from "./pages/Appointment";
import Doctors from "./pages/doctorview";
import History from "./pages/Medical_history";
import Billing from "./pages/Billing";
import PaymentPage from "./pages/Payment";
import HealthEducation from "./pages/Health_education";
import DoctorLogin from "./pages/Doctorlogin";
import DoctorDashboard from "./components/Doctordash";
import DoctorAppointment from "./pages/DoctorAppointment";
import DoctorPatients from "./pages/doctor_patient";
import AddMedicalRecord from "./pages/AddMedicalRecord";
import AdminLogin from "./pages/Adminlogin";
import AdminDashboard from "./components/admindash";
import ManageDoctors from "./pages/admin/ManageDoctors";
import ManagePatients from "./pages/admin/Mangepatient";

function App() {
  return (
    <BrowserRouter>

      <Routes>

       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/Register" element={<Register/>}/>
       <Route path="/patientdash" element={<PatientDashboard/>}/>
       <Route path="/appointment" element={<Appointment/>}/>
       <Route path="/doctorview" element={<Doctors/>}/>
       <Route path="/medical_history" element={<History/>}/>
       <Route path="/billing" element={<Billing/>}/>
       <Route path="/payment" element={<PaymentPage/>}/>
       <Route path="/health" element={<HealthEducation/>}/>
       <Route path="doctor-login" element={<DoctorLogin/>}/>
       <Route path="/Doctordash" element={<DoctorDashboard/>}/>
       <Route path="/doctor-appointment" element={<DoctorAppointment/>}/>
       <Route path="/doctor-patients" element={<DoctorPatients/>}/>
       <Route path="/Addmedical" element={<AddMedicalRecord/>}/>
       <Route path="/admin-login" element={<AdminLogin/>}/>
       <Route path="/admindash" element={<AdminDashboard/>}/>
       <Route path="/admin-doctor" element={<ManageDoctors/>}/>
       <Route path="/admin-patient" element={<ManagePatients/>}/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;