import axios from 'axios';

const debug = true;

export default class Api {
    static getApiBaseUrl() {
        return debug ? window.commentsApiBaseUrl : window.location.origin;
    }

    static createCsrfPromise() {
        return axios.get(`${this.getApiBaseUrl()}/rest/session/token`, {withCredentials: true})
            .then((response) => {
                return response.data;
            }).catch((err) => {
                throw new Error(err.response.data.message);
            });
    }

    static getAppContainerId() {
        return 'react-app-container';
    }

    static getComments() {
        return axios.get(`${this.getApiBaseUrl()}/react-comments/comments/${window.commentsAppNid}?_format=json`, {withCredentials: true}).catch((err) => {
            throw new Error(err.response.data.message);
        });
    }

    static getMe() {
        return axios.get(`${this.getApiBaseUrl()}/react-comments/me?_format=json`, {withCredentials: true}).catch((err) => {
            throw new Error(err.response.data.message);
        });
    }

    static postComment(commentText, anonName) {
        if (!commentText || !commentText.trim()) {
            return Promise.reject({message: 'Comments cannot be empty.'});
        }

        return this.createCsrfPromise()
            .then((csrf) => {
                return axios({
                    method: 'post',
                    headers: {'X-CSRF-Token': csrf},
                    url: `${this.getApiBaseUrl()}/react-comments/comments/${window.commentsAppNid}?_format=json`,
                    data: {
                        reply_comment_id: 0,
                        comment: commentText,
                        anon_name: anonName
                    },
                    withCredentials: true
                })
            }).then((response) => {
                return response.data;
            }).catch((err) => {
                throw new Error(err.response.data.message);
            });
    }

    static postReply(commentId, commentText, anonName) {
        if (!commentText || !commentText.trim()) {
            return Promise.reject({message: 'Comments cannot be empty.'});
        }

        return this.createCsrfPromise()
            .then((csrf) => {
                return axios({
                    method: 'post',
                    headers: {'X-CSRF-Token': csrf},
                    url: `${this.getApiBaseUrl()}/react-comments/comments/${window.commentsAppNid}?_format=json`,
                    data: {
                        reply_comment_id: commentId,
                        comment: commentText,
                        anon_name: anonName
                    },
                    withCredentials: true
                });
            }).then((response) => {
                return response.data;
            }).catch((err) => {
                throw new Error(err.response.data.message);
            });
    }

    static saveEdit(commentId, commentText) {
        if (!commentText || !commentText.trim()) {
            return Promise.reject({message: 'Comments cannot be empty.'});
        }

        return this.createCsrfPromise()
            .then((csrf) => {
                return axios({
                    method: 'patch',
                    headers: {'X-CSRF-Token': csrf},
                    url: `${this.getApiBaseUrl()}/react-comments/comment/${commentId}?_format=json`,
                    data: {
                        comment: commentText
                    },
                    withCredentials: true
                });
            }).then((response) => {
                return response.data;
            }).catch((err) => {
                throw new Error(err.response.data.message);
            });
    }

    static deleteComment(commentId) {
        return this.createCsrfPromise()
            .then((csrf) => {
                return axios({
                    method: 'delete',
                    headers: {'X-CSRF-Token': csrf},
                    data: {
                        '_format': 'json'
                    },
                    url: `${this.getApiBaseUrl()}/react-comments/comment/${commentId}?_format=json`,
                    withCredentials: true
                });
            }).then((response) => {
                return response.data;
            }).catch((err) => {
                throw new Error(err.response.data.message);
            });
    }

    static flagComment(commentId) {
        return this.putComment(commentId, 'flag');
    }

    static publishComment(commentId) {
        return this.putComment(commentId, 'publish');
    }

    static unpublishComment(commentId) {
        return this.putComment(commentId, 'unpublish');
    }

    static putComment(commentId, op) {
        return this.createCsrfPromise()
            .then((csrf) => {
                return axios({
                    method: 'put',
                    headers: {'X-CSRF-Token': csrf},
                    data: {
                        'op': op
                    },
                    url: `${this.getApiBaseUrl()}/react-comments/comment/${commentId}?_format=json`,
                    withCredentials: true
                });
            }).then((response) => {
                return response.data;
            }).catch((err) => {
                throw new Error(err.response.data.message);
            });
    }
}
