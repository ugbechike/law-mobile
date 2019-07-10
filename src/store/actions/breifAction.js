import requestProcessor from '../../api/requestProcessor';
import {All_Cases} from '../Constants';


const processor = new requestProcessor();

const handlePost = (caseData)=>{
    return async (dispatch, getState)=>{
        var state = getState();
        // var processor = new requestProcessor(state.auth.token);
        
        processor.header.headers["x-access-token"] = state.auth.token;
       var result = await processor.sendPost('/case',caseData)
        if (result) {
            // dispatch({type : Post_Success, payload : result.data.data})
            return result.data
        }else{
            
            return result.data;
        }
    }
}

const handleCreateCase = (newState) => {
    return async (dispatch, getState)=>{
        var state = getState();
        // var processor = new requestProcessor(state.auth.token);
        
        processor.header.headers["x-access-token"] = state.auth.token;
        // let sendItems = {
        //     lawyerId: id,
        //     case: newState
        // }
        console.log("======================pppppppppppppppp", newState)
       var result = await processor.sendPost('/case',newState)
        if (result.data.success == true) {
            // dispatch({type : Post_Success, payload : result.data.data})
            return result.data
        }else{
            
            return result.data;
        }
    }
}

const getBrief = (caseId) => {
    return async (dispatch, getState) => {
        console.log("case Id entering the get brief action",caseId);
        processor.header.headers["x-access-token"] = getState().auth.token;
        var values = await processor.sendGet(`/brief/getuserbrief/${caseId}`)
        console.log("gotten in get brief action", values)
        return values
    }
}

const creatBrief = (data) =>{
    return async (dispatch, getState) => {
        console.log("data recieved in create brief action",data);
        processor.header.headers["x-access-token"] = getState().auth.token;
        var values = await processor.sendPost(`/brief`, data);
        console.log("gotten in get brief action", values);
        return values
    }
}
const getSpecificBrief = (BriefId) =>{
    return async (dispatch, getState) =>{
        console.log("brief don enter the specified action way get am", BriefId);
        processor.header.headers["x-access-token"] = getState().auth.token;
        var values = await processor.sendGet(`/brief/${BriefId}`);
        console.log("my values for specified brief don arive", values);
        return values.message
    }
}


export {
    handlePost, getBrief, handleCreateCase, creatBrief, getSpecificBrief
}