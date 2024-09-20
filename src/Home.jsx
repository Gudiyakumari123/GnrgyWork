import React, { useEffect, useState } from 'react'
import './App.css'

export default function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);

    console.log(data)
    const [singalData, setSignalData] = useState([]);


    const getSingalData = (data) => {
        // console.log(data);
        setSignalData(data);

    }

    return (
        <>

            <div className='home' >

                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                        </tr>

                    </thead>

                    <tbody>
                        {
                            data?.map((data) => {
                                return (
                                    <>

                                        <tr key={data.id} onClick={() => { getSingalData(data) }} >
                                            <td>{data.name}</td>
                                            <td>{data.username}</td>
                                            <td>{data.email}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>


                </table>


                <div>

                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>UserName</th>
                                <th>Email</th>
                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>{singalData?.name}</td>
                                <td>{singalData?.username}</td>
                                <td>{singalData?.email}</td>
                            </tr>

                        </tbody>


                    </table>

                </div>


            </div>
        </>

    )
}
