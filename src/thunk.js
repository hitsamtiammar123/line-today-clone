import axios from 'axios';

const callAPI = (type,url, payload, onSend, onSuccess, onFailed) => {
  const _onSend = typeof onSend === 'function' ? onSend : () => {};
  const _onSuccess = typeof onSuccess === 'function' ? onSuccess : () => {};
  const _onFailed = typeof onFailed === 'function' ? onFailed : () => {};
  
  let api;

  switch(type.toLowerCase()){
    case 'get':
      api = axios.get;
    break;
    default:
      return (dispatch) => dispatch({});
  }

  return (dispatch) => {
    if(!url){
      return (dispatch) => dispatch({});
    }

    dispatch(_onSend(payload));
    return api(url,{
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
      }
    })
      .then((response) => dispatch(_onSuccess(response.data)))
      .catch((err)=> dispatch(_onFailed(err)))
  }
};

const get = (url, payload, onSend, onSuccess, onFailed) => {
  return callAPI('get', url, payload, onSend, onSuccess, onFailed)
}

const res = {
  get
}

export default res;