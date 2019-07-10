import requestProcessor from '../../api/requestProcessor';
import {Get_Profile, Login_Success} from '../Constants';


const processor = new requestProcessor();
export const handleChange=(caseData) => {
    return async (dispatch, getState) => {
        // dispatch({type : Change_Case_Value, payload : caseData})
        return
    }
}

const handlePostUdate = (uploadData)=>{
    var form = new FormData()
    return async (dispatch, getState)=>{
        form.append('image', uploadData.imageUrl);
        form.append('firstname', uploadData.firstName);
        form.append('lastname', uploadData.lastName);
        form.append('phonenumber', uploadData.phoneNumber)
        form.append('location', uploadData.location);
        form.append('dateofbirth', uploadData.dateOfBirth);
        form.append('bio', uploadData.bio);
        
        
        
        var state = getState();
        processor.header.headers["x-access-token"] = state.auth.token;
        processor.header.headers["content-type"] = `multipart/form-data; boundary=${form._boundary}`;
        var result = await processor.sendPost(`/client/updateprofile`,form)
        if (result){
            console.log("result from aciton", result)
            dispatch({type: Login_Success, payload: {firstName : result.data.data.firstName, imageUrl :result.data.data.imageUrl} })
            return result.data
        }else {
            return result.data
        }       
       console.log("the result for edit profile", result)
       dispatch({type: Login_Success, payload: result.data})
    }
}

const getProfile = () => {
    return async (dispatch, getState) => {
        processor.header.headers["x-access-token"] = getState().auth.token;
        var values = await processor.sendGet(`/auth/myprofile`)
        console.log("instructions ;;;;;;;;;",values)
        if (values.data){
            dispatch({type: Get_Profile, payload : values.data})
            return values
        }else {
            return false
        }
    }
}


export {
    handlePostUdate, getProfile
}