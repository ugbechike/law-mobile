import {Client_By_Id_Detail} from '../Constants';

const initialState ={
    clientIdDetail:[],
}

const clientIdReducer = (state = initialState, action) => {
    switch(action.type){
        case Client_By_Id_Detail:
        return{...action.payload }
        default:
        return state
    }
}

export default clientIdReducer;