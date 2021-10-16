const axios = require('axios');

const baseUrl = 'http://localhost:3000/api';

export default {
  ride: {
    postRide: (formData) => new Promise((resolve, reject) => {
      axios.post(`${baseUrl}/ride\`${formData}`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
  },
  user: {
    getUser: (userId) => new Promise((resolve, reject) => {
      axios.get(`${baseUrl}/user/${userId}`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
  },
  messages: {
    getMessages: (userId, recipientId) => new Promise((resolve, reject) => {
      axios.get(`${baseUrl}/messages/${userId}/?recipient=${recipientId}`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
    postMessage: (formData, userId, recipientId) => new Promise((resolve, reject) => {
      axios.post(`${baseUrl}/messages/${userId}?recipient=${recipientId}`, formData)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
  },
};
