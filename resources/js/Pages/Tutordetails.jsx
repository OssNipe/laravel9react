import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUserGraduate, faMoneyCheckDollar, faLayerGroup, faLocationDot } from '@fortawesome/free-solid-svg-icons'; // Import the DollarSign icon
import AppLayout from '@/Layouts/AppLayout';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import NavbarTwo from '../Components/NavbarTwo'
import  Footer from '../Components/Footer'


import "../../css/ProfilePage.css";
export default function Tutordetails({ADid,tutorId }) {
    const [tutorDetails, setTutorDetails] = useState(null);
    const [tutorAvailability, setTutorAvailability] = useState([]);
    const [showContactModal, setShowContactModal] = useState(false);

    const [userId, setUserId] = useState(null);

    useEffect(() => {
        fetch('/api/user')
            .then(response => response.json())
            .then(data => {
                const userIdFromApi = data.id;
                setUserId(userIdFromApi);
            })
            .catch(error => {
                console.error('Error fetching user ID:', error);
            });
    }, []);
    
    useEffect(() => {
        fetchTutorDetails();
        fetchTutorAvailability();

    }, [tutorId]); // Add tutorId to the dependency array to refetch tutor details when tutorId changes

    const fetchTutorDetails = async () => {
        try {
            const response = await axios.get(`/api/brother/${tutorId}/${ADid}`); // Fix the API endpoint URL

            setTutorDetails(response.data);
        } catch (error) {
            console.error('Error fetching tutor details:', error);
        }
    };
    const handleContactClick = () => {
        setShowContactModal(true);
    };
    const handleCloseModal = () => {
        setShowContactModal(false);
    };
        
    const fetchTutorAvailability = async () => {
        try {
            const response = await axios.get(`/api/tutoravailability/${tutorId}`);
            setTutorAvailability(response.data.availabilities);
        } catch (error) {
            console.error('Error fetching tutor availability:', error);
        }
    };
    if (!tutorDetails) {
        return <div>Loading...</div>; // Return loading indicator while data is being fetched
    }
    const timeSlots = ['8-10', '10-12',  '2-4', '4-6'];

    // Generate table rows for each day
    const tableRows = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
        <tr key={day}>
            <td className="border px-4 py-2">{day}</td>
            {timeSlots.map(slot => {
                const isAvailable = tutorAvailability.some(availability => availability.day === day && availability.time_slot === slot);
                return (
                    <td key={slot} className={`border px-4 py-2 text-center ${isAvailable ? '' : 'bg-gray-100'}`}>
                    {isAvailable ? <FontAwesomeIcon icon={faCheck} className="text-green-500 mx-auto" /> : null}
                </td>
                );
            })}
        </tr>
    ));
    const whatsAppLink = `https://api.whatsapp.com/send?phone=${tutorDetails.PhoneNumber}`;

    return (
        <>
              <div>
        <NavbarTwo/>
           <div className='mt-[-50px]'>
           {showContactModal && (
           <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
           {/* Close Button */}
           
       
           {/* Modal Content */}
           <div className="bg-white p-6 rounded-lg">
           <div>
               <button onClick={handleCloseModal} className="text-gray-600 hover:text-gray-900">
                   <FontAwesomeIcon icon={faTimes} className="text-lg" />
               </button>
           </div>
           <p className="text-red-500">Attention: Do not send money to strangers!  </p>
               <div className='flex flex-col items-center justify-center p-6'>
                   <button onClick={handleCloseModal} className="border border-blue-500 bg-white text-black px-4 py-2 mb-4">
                       <FontAwesomeIcon icon={faPhone} className="mr-2" /> {tutorDetails.PhoneNumber}
                   </button>
               </div>
               
           </div>
       </div>
       
)}

              <div class=" bg-white  max-w-5xl  mx-auto  translate-y-[100px] mb-50 drop-shadow-2xl border-1 border-black">

<div class=" border-1  rounded-lg ">

<div class="flex sm:relative sm:p-0 top-10 left-5 p-3">
    <div class="h-40 w-40 overflow-hidden rounded-full">
        <img class="object-cover w-full h-full" src={`http://localhost:8000/storage/${tutorDetails.user.image_path}`} alt="de profil"/>
    </div>

    <div class="flex flex-col justify-center ml-3 mb-10">
    <p class="text-black text-[20px] font-poppins font-bold translate-x-[670px]">{tutorDetails.hourly_rate} MAD/Hr</p>

    <p class="text-black text-[29px]  translate-y-[-30px] translate-x-[30px] font-poppins font-bold">{tutorDetails.user.name}</p>
    <p class="translate-y-[-28px] translate-x-[30px]"><FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#0b2fac', marginRight: '10px' }} />{tutorDetails.location}</p>
    <p class="translate-y-[-25px] translate-x-[30px]"><FontAwesomeIcon icon={faUserGraduate} style={{ color: '#0b2fac', marginRight: '5px' }} /> {tutorDetails.lessons_taught}</p>

    {/* Contact Button */}
    <button onClick={handleContactClick} class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
    <FontAwesomeIcon icon={faPhone} className="mr-2" />
        Contact Tutor
    </button>
</div>
</div>

    <div class="p-5 mt-20 border-t">

        <div class="flex flex-col sm:flex-row sm:mt-10 translate-x-[5px] translate-y-[-50px] ">

            <div class="flex flex-col sm:w-1/3">
               

                    <div class="py-3 sm:order-none order-2">
                
                    <h2 class="text-lg font-poppins font-bold text-top-color"><FontAwesomeIcon icon={faLocationDot } style={{ color: '#0b2fac' }} /> Location preferences</h2>
                    <div class="border-2 w-20 border-top-color my-3"></div>

                    <div>
                       
                        <div class="flex items-center my-1">
                       

                            <div class="ml-2">{tutorDetails.location_preference}</div>
                            <div class="ml-2">{tutorDetails.PhoneNumber}</div>
                            
                        </div>

                    </div>
                </div>
                <div class="py-3 sm:order-none order-2">
                
                    <h2 class="text-lg font-poppins font-bold text-top-color"><FontAwesomeIcon icon={faMoneyCheckDollar} style={{ color: '#0b2fac',marginRight:'5' }} /> Price</h2>
                    <div class="border-2 w-20 border-top-color my-3"></div>

                    <div>
                        <div class="flex items-center my-1">
                           
                            <div class="ml-2">{tutorDetails.hourly_rate} MAD/hr</div>
                            
                        </div>
                        <div class="flex items-center my-1">
                           
                            <div class="ml-2">First Class is for free</div>
                            
                        </div>

                    </div>
                    
                </div>
                <div class="py-3 sm:order-none order-2">
                
                    <h2 class="text-lg font-poppins font-bold text-top-color"><FontAwesomeIcon icon={faMoneyCheckDollar} style={{ color: '#0b2fac',marginRight:'5' }} /> levels</h2>
                    <div class="border-2 w-20 border-top-color my-3"></div>

                    <div>
                        <div class="flex items-center my-1">
                           
                            <div class="ml-2">{tutorDetails.levels} </div>
                            
                        </div>
                        

                    </div>
                    
                </div>
                

            </div>

            
            <div class="flex flex-col sm:w-2/3  bord order-first sm:order-none sm:-mt-1 mr-20 translate-x-[60px]">

            <div class="py-3">
                
                    <h1 class="text-4xl font-poppins font-bold text-top-color">{tutorDetails.advert_title}</h1>
                    
                    
                </div>
                <div class="py-3">
                    <h2 class="text-3xl font-poppins font-bold text-black">About Me</h2>
                    <div class=" w-20  my-3"></div>
                    <p> {tutorDetails.about_you}</p>
                </div>

              
                <div class="py-3">
                    <h2 class=" text-3xl  font-poppins font-bold ">About the lessons</h2>
                    <div class=" w-20  my-3"></div>

                    
                        {tutorDetails.about_lessons}
                     

                </div>
                <h2 class=" text-3xl  font-poppins font-bold ">Schedule:</h2>

                <table className="table-auto border-collapse w-full mt-7">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Day</th>
                        {timeSlots.map(slot => (
                            <th key={slot} className="border px-4 py-2">{slot}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>

            

            </div>
        </div>

    </div>

</div>




</div>
           
         
         
</div>      
</div>
      <Footer />

</>
     
            
    );
}
