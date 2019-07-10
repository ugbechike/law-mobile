import requestProcessor from '../../api/requestProcessor';
import { All_Cases, SearchedLawyer } from '../Constants';


const processor = new requestProcessor();

const getSearchedLawyer = (searchValue) => {
    return async (dispatch, getState) => {
        console.log("ooooooooo", searchValue)
        processor.header.headers["x-access-token"] = getState().auth.token;
        processor.dispatcher = dispatch;
        console.log("processor", processor)
        var result = await processor.sendGet(`/lawyer?search=${searchValue}`).then(data => data)
            .catch(error => error)
            if(result){
                console.log("ooooooooo", result)
                dispatch({type : SearchedLawyer, payload : result})
            }else{
                return result
            }
            
        return result
    }
}
const sortForLawyers = (sortValue) => {
    return async (dispatch, getState) => {
        console.log("ooooooooo", sortValue)
        processor.header.headers["x-access-token"] = getState().auth.token;
        processor.dispatcher = dispatch;
        console.log("processor", processor)
        var result = await processor.sendGet(`/lawyer?sort=true&${sortValue}=1`).then(data => data)
            .catch(error => error)
            console.log("ooooooooo", result)
            if(result){
                console.log("ooooooooo", result.data)
                dispatch({type : SearchedLawyer, payload : result})
            }else{
                return result
            }
            
        return result
    }
}

export{
    getSearchedLawyer,
    sortForLawyers
}