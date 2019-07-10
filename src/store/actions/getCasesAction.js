import requestProcessor from '../../api/requestProcessor';
import {Specific_Case_Pagination,All_Specific_Cases} from '../Constants';

var processor = new requestProcessor();


const getPersonalCases = (pagesize,pagenumber, morecase) =>{
    return  async (dispatch, getState)=>{
        var state = getState();
        processor.header.headers["x-access-token"] = state.auth.token;
        var result = await processor.sendGet(`/case/clientaddedcase/${pagesize}/${pagenumber}`);
        if(result.data){
            if(morecase){
                dispatch({type: Specific_Case_Pagination, payload : result.data})  
            }else{
                dispatch({type: All_Specific_Cases, payload : result.data})
                console.log("my sepecific case", result)
            }
            return result.data.length === pagesize ? true : false;
        }else{
            return false;
        }
    }
}

const getOpenCases = () =>{
    return  async (dispatch, getState)=>{
        var state = getState();
        processor.header.headers["x-access-token"] = state.auth.token;
        var result = await processor.sendGet('/case/opencases');
        console.log("result from open cases", result);
        return result.data
    }
}

export{
    getPersonalCases,
    getOpenCases
}