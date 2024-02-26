import React, { useState, useEffect } from "react";
export default function TutorsList() {

    

    const [Tutors, setTutors] = useState([])
    

    useEffect(() => {
        fetchTutors();
    }, [])

    const fetchTutors = async () => {
        try {
            const response = await axios.get('api/tutor_ads');
            setTutors(response.data);
        } catch (error) {
            console.error('Error fetching tutors:', error);
        }
    };
    



   

 

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
                                                <td>{row.advert_title}</td>
                                                <td>{row.lessons_taught}</td>
                                                <td>{row.about_lessons}</td>
                                                <td>{row.about_you}</td>
                                                <td>{row.location}</td>
                                                <td>{row.location_preference}</td>
                                                <td>{row.levels}</td>
                                                <td>{row.hourly_rate}</td>
                                        
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