import * as request from 'superagent'

const baseUrl = 'http://localhost:4000' //define a url to fetch data

export const GET_ALL_ADS = 'GET_ALL_ADS'
export const GET_AD = 'GET_AD'
export const CREATE_AD = 'CREATE_AD'

export const getAllProducts = () => (dispatch) => {
  request
    .get(`${baseUrl}/ads`)
    .then(response => dispatch({
      type: GET_ALL_ADS,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const getAd = (adId) => (dispatch) => {
  request
    .get(`${baseUrl}/ads/${adId}`)
    .then(response => dispatch({
      type: GET_AD,
      payload: response.body
    }))
    .catch(err => alert(err))
}

export const createAd = (ad) => (dispatch) => {
  request
    .post(`${baseUrl}/ads`)
    .send(ad)
    .then(response => dispatch({
      type: CREATE_AD,
      payload: response.body
    }))
    .catch(err => alert(err))
}
