import {Change_SignUp_Value} from '../Constants';

const InitialState = {
   firstname:"",
   lastname:"",
   emailaddress:"",
   phonenumber:"",
   password:"",
   usertype : "client"
}

const ClientSignUpReducers =(state = InitialState, action)=>{
    switch(action.type){
        case Change_SignUp_Value:
        return{...state,[action.payload.id] : action.payload.value}
        default:
        return state
    }
}

export default ClientSignUpReducers;