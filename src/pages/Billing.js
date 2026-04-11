import { useEffect,useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "../styles/billing.css"

function Billing(){

const [bills,setBills] = useState([])
const navigate = useNavigate()

useEffect(()=>{
fetchBills()
},[])

const fetchBills = async () => {

const res = await axios.get("http://127.0.0.1:8000/api/billing/")

setBills(res.data)

}

return(

<div className="billing-page">

<h1>Patient Bills</h1>

<div className="bill-container">

{bills.map((bill)=>(

<div className="bill-card" key={bill.id}>

<h3>Bill ID : {bill.id}</h3>

<p>Amount : ₹{bill.amount}</p>

<p>Status : {bill.payment_status}</p>

{bill.payment_status === "Pending" && (

<button
className="pay-btn"
onClick={()=>navigate(`/payment/${bill.id}`)}
>

Pay Now

</button>

)}

</div>

))}

</div>

</div>

)

}

export default Billing