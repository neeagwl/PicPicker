import axios from 'axios';

export default axios.create({
    baseURL:"https://api.unsplash.com/",
    headers:{
        Authorization: 'Client-ID bhk8Z9c9EonW5cs7sKoljIk8Xid-JwPkbztWi_7Y9Vs'
    }
})