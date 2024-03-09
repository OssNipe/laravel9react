// ProfileDetail.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

function ProfileDetail(props) {
    const [brother, setBrother] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBrother = async () => {
            try {
                const response = await axios.get(`api/brother/${props.match.params.id}`);
                setBrother(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchBrother();
    }, [props.match.params.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!brother) {
        return <div>Brother not found</div>;
    }

    return (
        <div>
            <h1>Brother Detail</h1>
            <h2>Name: {brother.user.name}</h2>
            <p>Advert Title: {brother.advert_title}</p>
            <p>Lessons Taught: {brother.lessons_taught}</p>
            <p>About Lessons: {brother.about_lessons}</p>
            <p>About You: {brother.about_you}</p>
            <p>Location: {brother.location}</p>
            <p>Location Preference: {brother.location_preference}</p>
            <p>Levels: {brother.levels}</p>
            <p>Hourly Rate: {brother.hourly_rate}</p>
            {/* Add more fields as needed */}
        </div>
    );
}

export default ProfileDetail;
