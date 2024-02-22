import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React, { useState, useEffect } from "react";

export default function Dashboard(props) {
    const [Tutors, setTutors] = useState([])
    

    useEffect(() => {
        fetchTutors();
    }, [])

    const fetchTutors = async () => {
        try {
            const response = await axios.get('api/tutors');
            setTutors(response.data);
        } catch (error) {
            console.error('Error fetching tutors:', error);
        }
    };
    

    const deleteTutors = async (id) => {
        await axios.delete('api/tutors/' + id)
            .then(({ data }) => {
                console.log(data.message)
                fetchTutors();
            }).catch(({ response: { data } }) => {
                console.log(data.message)
            })
    }
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="col-12">
                       

                       <table className="table">
                           <thead>
                               <tr> 
                                   <th scope="col">nom et prenom</th>
                                   <th scope="col">Description</th>
                                   <th scope="col">Image</th>
                                   <th scope="col">Delete</th>
                               </tr>
                           </thead>
                           <tbody>
                               {
                                   Tutors.length > 0 && (
                                       Tutors.map((row,key)=>(
                                           <tr key={key}> 
                                               <td>{row.nometprenom}</td>
                                               <td>{row.description}</td>
                                               
                                               
                                             
                                           </tr> 
                                       ))
                                   )
                               }
                              
                           </tbody>
                       </table>



                   </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
