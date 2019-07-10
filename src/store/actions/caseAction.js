import requestProcessor from '../../api/requestProcessor';
import {All_Cases, Case_Pagination, Ongoing_Case, Ongoing_Case_Pagination, Clear_Cases} from '../Constants';
import {Small, Big} from '../LoadersTypes';

const processor = new requestProcessor();
export const handleChange=(caseData) => {
    return async (dispatch, getState) => {
        // dispatch({type : Change_Case_Value, payload : caseData})
        return 
    }
}

const handlePost = (caseData)=>{
    return async (dispatch, getState)=>{
        var state = getState(); 
        processor.dispatcher = dispatch;    
        processor.header.headers["x-access-token"] = state.auth.token;
       var result = await processor.sendPost('/case',caseData)
        if (result) {
            // dispatch({type : , payload : result.data.data})
            return result.data
        }else{
            
            return result.data;
        }
    }
}

const handleCreateCase = (newState) => {
    return async (dispatch, getState)=>{
        var state = getState();
        
        processor.header.headers["x-access-token"] = state.auth.token;
       var result = await processor.sendPost('/case',newState)
        if (result.data.success == true) {
            // dispatch({type : Post_Success, payload : result.data.data})
            return result.data
        }else{
            
            return result.data;
        }
    }
}

const getCase = (pagenumber = 1, pagesize = 5, morecase, clear) => {
    return async (dispatch, getState) => {
        processor.dispatcher = dispatch;   
        if (morecase){
            processor.dispatcherDetail =  Small; 

        }else{

            processor.dispatcherDetail =  Big; 
            dispatch({type: Clear_Cases})
        }
        processor.header.headers["x-access-token"] = getState().auth.token;
        var values = await processor.sendGet(`/case/getusercases/${pagesize}/${pagenumber}`)
        if(values && values.data){
            if(morecase){
                dispatch({type: Case_Pagination, payload : values.data})  
            }else{
                dispatch({type: All_Cases, payload : values.data})
            }
            return values.data.length === pagesize ? true : false;
        }else{
            return false;
        }
    }
}
const getOngoingCase = (pagenumber=1, pagesize=5, morecase) => {
    return async (dispatch, getState) => {
        processor.header.headers["x-access-token"] = getState().auth.token;
        var values = await processor.sendGet(`/case/ongoingcases/${pagesize}/${pagenumber}`)
        if(values.data){
            if(morecase){
                dispatch({type: Ongoing_Case_Pagination, payload : values.data});
            }else{
                dispatch({type: Ongoing_Case, payload : values.data});
            }
            return values.data.length === pagesize ? true : false;
            }else{
            return false;
        }
    }
}



export {
    handlePost, getCase, handleCreateCase,getOngoingCase
}