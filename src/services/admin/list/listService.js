import { getCookie } from '../../../utils/cookies';

export const listService = () => {
  const API_ENDPOINT = `http://localhost:3000/api/v1/admin/tools/list`;
  
  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
  };

  return fetch(API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};
