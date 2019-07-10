import requestProcessor from '../../api/requestProcessor';
import {Get_PracticeArea} from '../Constants';

var processor = new requestProcessor();

const getPracticeArea = () =>{
    return  async (dispatch, getState)=>{
        var state = getState();
        processor.header.headers["x-access-token"] = state.auth.token;
        var result = await processor.sendGet('/practiceArea');
        if(result){
                dispatch({type: Get_PracticeArea, payload : result.data})  
                return result.data
        }else{
            return false;
        }
    }
}
 
export{ getPracticeArea }