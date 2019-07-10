import requestProcessor from '../../api/requestProcessor';
import { All_Cases, Logout } from '../Constants';
import { Small, Big } from '../LoadersTypes';


const processor = new requestProcessor();

const getPracticeArea = () => {
    return async (dispatch, getState) => {
        processor.header.headers["x-access-token"] = getState().auth.token;
        var values = await processor.sendGet('/practiceArea/')
        return (values.data);
    }
}

const getQualifications = () => {
    return async (dispatch, getState) => {
        processor.header.headers["x-access-token"] = getState().auth.token;
        var values = await processor.sendGet('/qualification/')
        return (values.data.message);
    }
}

var setTime = function (date, element) {
    var currentDate = new Date(date).getTime();
    if (currentDate > 0) {
        var dateDifference = currentDate - new Date().getTime();
        var days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60))
        var seconds = Math.floor((dateDifference % (1000 * 60)) / 1000)
        element.innerHTML = `${days} Day(s) ${hours} Hours ${minutes} Minutes ${seconds}s`
    } else {
        clearInterval(setTime)
    }
}

var countdown = function (date, elemetid) {
    var element = document.getElementById(elemetid);
    var dateDifference = new Date(date) - new Date().getTime();
    var interval;
    if (element && dateDifference > 0) {
        interval = setInterval(() => setTime(date, element), 1000)
    } else {
        if (interval) {
            clearInterval(interval)
        }
    }
}

const hireLawyer = (publicId) => {
    return async (dispatch, getState) => {
        processor.header.headers["x-access-token"] = getState().auth.token;
        var values = await processor.sendGet(`/lawyer/lawyerprofile/${publicId}`)

    }
}

const hireLawyerFromChat = (caseId, lawyer) => {
    return async (dispatch, getState) => {
        processor.header.headers["x-access-token"] = getState().auth.token;
        var values = await processor.sendPost(`/case/hirelawyer/${caseId}`, lawyer)
        //Fix this later to send the lawyer id to redux and redux should reset the array of interested lawyer with status= true
        if (values.data.success) {
            dispatch({ type: "Set_Interested_laywer_Status", payload: lawyer })
        }
        return values.data;
    }
}
const caseCounter = () => {
    return async (dispatch, getState) => {
        processor.header.headers["x-access-token"] = getState().auth.token;
        processor.dispatcher = dispatch;
        processor.dispatcherDetail = Small

            ;
        var values = await processor.sendGet(`/case/getcasecount`);
        if (values) {
            return values.map(caseToCount => {
                return caseToCount.data
            })
        }
        return [];
    }
}


const handleLogout = (dispatcher) => {
    sessionStorage.removeItem('lawyer_Tickets')
    localStorage.clear('laywerpp');
    window.location.href = '/auth/login';
    if (typeof (dispatcher) == 'function') {
        dispatcher({ type: Logout })
    }
}

const refreshAuthDetails = () => {
    return async (dispatch, getState) => {
        processor.header.headers["x-access-token"] = getState().auth.token;
        processor.dispatcher = dispatch;
        var result = await processor.sendGet(`/auth/refreshauth`);
    }
}


export {
    getPracticeArea,
    getQualifications,
    countdown,
    hireLawyer,
    hireLawyerFromChat,
    caseCounter,
    handleLogout
}
// setTime,