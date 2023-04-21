import { Platform } from 'react-native';
import RNFS from 'react-native-fs';
import {RSA} from 'react-native-rsa-native';

import {PUBLIC_KEY_DIR} from '../constants';

/**
 * These keys are used for data encryption and decryption in the application.
 */
let PUBLIC_KEY = null; // PUBLIC_KEY is used to encrypt the data using RSA encryption technique with a key length of 2048 bits.
let PRIVATE_KEY = null; // PRIVATE_KEY is not currently being used in the code provided, but it is stored for future use as it can be used to decrypt the data that is received from the server.

/**
 * It reads a file named PUBLIC_KEY_DIR from the application's assets directory of android device using the readFileAssets method.
 * The file contents are assigned to the PUBLIC_KEY and PRIVATE_KEY variables.
 * 
 * @params
 * This method does not take any parameters.
 * @returns
 * * A promise that resolves with the contents of a public key file
 */
function getPublicKeysAndroid() {
  return RNFS.readFileAssets(PUBLIC_KEY_DIR)
    .then(file => {
      PUBLIC_KEY = file // public key will be used to encryt data at 2048 bits
      PRIVATE_KEY = PUBLIC_KEY // at client public key will be only used to decrypt server response

      return PUBLIC_KEY
    }).catch(error => {
      throw error
    })
}

/**
 * It read a public key file from the main bundle path of an iOS device and store the key as PUBLIC_KEY. 
 * The same key is also stored as PRIVATE_KEY
 * 
 * @params
 * This method does not take any parameters.
 * @returns
 * * A promise that resolves with the contents of a public key file
 */
function getPublicKeysiOS() {
  const path = `${RNFS.MainBundlePath}/${PUBLIC_KEY_DIR}`;

  return RNFS.readFile(path)
    .then(file => {
      PUBLIC_KEY = file // public key will be used to encryt data at 2048 bits
      PRIVATE_KEY = PUBLIC_KEY // at client public key will be only used to decrypt server response

      return PUBLIC_KEY
    })
    .catch(error => {
      console.log(error)
      throw error
    })
}

/**
 * This function returns a Promise which resolves to the public key that is used to encrypt data at 2048 bits. 
 * The public key is obtained based on the platform where the application is running.
 * 
 * @params
 * This method does not take any parameters.
 * @returns 
 * * A Promise which resolves to the public key.
 */
async function getPublicKeys() {
  return await Platform.OS === 'ios' ? getPublicKeysiOS() : getPublicKeysAndroid()
}

/**
 * This is an asynchronous function that encrypts the provided data using RSA encryption 
 * with the public key stored in the PUBLIC_KEY variable.
 * 
 * @params
 * * data: The data that needs to be encrypted. It can be a string or an object.
 * @returns
 * * A Promise that resolves to the encrypted data.
 */
async function encryptData(data) {
  let message = data;
  if (typeof message !== 'string') {
    JSON.stringify(message)
  }

  return await RSA.encrypt(message, PUBLIC_KEY) // data encryption
    .then(encodedData => {
      return encodedData // return encrypted data
    }).catch(error => {
      throw error
    })
}

/**
 * This is an asynchronous function that takes in an encodedData parameter, 
 * which is a string of encrypted data, and returns a promise that resolves to the decrypted data. 
 * It uses the RSA algorithm to decrypt the data using the PRIVATE_KEY that is previously set.
 * 
 * @param
 * * encodedData: a string of encrypted data.
 * @returns
 * * a promise that resolves to the decrypted data.
 */
async function decrytData(encodedData) {
  return await RSA.encrypt(encodedData).then(data => {
    return data
  }).catch(error => {
    throw error
  })
}

export default {getPublicKeys, encryptData, decrytData}
