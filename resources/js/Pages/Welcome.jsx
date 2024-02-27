import { Link, Head } from '@inertiajs/react';
import React, { useState, useEffect } from "react";
import Header from '@/Components/Header';


export default function Welcome(props) {
    return (
        <>
              <div className="Welcom">
     <Header {...props}  />
   
       </div>
       


        </>
    );
}
