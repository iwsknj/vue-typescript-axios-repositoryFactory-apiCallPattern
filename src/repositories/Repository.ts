import axios from 'axios';

const baseDomain: string = process.env.VUE_APP_API_URL;

const baseURL: string = `${baseDomain}`;

export default axios.create({
  baseURL,
});
