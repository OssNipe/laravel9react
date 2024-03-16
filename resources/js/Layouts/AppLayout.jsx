import React from 'react';
import Navbar from '../Components/Navbar';

const AppLayout = ({ children , ...props}) => {
  
  return (
    <div>
      <Navbar {...props}  />
      <main>{children}</main>
    </div>
  );
};

export default AppLayout;