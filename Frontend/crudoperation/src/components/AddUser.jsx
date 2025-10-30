import React, { useState } from 'react'
import axios from 'axios' 
import { useNavigate } from 'react-router-dom'

function AddUser() {

    const [inputs,SetInputs] = useState({
        name:"",
        email:"",
        age:""
    })

    const handleChange = (e)=>{
        SetInputs({
          ...inputs,
          [e.target.name]: e.target.value,
        });
    }

    const navigate = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/createuser",  inputs )
          .then((res) => {console.log(res)
            navigate('/')
          })
          .catch((err) => console.log(err));

        

    }


  return (
    <>
      <div className="bg-gray-400 min-h-screen flex justify-center items-center">
        <div className="w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] bg-white p-5 rounded shadow-2xl ">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block" htmlFor="">
                Name
              </label>
              <input
                className="outline-none w-full py-2 border-b-1  border-transparent hover:border-gray-600  transition-all duration-300"
                type="text"
                placeholder="Enter Name"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="block" htmlFor="">
                Email
              </label>
              <input
                className="outline-none w-full py-2 border-b-1  border-transparent hover:border-gray-600  transition-all duration-300"
                type="text"
                placeholder="Enter Email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="block" htmlFor="">
                Age
              </label>
              <input
                className="outline-none w-full py-2 border-b-1  border-transparent hover:border-gray-600  transition-all duration-300"
                type="text"
                placeholder="Enter Age"
                name="age"
                value={inputs.age}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-3 py-1 rounded cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddUser


