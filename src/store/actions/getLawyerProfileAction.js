import requestProcessor from '../../api/requestProcessor';
import { SearchedLawyer } from '../Constants';



const processor = new requestProcessor();

const getLawyerProfile = () => {
    return async (dispatch, getState) => {
        processor.header.headers["x-access-token"] = getState().auth.token;
        processor.dispatcher = dispatch;
        return processor.sendGet('/lawyer/myprofile').
            then(data => data.data).catch(error => error)
    }
}

const getAllLawyer = () => {
    return async (dispatch, getState) => {
        processor.header.headers["x-access-token"] = getState().auth.token;
        processor.dispatcher = dispatch;
        var result = await processor.sendGet('/lawyer').then(data => data)
            .catch(error => error)
        if (result) {
            dispatch({ type: SearchedLawyer, payload: result })
        } else {
            return result
        }
        return result
    }
}

const acceptLawyer = (...publicId) => {
    return async (dispatch, getState) => {
        processor.header.headers["x-access-token"] = getState().auth.token;
        var accept = {
            case: publicId[0],
            lawyer: publicId[1]
        }
        return await processor.sendPost('/case/acceptinterest/', accept).then(
            data => console.log("accepted the lawyer", data)
        )
    }
}

const getLawyerById = (id) => {
    return async (dispatch, getState) => {
        processor.header.headers["x-access-token"] = getState().auth.token;
        processor.dispatcher = dispatch;
        return await processor.sendGet(`/lawyer/lawyerprofile/${id}`).then(
            data => data.data
        )
    }
}

export {
    getLawyerProfile, getAllLawyer, acceptLawyer, getLawyerById
}