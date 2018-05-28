import { DEBUG_URL } from '../constants/.env.local.js';

export default class Api {

    /**
     * Returns the base url for the Drupal 8 site
     * that provides JSON API.
     *
     * Uses the current site when embedded in Drupal
     * or the DEBUG_URL provided in the .env.local.js file
     * when using React as a standalone app.
     *
     * @returns {string}
     */
    static getApiBaseUrl() {
        const origin = window.location.origin
        // @todo include a selection for local, test, production
        return origin.includes('localhost') ? DEBUG_URL : origin
    }

    /**
     * Returns the React application container id.
     */
    static getAppContainerId() {
        return 'react-app-container'
    }

    /**
     * Returns the data attribute value from the React container.
     *
     * @param attribute
     *
     * @returns {string}
     */
    static getDataAttributeValue(attribute) {
        // @todo exception handling
        return document.getElementById(Api.getAppContainerId()).getAttribute(`data-${attribute}`)
    }

}
