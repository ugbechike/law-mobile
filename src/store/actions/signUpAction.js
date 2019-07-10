import requestProcessor from '../../api/requestProcessor';
import {Sign_Success, Change_SignUp_Value, Auth_detail} from '../Constants';




export const handleChange=(data) => {
    return async (dispatch, getState) => {
        dispatch({type : Change_SignUp_Value, payload : data})
    }
}

const handleSignUp= (data)=>{
    return async (dispatch, getState)=>{
        var state = getState();
        var processor = new requestProcessor();
       var result = await processor.sendPost('/auth/register',data)
        dispatch({type : Sign_Success, payload : result.data.token});
        if (result.data.success == true){
            
            // window.location.href='/over-view'
            return true
        }else {
            return false
        }
        return result.data;
        
    
    }
}

export {
    handleSignUp
}