import {DeviceEventEmitter} from 'react-native';
import { unAuthorizedUser } from '../Constants';
import { HTTP_METHODS } from "../Constants/api-constants";
import Cipher from './Security';

/**
 * This is a JavaScript function named request which takes an object with four properties (api, method, token, and params) as its argument. 
 * It is designed to make HTTP requests using fetch() and returns a Promise.
 * 
 * @params
 * * api: accepts completes URL in string format which required to send request the server
 * * method: It accepts http methods in string format such as 'GET', 'POST', 'PUT', 'DELETE', etc.
 * * token (optional): It's optional parameter as string token to authanticate request with server
 * * params: It's required parameter as object in case of using POST method to send request body to server
 * 
 * @returns
 * It returns, response promise from request object
 */
export default async function request({api, method, token, params, encryption}) {
    try {

        /**
         * The function first sets up some headers for the request, including the content type of the request, 
         */
        let headers = {
            'Content-Type': 'application/json',
        }

        /**
         * If a token is passed in, it adds an Authorization header with the token bearer.
         */
        if (token) {
            headers = {
                ...headers,
                'Authorization': token ? `Bearer ${token}` : null,
            }
        }

        /**
         * It sets up some options for the request, including the request method (which is passed in as an argument), 
         * and the headers that were just set up.
         */
        let requestOptions = {
            method: method,
            headers: headers,
        };

        /**
         * If the method argument is set to HTTP_METHODS.POST, 
         * it creates a request body with the params object passed in.
         */
        if (method === HTTP_METHODS.POST) {
            let body = JSON.stringify(params)

            /**
             * This code snippet checks if encryption is true, and if so, 
             * encrypts the body of a request using a method called encryptData from the Cipher module.
             */
            if (encryption) {
                body = await Cipher.encryptData(body)
            }

            requestOptions = {
                ...requestOptions,
                body: body
            }
        }

        return await fetch(api, requestOptions).then(res => {

            if (res.status === 200 || res.status === 201) {
                /**
                 * If the request is successful (with a 200 or 201 status code), the response is parsed as JSON and returned.
                 */

                return res.json()
            } else if (res.status === 401 || res.status === 502) {
                /**
                 * If the response has a 401 or 502 status code, the function emits an event named unAuthorizedUser 
                 * and throws an error saying that the user is unauthorized.
                 */

                DeviceEventEmitter.emit(unAuthorizedUser)
                throw "Unauthorizes User"
            } else {
                /**
                 * If the response has any other status code, the function throws the entire response object.
                 */

                throw res
            }
        }).catch(error => {
            /**
             * If an error occurs during the fetch request, the function throws that error.
             */
            throw error;
        })
    } catch (error) {
        /**
         * If an error occurs during the fetch request, the function throws that error.
         */
        throw error;
    }
}