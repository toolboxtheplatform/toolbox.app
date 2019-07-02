import { getCookie } from '../../../utils/cookies';

export const toolService = (request) => {
  const REGISTER_API_ENDPOINT = `http://localhost:3000/api/v1/admin/tool/new`;
  
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.tool)
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const deleteToolService = (request) => {
  const REGISTER_API_ENDPOINT = `http://localhost:3000/api/v1/admin/tool/delete`;
  
  const parameters = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.id)
  };

  return fetch(REGISTER_API_ENDPOINT, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};
