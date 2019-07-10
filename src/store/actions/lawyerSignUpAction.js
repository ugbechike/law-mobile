import requestProcessor from '../../api/requestProcessor';
import {Sign_Success, Change_SignUp_Value, Auth_detail} from '../Constants';


export const handleChange=(data) => {
    console.log("lawyer signup", data)
    return async (dispatch, getState) => {
        dispatch({type : Change_SignUp_Value, payload : data})
    }
}
export const submitForm = (data = {})=>{
    console.log("data recieved from lawyer signup action", typeof(data));
    return async (dispatch, getState)=>{
        var formData = new FormData();
      Object.keys(data).map(key => {
            formData.append([key], data[key]);
       });
       
       console.log("formdata recieved ========>", formData);
       var processor = new requestProcessor();
       console.log("data going into axios post", data)
       var result = await processor.sendPost("/auth/register", data);
       console.log("response from axios*********>", result);
       dispatch({type : Sign_Success, payload : result.data.token});
        if (result.data.success == true){
            console.log("you can login now",)
            // window.location.href='/over-view'
            console.log("nice job!", result.data.message)
            return true
        }else {
            console.log("something went wrong!", result.data.message)
            return false
        }
        return result.data;

    }
}
