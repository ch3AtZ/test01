import React, { Component } from 'react';
import {BrowserRouter , Route , NavLink} from 'react-router-dom';


const appDashboard = () =>{
    <div>
        This is the dashboard
    </div>
}

const routes = (
    <BrowserRouter>
    <Route path = '/'  component = {appDashboard}/>
    </BrowserRouter>
);


export default routes;  