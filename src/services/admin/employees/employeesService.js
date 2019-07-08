import { getCookie } from '../../../utils/cookies';

export const employeesService = (request) => {
  const REGISTER_API_ENDPOINT = `http://localhost:3000/api/v1/admin/employees/new`;
  
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.employee)
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const fetchEmployeesService = (request) => {
  const REGISTER_API_ENDPOINT = `http://localhost:3000/api/v1/admin/employees/list?userID=${request.employee.admin.userID}`;
  
  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};
