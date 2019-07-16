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

  return fetch(GET_EMPLOYEES, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const deleteEmployeeService = (request) => {
  const DELETE_EMPLOYEE = `${BASE_URL}/admin/employees/delete`;
  
  const parameters = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.employee)
  };

  return fetch(DELETE_EMPLOYEE, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};
