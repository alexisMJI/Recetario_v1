/*
area publica en donde los usaurios van a ver como regustrarse 
hacer login etc
*/
import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (

    <>
        <div>AuthLayout</div>
        <Outlet/>
        
    </>
  )
}

export default AuthLayout


