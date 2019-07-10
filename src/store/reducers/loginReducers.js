import {Change_Login_Value} from '../Constants';

const InitialState = {
    username:"",
    password:""
}

const loginReducers =(state = InitialState, action)=>{
    switch(action.type){
        case Change_Login_Value:
        return{...state,[action.payload.id] : action.payload.value}
        default:
        return state
    }
}

export default loginReducers;