const InitialState = {
    isSwitchedOn: false
}

const EditLawyerProfileReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "CHANGE_VALUE":
            return { ...state, ...action.payload };
        // return state
        default:
            return state
    }
    return state;
}

export default EditLawyerProfileReducer;