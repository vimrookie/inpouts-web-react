import React from 'react';
import Navbar from './Navbar';
import '../scss/components/Layout.scss';

const Layout: React.FC = props => (
    <div className="container">
        <Navbar />
        {props.children}
    </div>
);

export default Layout;
