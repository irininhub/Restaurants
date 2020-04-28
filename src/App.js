import React from 'react';
import s from './App.module.css';
import Restaurants from "./RestaurantsLIST/Restaurants";
import {Link, Route} from "react-router-dom";
import Auth from "./Auth/Auth";
import Restaurant from "./Restaurant/Restaurant";


const App = () => {

    return (
        <div className={s.App}>
            <div className={s.app_header}>
                <div className={s.links}>
                <Link className={s.link} to="auth-page">Login</Link>
                <Link className={s.link} to="restaurants-list">restaurants list</Link>
                </div>
                <h1>Restaurants</h1>

            </div>

            <Route path='/restaurants-list' component={Restaurants}/>
            <Route path='/auth-page' component={Auth}/>
            <Route path='/restaurant' component ={Restaurant}/>


        </div>
    );
};


export default App;
