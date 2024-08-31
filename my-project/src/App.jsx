import { BrowserRouter,Routes,Route } from "react-router-dom"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Dashboard from "./components/Dashboard"
import Header from "./components/Header"
import Fare from './components/Fare'
import DriverCard from "./Drivercard"
import Admin from "./components/Admin"
import BookDriver from "./Pages/BookDriver"
export default function App() {
  return (
   <>

   <BrowserRouter>
   <Header></Header>

   


   <Routes>
    <Route path="/login" element={<Login/>}>

    </Route>
    <Route path="/register" element={<Signup/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/driverdetails" element={<DriverCard/>}/>
    <Route path="/faredetails" element={<Fare/>}/>
    <Route path="/adddriver" element={<Admin/>}/>
    <Route path="/bookdriver" element={<BookDriver/>}/>


 
   </Routes>
   </BrowserRouter>
   </>
  )
}