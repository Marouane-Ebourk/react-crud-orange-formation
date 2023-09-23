import axios from "axios"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Users() {

  const [users, setUsers] = useState([])

  let getUsers = () => {

    axios.get('http://localhost:3000/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(err => console.error(err))
  }
  useEffect(() => {
    getUsers();
  }, [])

  let deleteUser = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(response => {
        getUsers();
      })
      .catch(err => console.error(err))
  }



  return (
    <div>

      <div className="my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">

        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-3 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Fullname</th>
                <th className="px-3 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Email</th>
                <th className="px-3 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Phone</th>
                <th className="px-3 py-3 border-b-2 border-gray-300"></th>
                <th className="px-3 py-3 border-b-2 border-gray-300"></th>
                <th className="px-3 py-3 border-b-2 border-gray-300"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {
                users.map(user =>
                  <tr key={user.id}>

                    <td className="px-3 py-4 whitespace-no-wrap border-b border-gray-500">
                      <div className="text-sm leading-5 text-blue-900">{user.fullname}</div>
                    </td>
                    <td className="px-3 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{user.email}</td>
                    <td className="px-3 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">{user.phone}</td>

                    <td className="px-1 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                      <Link to={`/users/${user.id}`} className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
                      >Details</Link>
                    </td>
                    <td className="px-1 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                      <Link to={`/users/edit/${user.id}`} className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
                      >Edit</Link>
                    </td>
                    <td className="px-1 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                      <button className="px-5 py-2 border-red-400 border text-red-400 rounded transition duration-300 hover:bg-red-400 hover:text-white focus:outline-none"
                        onClick={() => { deleteUser(user.id) }}
                      >Delete</button>
                    </td>
                  </tr>
                )
              }


            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}
