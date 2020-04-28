import authApi from "./authApi"

const LOGIN = "restaurants/LOGIN";
const SET_ERROR_MESSAGE = "restaurants/SET_ERROR_MESSAGE";


const initialState = {
    isAuth: false,
    // email: '',
    // password: '',
    error: ''
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                // ...action.data,
                isAuth: true
            };
        case SET_ERROR_MESSAGE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }


};


const setErrorSuccess = (error) => ({type: SET_ERROR_MESSAGE, error});
const getAuthLoginSuccess = () => ({type: LOGIN});
// const getAuthLoginSuccess = (email, password) => ({type: LOGIN, data: {email, password}});

export const getAuthLogin =(email, password)=> async (dispatch)=>{
        let data = await authApi.login(email, password);
if(data.status == 200)
{
            dispatch (getAuthLoginSuccess(email, password))}
else {
    dispatch (setErrorSuccess(data.data.error))
}


}

