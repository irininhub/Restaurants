import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getRestaurantsList} from "./RestaurantsReducer";
import s from "./Restaurants.module.css"
import {Link, Redirect} from "react-router-dom";


const Restaurants = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRestaurantsList())
    }, [dispatch]);
    const restaurants = useSelector((state) => state.rests.restaurants);

    const restaurant = () => {
        return restaurants.map(r => {

            return <div
                // onClick={<Redirect to =}
                        className={s.rest}
                        key={r.id}
            >
                <h2>{r.name}</h2>
                {r.sale !== 0 &&
                <div className={s.sale}>cкидка {r.sale}%</div>}
                <div><img className={s.logoImg} src={r.logo}/></div>
                <div>
                    <h3 className={s.contacts}>Контакты:</h3>
                    <div className={s.cont}>
                    <div><span className={s.label}>Адрес:</span> {r.address}</div>
                    <div><span className={s.label}>Тел.</span> {r.phone}</div>
                    <div><span className={s.label}>E-mail:</span> {r.email}</div>
                    </div>
                </div>


                <div className={s.cookTime}>Время приготовления {r.cookingTimeFrom} - {r.cookingTimeTo} мин</div>


                <div className={s.info}><p >{r.info} </p>
                    <Link to = '/restaurant' className={s.link}>Смотреть</Link></div>

            </div>

        })
    }


    return (
        <div className={s.restaurant}>
            {restaurant()}
        </div>
    );
};

export default Restaurants;
