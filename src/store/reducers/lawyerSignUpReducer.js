import {Change_SignUp_Value} from '../Constants';

const InitialState = {
   firstname:"",
   lastname:"",
   emailaddress:"",
   phonenumber:"",
   password:"",
   barnumber:"",
   file:null,
   usertype : "lawyer"
}

const LawyerSignUpReducers =(state = InitialState, action)=>{
    switch(action.type){
        case Change_SignUp_Value:
        return{...state,[action.payload.id] : action.payload.value,}
        default:
        return state
    }
}

export default LawyerSignUpReducers;
