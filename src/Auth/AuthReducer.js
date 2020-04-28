const SOMETHING = "restaurants/SOMETHING";


const initialState = {
    isAuth: false
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SOMETHING:
            return {
                ...state
            };
        default:
            return state;
    }


};


const something = () => ({type: SOMETHING});




