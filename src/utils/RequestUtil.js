import axios from 'axios';

class RequestUtil {
  makeRequest(request) {
    const axiosRequest = Object.assign({}, request);

    axiosRequest.baseURL = 'http://localhost:3001/';

    const requestPromise = axios(axiosRequest);

    return requestPromise;
  }
}

export default new RequestUtil();
