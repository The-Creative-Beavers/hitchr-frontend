import camelcaseKeys from 'camelcase-keys';
import rideList from './dummyData/rideList';

const axios = require('axios');

const baseUrl = process.env.API_URL ? `${process.env.API_URL}/api` : 'http://127.0.0.1:3000/api';

export default {
  ride: {
    postRide: (formData) => new Promise((resolve, reject) => {
      axios.post('http://localhost:5000/api/rides', formData)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
    searchRide: (start, end) => new Promise((resolve, reject) => {
      axios.get(`${baseUrl}/ride?start=${start}&end=${end}`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
    addRider: (rideId) => new Promise((resolve, reject) => {
      axios.patch(`${baseUrl}/ride/${rideId}`)
        .then(({ data }) => resolve(data))
        .catch(reject);
    }),
    completeRide: (rideId) => new Promise((resolve, reject) => {
      axios.patch(`${baseUrl}/ride/${rideId}/complete`)
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
    getRides: (userId) => new Promise((resolve, reject) => {
      if (process.env.API_URL || process.env.INTEGRATION) {
        axios.get(`${baseUrl}/user/${userId}/rides`)
          .then(({ data }) => {
            resolve(data);
          })
          .catch((err) => reject(err));
      } else {
        camelcaseKeys(rideList.body.rides, { deep: true });
        resolve(camelcaseKeys(rideList.body.rides, { deep: true }));
      }
    }),
    completeRide: (rideId) => new Promise((resolve, reject) => {
      if (process.env.API_URL) {
        axios.patch(`${baseUrl}/rides/${rideId}/complete`)
          .then(({ data }) => resolve(data))
          .catch(reject);
      } else {
        resolve();
      }
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
