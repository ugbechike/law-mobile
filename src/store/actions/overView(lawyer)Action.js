import requestProcessor from '../../api/requestProcessor';
import {Client_By_Id_Detail, Pending_Case_Pagination, All_Pending_Case} from '../Constants';

var processor = new requestProcessor();

const getCaseObject= (pagesize, pagenumber, morecase)=>{
    return  async (dispatch, getState)=>{
        var state = getState();
        processor.header.headers["x-access-token"] = state.auth.token;
        var result = await processor.sendGet(`/case/opencases/${pagesize}/${pagenumber}`);
        if (result.data){
            if (morecase){
                dispatch({type : Pending_Case_Pagination, payload : result.data});
            }
            else{
                dispatch({type : All_Pending_Case, payload : result.data});
            }
            return result.data
        }else{
            return false
        }
    }
}

const acceptCases = (caseid) =>{
    return async (dispatch, getState)=>{
        var state = getState();
        processor.header.headers["x-access-token"] = state.auth.token;
        var result =await processor.sendPost(`/case/applyforcase/${caseid}`);
        if(result.data.success){
            var clientDetail = result.data.data.clientid
            dispatch({type : Client_By_Id_Detail, payload : clientDetail});
        }
        return result.data
    }
}

const acceptSpecificCase = (caseid) =>{
    return async (dispatch, getState)=>{
        var state = getState();
        processor.header.headers["x-access-token"] = state.auth.token;
        var result =await processor.sendPost(`/case/acceptspecificcase/${caseid}`)
        var clientDetail = result.data.data.clientid;
        dispatch({type : Client_By_Id_Detail, payload : clientDetail});
        if (result){
            return result;
        }else {
            return result
        }
        // dispatch({type:Client_By_Id_Detail, payload:result});
        return result
    }
}

export {
    getCaseObject,
    acceptCases,
    acceptSpecificCase
}