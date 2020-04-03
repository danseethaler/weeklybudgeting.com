import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout: React.FC = ({children}) => (
  <div>
    <Navbar />
    {children}
  </div>
);

export default Layout;
