export const registerUserService = (request) => {
  const REGISTER_API_ENDPOINT = 'http://localhost:3000/api/v1/register';
  
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.user)
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
};

export const loginUserService = (request) => {
  const LOGIN_API_ENDPOINT = 'http://localhost:3000/api/v1/login';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.user)
  };

  return fetch(LOGIN_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
};

export const renewPasswordService = request => {
  const RENEW_PASSWORD = 'http://localhost:3000/api/v1/forgot';

  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request.payload)
  };

  return fetch(RENEW_PASSWORD, parameters)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
};
