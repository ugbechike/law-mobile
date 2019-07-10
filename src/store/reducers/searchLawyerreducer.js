import {SearchedLawyer} from '../Constants';

const InitialState = {lawyers :  []}

const SearchLawyerReducer = (state = InitialState, action) =>{
    switch(action.type){
        case SearchedLawyer:
        return {...state , lawyers : action.payload}
        default:
        return state
    }
}

export default SearchLawyerReducer;
