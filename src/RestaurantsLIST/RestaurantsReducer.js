import {apiRest} from "./APIRestaurants";

const GET_RESTAURANT_LIST ="restaurants/GET_RESTAURANT_LIST";



const initialState = {
    restaurants: [
        {address: "Минск, пр-т Машерова, 19",
            background: "http://54.93.45.72:8293//img/42/42_background.jpg",
            backgroundFile: null,
            cookingTimeFrom: 15,
            cookingTimeTo: 30,
            email: "7komnat@mail.ru",
            id: 42,
            info: "Есть места, в которых приятно завтракать, читая свежую прессу; есть места, где хочется собираться в шумной компании друзей и болтать до самого закрытия; есть места, где приятно побыть в одиночестве. А есть заведения, где хочется провести самые важные события в жизни; заведения, которым можно доверять на 100 процентов. Таким местом является ресторан «Семь комнат».",
            logo: "/img/42/42_logo.jpg",
            logoFile: null,
            mapLink: "",
            name: "Семь комнат",
            phone: "+3752917845612",
            sale: 0,
            status: "ACTIVE",
            timesDtoList: [],
            types: []}
    ]
};

export const restaurantsReducer =(state = initialState, action) => {
    switch (action.type){
        case GET_RESTAURANT_LIST:
            return{
                ...state,
                restaurants: action.restaurants
            };
        default:
            return state;
    }



};


const getRestaurantSuccess = (restaurants) => ({type: GET_RESTAURANT_LIST, restaurants});

export const getRestaurantsList = () => async (dispatch) => {
    let restaurants = await apiRest.getRestaurants();
    dispatch(getRestaurantSuccess(restaurants))
};







