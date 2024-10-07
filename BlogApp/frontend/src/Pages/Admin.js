import { useContext, useEffect, useState } from "react"
import { AuthenticationContext } from "../Context/AuthContext"
import ADMINTABLEFORAUTHOR from "../Components/AdminLayout"
import axios from "axios"

function ADMIN (){
    const {AuthData} = useContext(AuthenticationContext)
    console.log("i from Admin",AuthData)
   const [Authors,setAuthors] = useState([])
    useEffect(()=>{

        const getAuthours = async()=>{

            const response = await axios.get("http://localhost:8000/admin/author",{

                headers:{
                     "Authorization" : `Bearer ${window.localStorage.getItem("token")}`
                }
            }
              
            )

            console.log("i am all",response.data)
            
            setAuthors(response.data)
            
        }

        getAuthours()

    },[])
         
    return(
        <div>

            <ADMINTABLEFORAUTHOR Authors={Authors}></ADMINTABLEFORAUTHOR>
            <div>{AuthData.UserData.name}</div>

        </div>
    )
}

export default ADMIN