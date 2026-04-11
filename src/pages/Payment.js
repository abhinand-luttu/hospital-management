import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import "../styles/payment.css"

function PaymentPage(){

const navigate = useNavigate()
const [amount,setAmount] = useState("")

const loadRazorpay = async () => {

try{

const res = await axios.post("http://127.0.0.1:8000/api/create-payment-order/")

const {order_id,amount,key} = res.data

setAmount(amount/100)   // convert paise → rupees

const options = {

key: key,
amount: amount,
currency: "INR",
name: "Hospital Payment",
description: "Consultation Fee",
order_id: order_id,

handler: async function(response){

await axios.post("http://127.0.0.1:8000/payment-success/",{
payment_id: response.razorpay_payment_id
})

alert("Payment Successful")
navigate("/patientdash")

},

prefill:{
name:"Patient",
email:"patient@gmail.com"
},

theme:{
color:"#2c7be5"
}

}

const rzp = new window.Razorpay(options)
rzp.open()

}catch(error){

console.log(error)
alert("Payment failed")

}

}

return(

<div className="payment-container">

<div className="payment-card">

<h1>🏥 Hospital Payment</h1>

<p className="desc">Secure consultation payment</p>

<div className="amount-box">

<p>Total Amount</p>
<h2>₹{amount}</h2>

</div>

<button onClick={loadRazorpay}>
Pay Securely
</button>

<p className="secure">🔒 100% Secure Payment via Razorpay</p>

</div>

</div>

)

}

export default PaymentPage