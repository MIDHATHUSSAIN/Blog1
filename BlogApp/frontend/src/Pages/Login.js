import { useContext, useState } from "react";
import FORM from "../Components/Form";
import axios from "axios";
import { AuthenticationContext } from "../Context/AuthContext";

function LOGIN (){
    const  {setAuthData}  =  useContext(AuthenticationContext)
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    
    const formHandeller = async(e)=>{
       e.preventDefault()
       const response =  await axios.post("http://localhost:8000/auth/login",{email,password})
       console.log(response.data.userId)
       window.localStorage.setItem("userId",response.data.userId)
       window.localStorage.setItem("token",response.data.token)
       console.log(response.data)
       setAuthData(response.data) 
       setEmail(" ")
       setPassword(" ")
       
    }

    return(
        <div >
          <FORM email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                formHandeller={formHandeller}
                label={"LogIn"}
          />
        </div>
    )
}

export default LOGIN ;