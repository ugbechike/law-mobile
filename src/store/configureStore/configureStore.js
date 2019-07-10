import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer'
import { createStore, compose, applyMiddleware } from 'redux';
import AsyncStorage from '@react-native-community/async-storage'

const ConfigureStore = () => {
    var intialState = {};
    AsyncStorage.multiGet(["lawyer_Tickets", "lawyerpp"], (error, retrievedData) => {
        var assumedState = retrievedData[0][0];
        var authState = retrievedData[1][1];
        if (assumedState != null) {
            intialState = assumedState;
        } else if (authState !== null && (authState.token !== '' && assumedState === null)) {
            intialState = { ...intialState, auth: { ...authState } };
        }
    });

    const saver = store => next => action => {
        let result = next(action);
        let stateToSave = store.getState();
        return AsyncStorage.setItem("lawyerpp", JSON.stringify(stateToSave.auth), (error) => {
            AsyncStorage.getItem("lawyerpp", (error, retrievedData) => {
                console.log("state in save 1", retrievedData);
                if (retrievedData) {
                    stateToSave["auth"] = {};
                }
                AsyncStorage.setItem("lawyer_Tickets", JSON.stringify(stateToSave));
                return result;
            })
        });

    }

    const logger = store => next => action => {
        let result;
        result = next(action);
        return result;
    }




    console.log("auth state in saver", intialState);
    const middleWares = [
        thunk, saver, logger
    ];
    return createStore(rootReducer, intialState, compose(applyMiddleware(...middleWares)));
}

export default ConfigureStore;