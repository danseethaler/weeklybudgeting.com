import React from 'react';
import Navbar from '../Navbar/Navbar';

interface Props {
  location: Location;
}

const Layout: React.FC<Props> = ({children}) => (
  <div>
    <Navbar />
    {children}
  </div>
);

export default Layout;
