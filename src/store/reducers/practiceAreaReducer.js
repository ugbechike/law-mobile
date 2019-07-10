import {Get_PracticeArea} from '../Constants';

const initialState = []


const practiceAreaReducer = (state = initialState, action) => {
    switch(action.type){
        case Get_PracticeArea:
        return [...initialState, ...action.payload] 
        default:
        return state
    }
}

export default practiceAreaReducer;