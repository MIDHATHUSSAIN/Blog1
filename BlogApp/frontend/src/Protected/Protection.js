import { useContext } from "react"
import { AuthenticationContext } from "../Context/AuthContext"
import { Navigate, Outlet } from "react-router-dom"
import roles from "../utiles/roles"
function Protected (){

    const {AuthData} = useContext(AuthenticationContext)
  
    return(
        <div>
           {AuthData?.UserData?.role == roles.AUTHOR ? (<Outlet></Outlet>) : (<Navigate to= '/'></Navigate>) }
           {AuthData?.UserData?.role == roles.ADMIN ?(<h1>i am workin right</h1> ) : " " }
           {AuthData?.UserData?.role == roles.READER ?(<h1>i am workin right</h1> ) : " "}
        </div>
    )
}

export default Protected