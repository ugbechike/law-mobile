import { Login_Success, Auth_detail, Logout } from "../Constants";

const InitialState = {
    token: null,
    email: "",
    publicId: "",
    firstName: "",
    imageUrl: ""
}

const loginReducers = (state = InitialState, action) => {
    switch (action.type) {
        case Login_Success:
            return { ...state, ...action.payload };
        case "RETRIEVE_AUTH":
            return { ...InitialState, ...action.payload }
        case Logout:
            return state;
        default:
            return state
    }
    return state;
}

export default loginReducers;