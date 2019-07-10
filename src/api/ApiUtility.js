import * as Loaders from '../store/LoaderConstants';
import * as LoaderTypes from '../store/LoadersTypes'
const OpenLoader = 'OPEN_LOADER';


const dispatchBuilder = (type) => {
    switch (type) {
        case LoaderTypes.Small:
            return [{ type: Loaders.Show_Small_Loader }, { type: Loaders.Hide_Small_Loader }];
        case LoaderTypes.Big:
            return [{ type: Loaders.Show_Big_Loader }, { type: Loaders.Hide_Big_Loader }];
        default:
            break;
    }
}

function retryFailedApiCalls(givenFuntion) {

}

function callRetryApi() {

}
function clearApiInterval() {

}

const RunLoaderDipatch = (dispatcher, dispatcherDetail, loaderAction) => {

    console.log("dispatch builder", loaderAction)
    if (typeof (dispatcher) == 'function' && typeof (dispatcherDetail) == 'string') {
        var actions = dispatchBuilder(dispatcherDetail);
        if (loaderAction == OpenLoader) {
            
            dispatcherDetail && dispatcher(actions[0]);
        } else {
            console.log("Processor Loader close", actions[1]);
            dispatcherDetail && dispatcher(actions[1]);
        }
    }
}

const runNetworkDispatch = (dispatcher, status) => {
    if (typeof (dispatcher) == 'function' && typeof (status) == 'boolean') {
        dispatcher({ type: Loaders.Toggle_Notification, payload: status })
    }
}

export {
    runNetworkDispatch,
    RunLoaderDipatch,
    dispatchBuilder
}
