// import { Alert } from 'react-native';
import axios from "axios";
import Http from "../api/http";

const staticPath = Http.APIURL;

global.cancel = [];
const APICaller = (endPoint, method, token, body) => {
  return axios({
    method: method || "get",
    url: `${staticPath}/${endPoint}`,
    data: body && JSON.parse(body)
  })
    .then(response => response)
    .catch(error => {
      console.log(error);
    });
};

export default APICaller;
