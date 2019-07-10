import { Change_Active_Bar, Change_NavBar } from './../Constants';

const initialState = {
    currentActiveKey: "",
    group: "",
    showBar: true
}

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case Change_Active_Bar:
            return { ...state, currentActiveKey: action.payload.key, group: action.payload.group }
        case Change_NavBar:
            return { ...state, currentActiveKey: action.payload }
        default:
            return state;
    }
}