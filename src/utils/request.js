import fetch from 'dva/fetch';
import qs from 'querystring';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function handleHeaders(options) {
  const headers = options.headers = options.headers ? options.headers : {};
  const defaultHeaders = {
    'Content-type': 'application/x-www-form-urlencoded;chartset=UTF-8',
  }
  options.headers = Object.assign({}, defaultHeaders, headers);

  if (options.methods === 'post') {
    var body = options.body ? options.body : {};
    body = qs.stringify(body);
    options.body = body;
  }
}


/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
