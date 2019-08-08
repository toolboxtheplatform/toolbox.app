import { getCookie } from '../../../utils/cookies';

const BASE_URL = `http://localhost:3000/api/v1`;

export const newEmployeeService = (request) => {
  const NEW_EMPLOYEE = `${BASE_URL}/admin/employees/new`;
  
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.employee)
  };

  return fetch(NEW_EMPLOYEE, parameters)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
};

export const getEmployeesService = (request) => {
  const GET_EMPLOYEES = `${BASE_URL}/admin/employees?userID=${request.employee.admin.userID}`;
  
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
    .catch(error => {
      return error;
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
    .catch(error => {
      return error;
    });
};

export const searchEmployeeService = request => {
  const { searchTerm } = request.payload;
  const { userID, role } = request.payload.admin;
  const SEARCH_EMPLOYEE = `${BASE_URL}/admin/employees/search?term=${searchTerm}&userID=${userID}&role=${role}`;
  
  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
  };

  return fetch(SEARCH_EMPLOYEE, parameters)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
};

export const updateEmployeeService = (request) => {
  // yet to be implemented
};
