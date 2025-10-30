import React,{useState,useEffect} from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios'

function UpdateUser() {

  const {id} = useParams()
  const navigate = useNavigate()

     const [inputs,SetInputs] = useState({
            name:"",
            email:"",
            age:""
        })

        useEffect(() => {
          axios
            .get("http://localhost:5000/getuser/"+id)
            .then((res) => {SetInputs(res.data)})
            .catch((err) => console.log(err));
        }, []);
    
        const handleChange = (e)=>{
            SetInputs({
              ...inputs,
              [e.target.name]: e.target.value,
            });
        }
    
        const handleSubmit = (e)=>{
            e.preventDefault();
            axios
              .put("http://localhost:5000/updateuser/"+id, inputs)
              .then((res) => {
                console.log(res);
                navigate("/");
              })
              .catch((err) => console.log(err));
            
    
        }
    
  return (
    <>
      <div className="bg-gray-400 h-screen flex justify-center items-center">
        <div className="w-[80%] sm:w-[60%] md:w-[40%] lg:w-[30%] bg-white p-5 rounded shadow-2xl">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block" htmlFor="">
                Name
              </label>
              <input
                className="outline-none w-full py-2 border-b-1  border-transparent hover:border-gray-600  transition-all duration-300 "
                type="text"
                placeholder="Enter Name"
                name="name"
                value={inputs.name}
                onChange={handleChange}
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
              />
            </div>

            <button
              type="submit"
              className="bg-green-600 text-white px-3 py-1 rounded cursor-pointer"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateUser



