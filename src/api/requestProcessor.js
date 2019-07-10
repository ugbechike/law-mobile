
import axios from 'axios';
import { RunLoaderDipatch, runNetworkDispatch } from './ApiUtility';
const baseUrl = 'https://lawyerppapi.herokuapp.com/api';
const OpenLoader = 'OPEN_LOADER';
const CloseLoader = 'CLOSE_LOADER';

// const baseUrl = "http://localhost:8080/api";
class processRequest {
    constructor(accessToken) {
        this.header = {
            "headers": {
                authorization: `Bearer ${accessToken}`,
                'x-access-token': `Bearer ${accessToken}`,
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
        }
        this.dispatcher = null;
        this.dispatcherDetail = null;
    }
    sendGet(url) {
        RunLoaderDipatch(this.dispatcher, this.dispatcherDetail, OpenLoader);
        return new Promise((resolve, reject) => {
            axios.get(`${baseUrl}${url}`, this.header)
                .then(data => {
                    
                    RunLoaderDipatch(this.dispatcher, this.dispatcherDetail, CloseLoader);
                    runNetworkDispatch(this.dispatcher, false);
                    resolve(data.data);
                }).catch(error => {

                    console.log("Error recieved", error.response.status === 401)

                    if (error.message === 'Network Error') {
                        runNetworkDispatch(this.dispatcher, true);
                    } else if (error.response.status === 401) {
                        //Log the person out
                        //reset all auth state
                        runNetworkDispatch(this.dispatcher, false);
                    } else {
                        runNetworkDispatch(this.dispatcher, false);
                    }
                    reject(error);
                    RunLoaderDipatch(this.dispatcher, this.dispatcherDetail, CloseLoader);
                })

        })
    }
    async sendPost(url, payload = {}) {
        ;
        var result = await axios.post(`${baseUrl}${url}`, payload, this.header);
        return result;
    }
    async sendPut(url, payload) {
        return axios.put(`${baseUrl}${url}`, payload, this.header).then(data => data.data).catch(error => error)
    }
    async sendDelete(url) {
        axios.delete(`${baseUrl}${url}`, this.header).then(data => {

        }).catch(error => {

        })
    }
}




export default processRequest;