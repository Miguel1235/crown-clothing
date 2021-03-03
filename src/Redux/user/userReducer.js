import { UserActionsTypes } from "./userTypes";
const INITIAL_STATE = {
    currentUser: null
};

// El reducer recibe toda las acciones que se dispararon por un componente, sin importa si no estan relacionadas a las acciones del usuario
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionsTypes.SET_CURRENT_USER:
            return {
                ...state, currentUser: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;
