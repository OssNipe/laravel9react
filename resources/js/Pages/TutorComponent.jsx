import React, { useState, useEffect } from "react";
import axios from "axios";
import AppLayout from "@/Layouts/AppLayout";

export default function TutorsList(props) {
    const [tutors, setTutors] = useState([]);

    useEffect(() => {
        fetchTutors();
    }, []);

    const fetchTutors = async () => {
        try {
            const response = await axios.get("api/brother");
            setTutors(response.data);
        } catch (error) {
            console.error("Error fetching tutors:", error);
        }
    };

    return (
        <AppLayout {...props}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Tutors List</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">User Name</th>
                                    <th scope="col">Advert Title</th>
                                    <th scope="col">Lessons Taught</th>
                                    <th scope="col">About Lessons</th>
                                    <th scope="col">About You</th>
                                    <th scope="col">Location</th>
                                    <th scope="col">Location Preference</th>
                                    <th scope="col">Levels</th>
                                    <th scope="col">Hourly Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tutors.map((tutor, index) => (
                                    <tr key={index}>
                                        <td>{tutor.user.name}</td>
                                        <td>{tutor.advert_title}</td>
                                        <td>{tutor.lessons_taught}</td>
                                        <td>{tutor.about_lessons}</td>
                                        <td>{tutor.about_you}</td>
                                        <td>{tutor.location}</td>
                                        <td>{tutor.location_preference}</td>
                                        <td>{tutor.levels}</td>
                                        <td>{tutor.hourly_rate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
