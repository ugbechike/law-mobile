import {Get_Profile} from '../Constants';

const initialState ={
    firstName: "",
    lastName: "",
    location: "",
    dateOfBirth: "",    
    bio: "",
    imageUrl: "",
}

const clientProfileReducer = (state = initialState, action) => {
    switch(action.type){
        case Get_Profile:
        return{...action.payload }
        default:
        return state
    }
}

export default clientProfileReducer;