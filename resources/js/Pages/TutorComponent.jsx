import React, { useState, useEffect } from "react";
export default function TutorsList() {

    

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
        await axios.delete('sapi/tutors/' + id)
            .then(({ data }) => {
                console.log(data.message)
                fetchTutors();
            }).catch(({ response: { data } }) => {
                console.log(data.message)
            })
    }

   

 

    return (
        <div className="container">
            <div className="row">
                <div className="conl-12">
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
    )




}