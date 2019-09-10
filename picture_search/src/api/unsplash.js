import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 4d36c5519719a9d518d4f1d0a5738395cf22b8f4c4006ffef863b1c74f77df9c'
  }
});
