import axios from 'axios';

const requestAxios = axios.create({
  baseURL: 'https://vue3-bank-online-default-rtdb.firebaseio.com/',
});

export default requestAxios;
