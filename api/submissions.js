import { SERVER_URL } from '@env';
import { readCredentials } from './secureStore';

const requestCreateSubmission = async (submissionInput) => {
  const url = `${SERVER_URL}/submissions/new`;
  const credentials = await readCredentials();

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials.token
    },
    body: JSON.stringify(submissionInput)
  });

  return await response.json();
};

const requestGetMySubmissions = async (userId) => {
  const url = `${SERVER_URL}/submissions/${userId}`;
  const credentials = await readCredentials();

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials.token
    }
  });

  return await response.json();
};

const requestUpdateSubmissionStatus = async (submissionIds) => {
  const url = `${SERVER_URL}/submissions/status`;
  const credentials = await readCredentials();

  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': credentials.token
    },
    body: JSON.stringify({ submissionIds })
  });

  return await response.json();
};

const submissionAPI = {
  requestCreateSubmission,
  requestGetMySubmissions,
  requestUpdateSubmissionStatus
};

export default submissionAPI;
