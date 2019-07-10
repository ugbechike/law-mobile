import requestProcessor from '../../api/requestProcessor';
import { All_Cases, All_Pending_Case } from '../Constants';


const processor = new requestProcessor();


const getCaseSearch = (searchValue) => {
    return async (dispatch, getState) => {
        console.log("ooooooooo1", searchValue)
        processor.header.headers["x-access-token"] = getState().auth.token;
        processor.dispatcher = dispatch;
        console.log("processor", processor)
        var result = await processor.sendGet(`/case?search=${searchValue}`).then(data => data)
            .catch(error => error)
            if(result){
                console.log("ooooooooo1", result)
                // dispatch({type : All_Pending_Case, payload : result})
            }else{
                return result
            }
            
        return result
    }
}


export {
    getCaseSearch
}