import { useState } from "react";
import axios from 'axios'

function BlogFORM() {
     const [title,setTitle] = useState("")
     const [description,setDesscription] = useState("")
     const [file,setFile] = useState("")  

     const blogHandeler = async(e)=>{

       e.preventDefault()
        
       const formData = new FormData()
       formData.append('title',title)
       formData.append('description',description)
       formData.append('file',file)
       
       await axios.post('http://localhost:8000/author/blog',formData,{
        headers:{
          "Content-Type" : "multipart/form-data",
           "Authorization" : `Bearer ${window.localStorage.getItem("token")}`
        }
       })
       setDesscription(" ")
       setFile(" ")
       setTitle(" ")
     }
  return (
    <div className=" flex justify-center items-center ">
      <div className="sm:w-[30rem] sm:h-[30rem] w-[25rem] h-[27rem]  border-2 ii rounded-3xl sm:mt-[5rem] mt-[3rem] ">
        <form onSubmit={blogHandeler}  className="md:w-[20rem] h-[10rem] sm:mx-16 md:ml-[5rem] sm:mt-14 text-center mx-8 mt-6" >
          <h1 className="text-center text-4xl grow font-bold ">Create Blog</h1><br/><br/>
          <label className="input  input-bordered flex items-center gap-2 ii ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              required
              className="grow"
              placeholder="Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </label>
          <br/>
          <label className="input input-bordered flex items-center gap-2 ii">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              required
              className="grow"
              placeholder="Description"
              value={description}
              onChange={(e) => {
                setDesscription(e.target.value);
              }}
            />
          </label><br/>

          <label className="input input-bordered flex items-center gap-2 ii">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="file"
              required
              className="grow"
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
          </label>
          <br/>
          <button type="submit" className="btn text-white md:w-[20rem] w-[21rem] ">Save</button>
          <br/>
        </form>
      </div>
    </div>
  );
}

export default BlogFORM;
