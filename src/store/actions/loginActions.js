import requestProcessor from '../../api/requestProcessor';
import {Login_Success,Change_Login_Value, Auth_detail} from '../Constants';




export const handleChange=(data) => {
    console.log("data sending", data)
    return async (dispatch, getState) => {
        dispatch({type : Change_Login_Value, payload : data})
    }
}

const handleLogin= (data)=>{
    return async (dispatch, getState)=>{
        console.log("login data posting", data);
        var state = getState();
        var processor = new requestProcessor();
       var result = await processor.sendPost('/auth/authenticate',
        data)
        if (result.data.success == true) {
            dispatch({type : Login_Success, payload : result.data.data})
            // sessionStorage.setItem("user", result.data.data.token)
            return result.data.data
            
            // console.log("logged in with this token =====>", result.data.data.token)
            
        }else{
            console.log("Something just went wrong -------> Login action", result.data)
            return result.data;
            // 
        }
        return result.data;
    
    }
}


// export const decodeToken = () => {
//     return async (dispatch, getState) => {
//         var state = getState();
//         console.log("state form action from decoded", state.auth.token);
//         var processor = new requestProcessor(state.auth.token);
//         var result =await processor.sendPost("/users/decode");
//         console.log("decoded token", result);
//         dispatch({type : Auth_detail, payload : result.data.token})
//     }
// }

export {
    handleLogin
}