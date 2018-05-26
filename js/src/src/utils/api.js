import { DEBUG_URL } from '../constants/.env.local.js';

export default class Api {

    static getApiBaseUrl() {
        const origin = window.location.origin
        // @todo make it more dev friendly
        return origin.includes('localhost') ? DEBUG_URL : origin
    }

    static getAppContainerId() {
        return 'react-app-container'
    }

}
