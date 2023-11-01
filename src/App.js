// // get method
// // import React,{useEffect,useState} from 'react'
// // import axios from "axios";

// // const App = () => {
// //   const[userData,setData]=useState([])
// //   useEffect(()=>{
// //     axios.get("https://jsonplaceholder.typicode.com/users")
// //     .then((response)=>{
// //       console.log(response)
// //       setData(response.data)
// //     })
// //   },[])
// //   return (
// //     <div>App
// //     {userData.map((data)=>{
// //       return(
// //         <div>{data.name}</div>
// //       )
// //     })}
// //     </div>
// //   )
// // }

// // export default App



// // Post method & put & delete

// // import React,{useEffect,useState} from 'react'
// // import axios from "axios";

// // const App = () => {
// //   const data={fname: "", lastName: ""}
// //   const[inputData,setInputdata]=useState(data)

// //   const handleData =(e)=>{
// //     setInputdata({...inputData, [e.target.name]:e.target.value})
// //   }
// //   const handleSubmit=(e)=>{
// //     e.preventDefault();
// //     axios.post("https://jsonplaceholder.typicode.com/users", inputData)
// //     .then((response)=>{
// //       console.log(response)
// //     })
// //   }

// //   const handleUpdate=(e)=>{
// //     e.preventDefault();
// //     axios.put("https://jsonplaceholder.typicode.com/users/1", inputData)
// //     .then((response)=>{
// //       console.log(response)
// //     })
// //   }
  
// //   return (
// //     <>
// //     <label>First Name:</label>
// //     <input type='text' name='fname' value={inputData.fname} onChange={handleData}></input> <br/>
// //     <label>last Name: </label>
// //     <input type='text' name='lastName' value={inputData.lastName} onChange={handleData}></input>

// //     <button onClick={handleSubmit}>Submit</button>
// //     <button onClick={handleUpdate}>Update</button>
// //     </>
// //   )
// // }

// // export default App


// import React,{useEffect,useState} from 'react'
// import axios from 'axios'
// const App = () => {

//   const data={fname:"" ,lastName:""}
//   const[userData,setUser]=useState(data)

//   const handleData=(e)=>{
//     setUser({...userData, [e.target.name]:e.target.value})
//   }
//   const handleSubmit=(e)=>{
//     e.preventDefault()
//     axios.post("https://jsonplaceholder.typicode.com/users", userData)
//     .then((response)=>{
//       console.log(response)

//     })
//   }
//   const handleUpdate=(e)=>{
//     e.preventDefault()
//     axios.put("https://jsonplaceholder.typicode.com/users/1", userData)
//     .then((response)=>{
//       console.log(response)

//     })
//   }
//   const handleDelete=(e)=>{
//     e.preventDefault()
//     axios.delete("https://jsonplaceholder.typicode.com/users/1")
//     .then((response)=>{
//       console.log(response)

//     })
//   }
//   return (
//     <>
//     <label>FirstName</label>
//     <input type='text' name='fname' value={userData.fname} onChange={handleData}></input><br/>
//     <label>LastName</label>
//     <input type='text' name='lastName' value={userData.lastName} onChange={handleData}></input>
//     <button onClick={handleSubmit}>Submit</button>
//     <button onClick={handleUpdate}>Update</button>
//     <button onClick={handleDelete}>Delete</button>
    
    
//     </>
//   )
// }

// export default App




// Weather App

// import "bootstrap/dist/css/bootstrap.min.css"
// import axios from "axios";
// import React,{useEffect,useState}  from 'react'
// import './App.css'
// const App = () => {
//   const apiKey = "f56f24967aaf51182d1d4df628297c6d"
//   const [inputCity, setInputCity] = useState("")
//   const [data, setData] = useState({})


//   const getWetherDetails = (cityName) => {
//     if (!cityName) return
//     const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
//     axios.get(apiURL).then((res) => {
//       console.log("response", res.data)
//       setData(res.data)
//     }).catch((err) => {
//       console.log("err", err)
//     })
//   }

//   const handleChangeInput = (e) => {
//     console.log("value", e.target.value)
//     setInputCity(e.target.value)
//   }

//   const handleSearch = () => {
//     getWetherDetails(inputCity)
//   }

//   return (
//     <div className="col-md-12">
//     <div className="wetherBg">
//       <h1 className="heading">Weather App</h1>

//       <div className="d-grid gap-3 col-4 mt-4">
//         <input type="text" className="form-control"
//           value={inputCity}
//           onChange={handleChangeInput} />
//         <button className="btn btn-primary" type="button"
//           onClick={handleSearch}
//         >Search</button>
//       </div>
//     </div>

//     {Object.keys(data).length > 0 &&
//       <div className="col-md-12 text-center mt-5">

//         <div className="shadow rounded wetherResultBox">
//           <img className="weathorIcon"
//             src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />

//           <h5 className="weathorCity">
//             {data?.name}
//           </h5>
//           <h6 className="weathorTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
//         </div>
//       </div>
//     }

//   </div>
   
//   )
// }


import React from 'react'
import Navbar from './components/Navbar'
import "./App.css"
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default App
