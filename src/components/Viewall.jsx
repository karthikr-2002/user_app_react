import React, { useEffect, useState } from 'react'
import Navuser from './Navuser'
import axios from 'axios'


const Viewall = () => {
    const [userData, changeUserData] = useState(
        []  
    )
    const fetchData =()=>{
        axios.get("https://jsonplaceholder.typicode.com/users").then(
            (response)=>
            {
                changeUserData(response.data)
            }
        ).catch()
    }
    useEffect(()=>{fetchData()},[])

    return (
        <div>
            <Navuser />
                           <h1 className='header'><center>View All User</center></h1>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table table-striped  ">

                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">UserName</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Adress</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Website</th>
                                    <th scope="col">Company</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userData.map(
                                    (value, index) => {
                                        return (
                                            <tr>
                                                <td>{value.id}</td>
                                                <td>{value.name}</td>
                                                <td>{value.username}</td>
                                                <td>{value.email}</td>
                                                <td> {value.address.street}, {value.address.suite},<br />
                                                    {value.address.city}, {value.address.zipcode}</td>
                                                <td>{value.phone}</td>
                                                <td>{value.website}</td>
                                                <td>{value.company.name}<br/>{value.company.catchPhrase}<br/>{value.company.bs}</td>
                                            </tr>
                                            
                                        )
                                    }
                                )}
                            </tbody>

                        </table>



                    </div>
                </div>
            </div>


        </div>
    )
}

export default Viewall