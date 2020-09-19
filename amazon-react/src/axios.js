import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-clone-568b3.cloudfunctions.net/api", // THE API (cloud function) URL
    // Got that link from the functions tab on the firebase link that gets generated through firebase deploy --only functions
});

export default instance;

// http://localhost:5001/clone-568b3/us-central1/api