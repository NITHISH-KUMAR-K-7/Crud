import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from'axios'


function Home() {

    const [users, SetUsers] = useState([]);

    useEffect(()=>{
      const fetchusers = async()=>{
        try{
          const res = await axios.get(`http://localhost:5000/users`)
          SetUsers(res.data)

        }catch(error){
          console.log(error)
        }
      }
  
          fetchusers();
    },[])

    const handleDelete = async (id)=>{
     const res = await axios.delete(`http://localhost:5000/users/${id}`)
     SetUsers(users.filter(user => user._id !== id))

    }

  return (
    <>
      <div className="bg-gray-400 min-h-screen flex justify-center items-center">
        <div className=" w-[90%] md:[w-60%] lg:w-[80%] h-auto bg-white p-5 rounded ">
          <div className="mb-5">
            <Link
              to="/adduser"
              className="bg-green-500 text-white px-5  py-2 rounded cursor-pointer hover:bg-green-700"
            >
              Add +
            </Link>
          </div>
          <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="border p-3">NAME</th>
                <th className="border p-3">EMAIL</th>
                <th className="border p-3">AGE</th>
                <th className="border p-3">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border p-3">{user.name}</td>
                    <td className="border p-3">{user.email}</td>
                    <td className="border p-3">{user.age}</td>
                    <td className="border p-3">
                      <Link
                        to={`/updateuser/${user._id}`}
                        className="bg-yellow-400 text-white px-2 py-1 rounded mr-2 cursor-pointer hover:bg-yellow-500"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={(e) => {
                          handleDelete(user._id);
                        }}
                        className="bg-red-500 text-white px-2 py-1 rounded cursor-pointer hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home

