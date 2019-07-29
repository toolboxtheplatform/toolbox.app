import { getCookie } from '../../../utils/cookies';

const BASE_URL = `http://localhost:3000/api/v1`;

export const getToolsService = request => {
  let GET_TOOLS = '';

  if (request.payload.userID) {
    GET_TOOLS = `${BASE_URL}/tools?id=${request.payload.userID}`;
  } else {
    GET_TOOLS += `${BASE_URL}/tools?id=${request.payload.admin.userID}&role=${request.payload.admin.role}`;
  }
  
  const parameters = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    }
  };

  return fetch(GET_TOOLS, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};


export const newToolService = (request) => {
  const NEW_TOOL = `${BASE_URL}/tools/new`;
  
  const parameters = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.tool)
  };

  return fetch(NEW_TOOL, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const deleteToolService = request => {
  const DELETE_TOOL = `${BASE_URL}/tools/delete`;
  
  const parameters = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.id)
  };

  return fetch(DELETE_TOOL, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};

export const updateToolsService = request => {
  const DELETE_TOOL = `${BASE_URL}/tools/update`;
  
  const parameters = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': getCookie('token')
    },
    body: JSON.stringify(request.payload),
  };

  return fetch(DELETE_TOOL, parameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json;
    });
};
