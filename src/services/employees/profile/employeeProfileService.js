import { getCookie } from '../../../utils/cookies';

const BASE_URL = `http://localhost:3000/api/v1/employees`;

export const employeeProfileService = request => {
  const PROFILE_API = `${BASE_URL}/profile?id=${request.id.id}`;
  
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
    .catch(error => {
      return error;
    });
};

export const updateProfileService = request => {
  const PROFILE_API = `${BASE_URL}/profile`;
  
  const parameters = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.profile)
  };

  return fetch(PROFILE_API, parameters)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
};
