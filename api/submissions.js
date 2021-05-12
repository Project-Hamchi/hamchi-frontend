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

const submissionAPI = {
  requestCreateSubmission,
};

export default submissionAPI;
