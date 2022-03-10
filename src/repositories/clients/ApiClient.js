import axios from 'axios';
// import ModyoProfileClient from './ModyoProfileClient';
import liquidParser from '../../liquid/liquidParser';

const externalApiBase = liquidParser.parse('{{account.url}}');

const apiClient = axios.create({
  baseURL: externalApiBase,
});

// const injectToken = async (config) => {
//   try {
//     const response = await ModyoProfileClient.get('me');
//     const newConfig = config;
//     newConfig.headers.authorization = `Bearer ${response.data.delegated_token.access_token}`;
//     return newConfig;
//   } catch (error) {
//     throw new Error('Unauthorized');
//   }
// };
//
// apiClient.interceptors.request.use(injectToken);

export default apiClient;
