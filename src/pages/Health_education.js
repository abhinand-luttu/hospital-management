import { useState,useEffect } from "react"
import axios from "axios"
import "../styles/helth.css"

function HealthEducation(){

const [articles,setArticles] = useState([])

useEffect(()=>{
fetchArticles()
},[])

const fetchArticles = async ()=>{

try{

const res = await axios.get("http://127.0.0.1:8000/api/health-education/")
setArticles(res.data)

}catch(error){
console.log(error)
}

}

return(

<div className="health-container">

<h1 className="health-title">Health Education</h1>

<div className="health-grid">

{articles.map((item)=>(
<div className="health-card" key={item.id}>

<h2>{item.title}</h2>

<p>{item.description}</p>

<button className="read-btn">
Read More
</button>

</div>
))}

</div>

</div>

)

}

export default HealthEducation