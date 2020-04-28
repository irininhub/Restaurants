import * as axios from "axios";


const instance = axios.create({
    baseURL: `http://54.93.45.72:8293`,

});

const authApi = {

    login(email, password) {
        return instance.post(`/api/auth`, {email, password}).then((response)=>{
                return response

            }
        )
            .catch(
            (e) =>{
                debugger
                return e.response
                    // .data.error
        }
    )
    }

};
export default authApi;
