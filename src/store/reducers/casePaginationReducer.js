import {All_Cases, Case_Pagination, 
        Specific_Case_Pagination, 
        All_Specific_Cases, 
        Pending_Case_Pagination, 
        All_Pending_Case,
        Ongoing_Case_Pagination,
        Ongoing_Case,
        Clear_Cases
        } from '../Constants';

const InitialState = {allCases :  [], allSpecifiedCases : [], pendingCase:[], ongoingCases:[]}

const createCaseReducers =(state = InitialState, action)=>{
    switch(action.type){
        case Clear_Cases: 
       return  {...state , allCases : []}
        case All_Cases:
        return {...state , allCases : action.payload};
        case Case_Pagination:
        return {...state , allCases : [...state.allCases, ...action.payload]};
        case All_Specific_Cases:
        return {...state , allSpecifiedCases : action.payload};
        case Specific_Case_Pagination:
        return {...state , allSpecifiedCases : [...state.allSpecifiedCases, ...action.payload]};
        case All_Pending_Case:
        return {...state , pendingCase : action.payload};
        case Pending_Case_Pagination :
        return {...state , pendingCase : [...state.pendingCase, ...action.payload]};
        case Ongoing_Case:
        return {...state, ongoingCases : action.payload}
        case Ongoing_Case_Pagination :
        return {...state, ongoingCases : [...state.ongoingCases, ...action.payload]}
        default:
        return state
    }
}
export default createCaseReducers;