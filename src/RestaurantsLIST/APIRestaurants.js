import * as axios from "axios";


const instance = axios.create({
    baseURL: `http://54.93.45.72:8293/`,

});

export const apiRest = {

    getRestaurants() {
        return instance.get(`api/restaurant/`).then((response)=>{
            debugger
           return response.data

            }
        )
    }

};
