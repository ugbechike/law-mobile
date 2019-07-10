import requestProcessor from '../../api/requestProcessor';
import {Get_Profile} from '../Constants';
import {Login_Success,Change_Login_Value, Auth_detail} from '../Constants';




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
        form.append('location', uploadData.location);
        form.append('dateOfBirth', uploadData.dateOfBirth);
        form.append('companyname', uploadData.companyName);
        form.append('education', uploadData.education);
        form.append('location', uploadData.location);
        form.append('practiceareas', uploadData.practiseArea);
        form.append('qualifications', uploadData.qualification);
        form.append('personalstatement', uploadData.personalStatement);
        form.append('yearOfCallToBar', uploadData.yearOfCallToBar);
        
        
        
        var state = getState();
        processor.header.headers["x-access-token"] = state.auth.token;
        processor.header.headers["content-type"] = `multipart/form-data; boundary=${form._boundary}`;
        var result = await processor.sendPut(`/lawyer/updateprofile`,form)
        if (result){
            dispatch({type: Login_Success, payload: {firstName : result.data.firstName, imageUrl :result.data.imageUrl} })
            return result
        }else {
            return result
        }
    //    console.log("the result for edit lawyer profile", result)
    }
}


export{
    handlePostUdate
}

export default  (value)=>{
    return {type: "CHANGE_VALUE", payload: value};
}