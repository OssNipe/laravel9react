import { Link, Head } from '@inertiajs/react';
import React, { useState, useEffect } from "react";

import Navbar from '@/Components/Navbar';
import Hero from '@/Components/Hero';
import Analytics from '@/components/Analytics';
import Cards from '@/components/Cards';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
export default function Welcome(props) {
    return (
        <>
              <div>
     <Navbar {...props}  />
     <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
       </div>
       


        </>
    );
}
