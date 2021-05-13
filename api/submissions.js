import { SERVER_URL } from '@env';

const requestCreateSubmission = async (submissionInput) => {
  const url = `${SERVER_URL}/submissions/new`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(submissionInput)
  });

  return await response.json();
};

const requestUpdateSubmissionStatus = async (submissionIds) => {
  const url = `${SERVER_URL}/submissions/status`;
  const response = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ submissionIds })
  });

  return await response.json();
};

const submissionAPI = {
  requestCreateSubmission,
  requestUpdateSubmissionStatus
};

export default submissionAPI;
