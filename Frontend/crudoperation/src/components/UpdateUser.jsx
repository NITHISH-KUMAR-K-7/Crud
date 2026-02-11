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
          const fetchuser = async ()=>{
            try{
              const res = await axios.get("http://localhost:5000/users/"+id)
              SetInputs(res.data)
            }catch(error){
              console.log(error)
            }
          }
          fetchuser();
        }, [id]);
    
        const handleChange = (e)=>{
            SetInputs({
              ...inputs,
              [e.target.name]: e.target.value,
            });
        }
    
        const handleSubmit = async(e)=>{
            e.preventDefault();

            //trim 
            const trimmedInputs = {
              name: inputs.name.trim(),
              email: inputs.email.trim(),
              age: inputs.age.trim(),
            };

            // 🔥 Validation
            if (
              !trimmedInputs.name ||
              !trimmedInputs.email ||
              !trimmedInputs.age
            ) {
              alert("All fields are required!");
              return;
            }
            try{
              await axios.put(
                "http://localhost:5000/users/" + id,
                trimmedInputs,
              );
              navigate('/')
            }catch(error){
              console.log(error)
            }
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



