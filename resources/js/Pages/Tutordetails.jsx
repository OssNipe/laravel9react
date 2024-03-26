import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faUserGraduate, faMoneyCheckDollar, faLayerGroup, faLocationDot } from '@fortawesome/free-solid-svg-icons'; // Import the DollarSign icon
import AppLayout from '@/Layouts/AppLayout';
import "../../css/ProfilePage.css";
export default function Tutordetails({ADid,tutorId }) {
    const [tutorDetails, setTutorDetails] = useState(null);

    useEffect(() => {
        fetchTutorDetails();
    }, [tutorId]); // Add tutorId to the dependency array to refetch tutor details when tutorId changes

    const fetchTutorDetails = async () => {
        try {
            const response = await axios.get(`/api/brother/${tutorId}/${ADid}`); // Fix the API endpoint URL

            setTutorDetails(response.data);
        } catch (error) {
            console.error('Error fetching tutor details:', error);
        }
    };
    if (!tutorDetails) {
        return <div>Loading...</div>; // Return loading indicator while data is being fetched
    }

    return (
       
     
           
              <div class=" bg-white  max-w-5xl  mx-auto  translate-y-[100px] mb-50 drop-shadow-2xl border-1 border-black">

<div class=" border-1  rounded-lg ">

<div class="flex sm:relative sm:p-0 top-10 left-5 p-3">
    <div class="h-40 w-40 overflow-hidden rounded-full">
        <img class="object-cover w-full h-full" src={`http://localhost:8000/storage/${tutorDetails.user.image_path}`} alt="de profil"/>
    </div>

    <div class="flex flex-col justify-center ml-3 mb-10">
        <p class="text-black text-[20px] font-poppins font-bold translate-x-[670px]">{tutorDetails.hourly_rate} MAD/Hr</p>
        <p class="text-black text-[29px]  translate-y-[-30px] translate-x-[30px] font-poppins font-bold">{tutorDetails.user.name}</p>
        <p class=" translate-y-[-28px] translate-x-[30px]"><FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#0b2fac', marginRight: '10px' }} />{tutorDetails.location}</p>
        <p class=" translate-y-[-25px] translate-x-[30px]"><FontAwesomeIcon icon={faUserGraduate} style={{ color: '#0b2fac', marginRight: '5px' }} /> {tutorDetails.lessons_taught}</p>
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

               

            

            </div>
        </div>

    </div>

</div>

</div>
           
         
         
             
      

     
            
    );
}
