import { Show_Small_Loader, Hide_Small_Loader, Hide_Big_Loader, Show_Big_Loader, Toggle_Notification } from '../LoaderConstants';

const InitialState = {
    small: false,
    big: false,
    network: false
}

const LoaderReducer = (state = InitialState, action) => {
    switch (action.type) {
        case Show_Small_Loader:
            return { ...state, small: true }
        case Hide_Small_Loader:
            return { ...state, small: false }
        case Show_Big_Loader:
            return { ...state, big: true }
        case Hide_Big_Loader:
            return { ...state, big: false }
        case Toggle_Notification:
            return { ...state, network: action.payload }
        default:
            return state
    }
}

export default LoaderReducer;