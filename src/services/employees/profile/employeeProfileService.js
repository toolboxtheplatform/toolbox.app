import { getCookie } from '../../../utils/cookies';

const BASE_URL = `http://localhost:3000/api/v1/employees`;

export const employeeProfileService = () => {
  const PROFILE_API = `${BASE_URL}/profile?id=${getCookie('userID')}`;
  
  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
  };

  return fetch(PROFILE_API, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};
