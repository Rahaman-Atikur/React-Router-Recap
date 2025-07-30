import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import "./Root.css"

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='root-main'>
                <aside>
                    <Sidebar></Sidebar>
                </aside>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;