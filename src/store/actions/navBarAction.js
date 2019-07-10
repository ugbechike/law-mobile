import { Change_Active_Bar, Change_NavBar } from './../Constants';


const ChangeActiveBarWithGroup = (key, group, App) => {
    return async (dispatch, getState) => {
        dispatch({ type: Change_Active_Bar, payload: { group: group, key: key } });
    }
}
const ChangeActiveBar = (status) => {
    return (dispatch, getState) => {
        var state = getState().navigation;
        dispatch({ type: Change_NavBar, payload: status });
    }
}

const JoinNewGroup = () => {

}
export {
    ChangeActiveBarWithGroup, ChangeActiveBar
}