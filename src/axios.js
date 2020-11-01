import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://us-central1-clone-e8235.cloudfunctions.net/api'
    // baseURL: '...' // at this point we don't have an API, we've done no cloud-function work, noting like that. THE API (cloud function) URL
    // baseURL: 'http://localhost:5001/clone-e8235/us-central1/api'  // it is /api because we have
    // exports.api = functions.https.onRequest(app); in functions index.js
})

export default instance;

// Why axios over JS FetchAPI?
// It makes things easier and it also easily gives a way of adding baseURL
// and AXIOS is used very much